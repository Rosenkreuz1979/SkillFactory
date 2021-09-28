export default function userreducer(user,action){
    let userParse = JSON.parse(`[{"name":"AlexVK","avatar":"/imgs/my_ava.jpg"},{"name":"Yulia Tokarevskaya","avatar":"/imgs/yulia.jpg"}]`)
    
    switch (action.type){
        case 'login':
            user = userParse.filter(user => user.name===action.payload.name)[0]
            return user
        case 'logout':            
            user=JSON.parse(`{"name":"Anonymous","avatar":null}`)
            return user
        default:
           return user
    }
}