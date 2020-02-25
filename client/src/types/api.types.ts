export interface Post {
  id?: number;
  author?: string;
  categories?: Array<string>;
  description?: string;
  image?: string;
  link: string;
  title: string;
  published_at?: string;
}

export interface Tag {
  id: number;
  name: string;
  parent_id?: number;
  children?: Array<Tag>;
}
