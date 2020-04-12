import { createModule } from 'direct-vuex';
import { Tag } from '@/types/api';

interface State {
  active: Tag | null;
}

const state: State = {
  active: null,
};

const mutations = {
  setActiveTag(state: State, activeTag: Tag) {
    state.active = activeTag;
  },
};

export default createModule({
  namespaced: true,
  state,
  mutations,
});
