export interface Post {
  id?: number;
  author?: string;
  categories?: Array<string>;
  description?: string;
  image?: string;
  link: string;
  title: string;
}
