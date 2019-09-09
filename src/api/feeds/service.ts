import Feeds from './Feeds.model';
import { createModelMixin } from '../../mixins';

const modelMixin = createModelMixin<Feeds>(Feeds);

async function create(feedData) {
  const newFeed = await Feeds.query().insert(feedData);
  return newFeed;
}

const FeedsService = {
  ...modelMixin,
  create,
};

export default FeedsService;
