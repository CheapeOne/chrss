import { Model } from "objection";

export default class Post extends Model {
  id!: number;
  title?: string;
  url: string;
}
