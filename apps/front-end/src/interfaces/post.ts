import { Image } from './shared';

export interface IPost {
  id: number;
  title: string;
  slug: string;
  content: {
    type: 'heading' | 'paragraph';
    level?: number;
    children: {
      type: string;
      text: string;
    }[];
  }[];
  cover: Image;
  createdAt: number;
  updatedAt: number;
}
