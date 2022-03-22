const initialState = [{
    id: 0,
    todo: 'code'
}]

export default function reducer(state = initialState, action){
    switch(action.type){
        case("ADD_TODO"):
            // console.log("payload",action.payload);
            state = [...state, action.payload];
            return state;
        case("DELETE_TODO"):
            // console.log("payload",action.payload);
            const newState = state.filter((x) => x.id !== action.payload);
            return newState;
        default:
            return state;
    }
}

