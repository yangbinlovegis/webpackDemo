const initState = [
    {
        info:'webpack react redux deom',
        completed: false,
        id:0,
        type:'1'
    }
]

export default function reducer(state=initState, action) {
    switch (state.type) {
        case '1':
            state.assign({},{'info':'test'});
            break;
        default:
            return state;
    }
    return state;
}