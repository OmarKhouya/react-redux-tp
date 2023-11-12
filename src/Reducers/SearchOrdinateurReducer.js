
const SOReducer = (state = {Ordinateur : null},action) =>{
    switch (action.type) {
        case ("SearchOrdinateur") :
            return {...state, Ordinateur : action.payload};
        default : return state
    }
}

export default SOReducer;