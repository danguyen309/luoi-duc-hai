import { Image, Property } from './shared';

export interface IProduct {
  id: number;
  name: string;
  desc: string;
  slug: string;
  price: number;
  createdAt: number;
  updatedAt: number;
  isFeatured: number;
  cover: Image;
  thumbnails?: Image[];
  properties: Property[];
}
