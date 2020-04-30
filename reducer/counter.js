const initialState = {
	value : 0
}
export default  (state = initialState , action) => {
	switch (action.type) {
        case 'INCREMENT_COUNTER':
            return {...state, value: state.value + 1};
        case 'DECREMENT_COUNTER':
            return {...state, value: state.value - 1};
        default:
            return {...state};
    }	
}
