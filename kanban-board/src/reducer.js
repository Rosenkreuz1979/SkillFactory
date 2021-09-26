export default function reducer(state,action){
    let result
    switch (action.type){
        case 'add':            
        result = state.result.map(todo => {               
            if (todo.title === action.payload.target) {
                 todo.issues.push({
                     'id': Date.now(),
                     'name': `${action.payload.name}`,
                     'description': `${action.payload.description}`
                 })
            }
            return todo
        })
        state.result=result
        localStorage.setItem('todos', JSON.stringify(state))        
        return state
        case 'remove':
        result = state.result.map(todo => {               
            if (todo.title === action.payload.attr) {
                todo.issues = todo.issues.filter(issue => issue.id!==parseInt(action.payload.id,10))                
            }
            return todo
          })
           state.result=result
           localStorage.setItem('todos', JSON.stringify(state)) 
           return state
        
        default:
            return state
    }
}