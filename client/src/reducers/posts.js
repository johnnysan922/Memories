export default (posts = [], action) => {
    switch(action.type){
        case 'CREATE':
            return posts;
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH':
            return posts;
        default:
            return posts;
    }
}