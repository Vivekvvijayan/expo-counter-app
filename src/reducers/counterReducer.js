const initialState = {
    count: 0
}
const counterReducer = (state = initialState.count, action) => {

    switch (action.type) {
        case 'INCREMENT':

            return {
                ...state,
                state: state + 1
            }

        case 'DECREMENT':
            return {
                ...state,
                state: state - 1
            }

        default:
            return state;
    }

}

export default counterReducer;