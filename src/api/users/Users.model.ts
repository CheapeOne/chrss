import { Model } from 'objection';

export default class Feeds extends Model {
  readonly id!: number;
  email: string;
  password: string;
  name: string;

  static get tableName() {
    return 'users';
  }

  static jsonSchema = {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      id: { type: 'integer' },
      email: { type: 'string' },
      password: { type: 'string' },
      name: { type: 'string' },
    },
  };
}
