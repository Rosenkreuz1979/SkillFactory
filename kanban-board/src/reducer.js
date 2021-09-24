export default function reducer(state,action){
    switch (action.type){
        case 'add':
            console.log(action.payload.target);
            return state        
        default:
            return state
    }
}