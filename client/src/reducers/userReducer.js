export function userReducer(state=null,action){
    switch (action.type) {
        case 'CTRATE_USER':
            
        return action.payload
        case 'UPDATE_USER':
            return action.payload
        default:
            return state
    }
}