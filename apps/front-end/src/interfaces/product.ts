export interface IProduct {
  id: number;
  name: string;
  description: string;
  slug: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
