export interface CartItem {
  productId: string;
  name: string;
  price: number;
  salePrice: number | null;
  image: string;
  quantity: number;
  variant?: {
    size?: string;
    color?: string;
  };
}
