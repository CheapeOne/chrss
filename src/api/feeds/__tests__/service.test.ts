import request from 'supertest';
import app from '../../../index';

describe('FeedService.getFeeds', () => {
  it('should return no feeds if there are none', () => {
    request(app)
      .get('/feeds')
      .expect(200);
  });
});
