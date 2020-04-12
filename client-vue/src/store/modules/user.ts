import { createModule } from 'direct-vuex';

interface State {
  current: string | null;
}

const state: State = {
  current: null,
};

const mutations = {
  setCurrentUser(state: State, current: string) {
    state.current = current;
  },
};

export default createModule({
  namespaced: true,
  state,
  mutations,
});
