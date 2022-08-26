export function getMovies(title) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=56023fa6&s=${title}`)
            .ther(response => response.json())
            .then(movies => dispatch({type: 'GET_MOVIES', payload: movies}))
    }
}