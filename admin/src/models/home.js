export default {
    namespace: 'home',
    state: {
        activeIndex: 0,
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location=> {
                dispatch({
                    type: 'updateActiveIndex',
                    payload: location.pathname
                });
            });
        },
    },
    reducers: {
        updateActiveIndex(state, action){
            let pathname = action.payload;
			let activeIndex = 0;
			console.log(pathname);
            if (/test1/.test(pathname)) {
                activeIndex = 1;
            } else if (/test2/.test(pathname)) {
                activeIndex = 2;
            } else if (/test3/.test(pathname)) {
                activeIndex = 3;
            } else {
                activeIndex = 0;
            }
            return {...state, activeIndex: activeIndex};
        }
    },

}