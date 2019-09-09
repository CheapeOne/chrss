import Feeds from './Feeds.model';
import { createModelMixin } from '../../mixins';

const modelMixin = createModelMixin(Feeds);

const FeedsService = {
  ...modelMixin,
};

export default FeedsService;
