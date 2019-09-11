import Feeds from './Feeds.model';
import { createModelMixin } from '../../mixins';

const modelMixin = createModelMixin<Feeds>(Feeds);

async function create(feedData) {
  const newFeed = await Feeds.query().insert(feedData);
  return newFeed;
}

const FeedService = {
  ...modelMixin,
  create,
};

export default FeedService;
