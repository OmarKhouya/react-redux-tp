
const DLSReducer = (state = {Salle : {}},action) =>{
    switch (action.type) {
        case ("DropListSalle") :
            return {...state, Salle : action.payload};
        default : return state
    }
}

export default DLSReducer;