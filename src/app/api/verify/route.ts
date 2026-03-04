import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      orderId,
    } = body;

    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Missing payment details" },
        { status: 400 }
      );
    }

    // Verify signature
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json(
        { error: "Invalid payment signature", success: false },
        { status: 400 }
      );
    }

    // In production: update order status in Firestore
    // await updateDoc(doc(adminDb, 'orders', orderId), {
    //   status: 'confirmed',
    //   razorpayPaymentId: razorpay_payment_id,
    //   razorpayOrderId: razorpay_order_id,
    //   paidAt: new Date(),
    // });

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully",
      orderId,
    });
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json(
      { error: "Verification failed", success: false },
      { status: 500 }
    );
  }
}
