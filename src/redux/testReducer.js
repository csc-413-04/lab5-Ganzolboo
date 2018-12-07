const initialState = {
    test: 'test value',
    messages: ['a demo message'],
};

const testReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'LOAD_MESSAGES':
        return Object.assign({}, state, {
            messages: action.messages,
        });
        case 'IMPORT_MESSAGES':
        const newMessages = state.messages.slice(0);
        newMessages.unshift(action.messages)
        return Object.assign({}, state, {
            messages: newMessages,
        });
        default:
            return state;
    }
};

export default testReducer;