import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('feeds')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('feeds').insert([
        {
          id: 1,
          rss_url:
            'https://www.youtube.com/feeds/videos.xml?channel_id=UC4rqhyiTs7XyuODcECvuiiQ',
          self_url: 'https://www.youtube.com/channel/UC4rqhyiTs7XyuODcECvuiiQ',
          title: 'Scott The Woz',
          description: '',
          last_build_date: knex.fn.now(),
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
      ]);
    });
}
