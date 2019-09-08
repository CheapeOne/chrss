import { Model } from 'objection';

export default class Feed extends Model {
  readonly id!: number;

  static get tableName() {
    return 'feeds';
  }
}
