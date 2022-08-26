const initialState = {
    moviesLoaded: [],
    moviesFavorites: [],
    movieDetail: {}
};

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                moviesLoaded: action.payload.Search
            };
            // default: return state
            default: return {...state}
    }
}