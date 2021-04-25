import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Andre',
          lastName: 'King',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Andre and I've worked as a freelance web developer for 2 years. Let me help you!",
          hourlyRate: 32
        },
        {
          id: 'c2',
          firstName: 'Spencer',
          lastName: 'Hicks',
          areas: ['frontend', 'career'],
          description:
            'I am Spencer and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
