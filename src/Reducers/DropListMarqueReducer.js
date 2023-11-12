
const DLMReducer = (state = {Marque : {}},action) =>{
    switch (action.type) {
        case ("DropListMarque") :
            return {...state, Marque : action.payload};
        default : return state
    }
}

export default DLMReducer;