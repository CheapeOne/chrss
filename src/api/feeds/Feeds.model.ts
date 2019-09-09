import { Model } from 'objection';

export default class Feeds extends Model {
  readonly id!: number;

  static get tableName() {
    return 'feeds';
  }
}
