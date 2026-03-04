import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Razorpay webhook endpoint — verify webhook signature
export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get("x-razorpay-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Missing signature" },
        { status: 400 }
      );
    }

    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(body)
      .digest("hex");

    if (expectedSignature !== signature) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    const event = JSON.parse(body);
    const eventType = event.event;

    switch (eventType) {
      case "payment.captured": {
        const payment = event.payload.payment.entity;
        console.log("Payment captured:", payment.id);
        // In production: update Firestore order status to 'confirmed'
        break;
      }
      case "payment.failed": {
        const payment = event.payload.payment.entity;
        console.log("Payment failed:", payment.id);
        // In production: update Firestore order status to 'failed'
        break;
      }
      case "order.paid": {
        const order = event.payload.order.entity;
        console.log("Order paid:", order.id);
        break;
      }
      default:
        console.log("Unhandled webhook event:", eventType);
    }

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
