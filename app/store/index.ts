/* eslint-disable no-shadow, no-param-reassign */
import {
  getAccessorType,
  mutationTree,
  actionTree,
} from 'nuxt-typed-vuex';
import { Context } from '@nuxt/types';
import query from '@/server/query';
import { Repository, Query, UserPinnedRepositoriesQuery } from 'types/github';

export const state = () => ({
  projects: [] as Repository[],
});

type RootState = ReturnType<typeof state>

export const getters = {
};

export const mutations = mutationTree(state, {
  SET_REPOSITORIES(state, repositories: Repository[]) {
    state.projects = repositories;
  },
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    nuxtServerInit({ commit }, context: Context) {
      return context.$axios.$post<Query<UserPinnedRepositoriesQuery>>('https://api.github.com/graphql', {
        query,
      }, {
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
      })
        .then((data) => {
          commit('SET_REPOSITORIES', data.data.user.pinnedItems.nodes);
        })
        .catch(() => {});
    },
  },
);

export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
});
