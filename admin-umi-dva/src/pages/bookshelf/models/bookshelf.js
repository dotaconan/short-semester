import * as bookshelfService from '../services/Bookshelf';

export default {
  namespace: 'bookshelf',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    // 获取用户数据
    *getBookshelfData({ payload: { page = 1 } }, { call, put }){
      const { data } = yield call(bookshelfService.getBookshelf, { page });
      yield put({
        type: 'save',
        payload: {
          data: data.data,
          total: 50,
          page: parseInt(page, 10),
        },
      });
    },
    *remove({ payload: id }, { call, put, select }) {
      yield call(bookshelfService.remove, id);
      const page = yield select(state => state.bookshelf.page);
      yield put({ type: 'getBookshelfData', payload: { page } });
    },
    *patch({ payload: { id, values } }, { call, put, select }) {
      yield call(bookshelfService.patch, id, values);
      const page = yield select(state => state.bookshelf.page);
      yield put({ type: 'getBookshelfData', payload: { page } });
    },
    *create({ payload: values }, { call, put, select }) {
      yield call(bookshelfService.create, values);
      const page = yield select(state => state.bookshelf.page);
      yield put({ type: 'getBookshelfData', payload: { page } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/bookshelf') {
          dispatch({ type: 'getBookshelfData', payload: query });
        }
      });
    },
  },
};
