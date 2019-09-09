import Feeds from './Feeds.model';
import { createModelMixin } from '../../mixins';

const modelMixin = createModelMixin<Feeds>(Feeds);

async function create() {}

const FeedsService = {
  ...modelMixin,
};

export default FeedsService;
