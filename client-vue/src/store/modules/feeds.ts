import { createModule } from 'direct-vuex';
import { Tag } from '@/types/api';

interface State {
  selectedTag: Tag | null;
}

const state: State = {
  selectedTag: null,
};

const mutations = {
  selectTag(state: State, selectedTag: Tag) {
    state.selectedTag = selectedTag;
  },

  selectAll(state: State) {
    state.selectedTag = null;
  },
};

export default createModule({
  namespaced: true,
  state,
  mutations,
});
