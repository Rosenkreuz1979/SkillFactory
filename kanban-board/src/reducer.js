export default function reducer(state,action){
    switch (action.type){
        case 'add':            
        state.result.map(todo => {               
            if (todo.title === action.payload.target) {
                 todo.issues.push({
                     'id': Date.now(),
                     'name': `${action.payload.name}`,
                     'description': `${action.payload.description}`
                 })
            }
            return todo
        })
        localStorage.setItem('todos', JSON.stringify(state))
        return state
        
        
        default:
            return state
    }
}