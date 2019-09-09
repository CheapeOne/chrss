import { Model } from 'objection';

const things = {
  frunction: () => 'hhehehe',
};

export default class Feeds extends Model {
  readonly id!: number;
  rss_url: string;
  self_url: string;
  title: string;
  description: string;
  last_build_date: Date;
  created_at: Date;
  updated_at: Date;

  static get tableName() {
    return 'feeds';
  }

  static jsonSchema = {
    type: 'object',
    required: ['rss_url', 'title'],
    properties: {
      id: { type: 'integer' },
      rss_url: { type: 'string' },
      self_url: { type: 'string' },
      title: { type: 'string' },
      description: { type: 'string' },
      last_build_date: { type: 'string' },
    },
  };
}
