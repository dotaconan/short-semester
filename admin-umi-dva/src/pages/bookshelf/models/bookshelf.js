import * as bookService from '../services/bookshelf';

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
    *getBookData({ payload: { page = 1 } }, { call, put }){
      const { data } = yield call(bookService.get, { page });
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
      yield call(bookService.remove, id);
      const page = yield select(state => state.bookshelf.page);
      yield put({ type: 'getBookData', payload: { page } });
    },
    *patch({ payload: { id, values } }, { call, put, select }) {
      yield call(bookService.patch, id, values);
      const page = yield select(state => state.bookshelf.page);
      yield put({ type: 'getBookData', payload: { page } });
    },
    *create({ payload: values }, { call, put, select }) {
      yield call(bookService.create, values);
      const page = yield select(state => state.bookshelf.page);
      yield put({ type: 'getBookData', payload: { page } });
    },
  },
  // 监听路由
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        console.log(pathname, query)
        if (pathname === '/bookshelf') {
          dispatch({ type: 'getBookData', payload: query });
        }
      });
    },
  },
};
