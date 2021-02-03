import axios from 'axios';

const fetchUsersList = (query) => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: 'https://api.github.com/search/users',
            params: {
                accept: 'application/vnd.github.v3+json',
                q: query
            }
        })
        .then( ( {data}) => {
            return dispatch({
                type: 'FETCH_USERS_LIST',
                usersList: data.items,
                totalCount: data.total_count
            })
        })
        .catch( (err) => {
            console.log('Get user list API request err:', err)
        })
    }
};

export default fetchUsersList;