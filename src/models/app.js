
export default {

  namespace: 'app',

  state: {},

  subscriptions: {
    // setup({ dispatch, history }) {
    // },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
