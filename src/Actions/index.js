
export const selectDropListMarque = (Marque) =>{
    return {
        type : "DropListMarque",
        payload : Marque,
    }
}

export const selectDropListSalle = (Salle) =>{
    return {
        type : "DropListSalle",
        payload : Salle,
    }
}

export const searchOrdinateur = (Ordinateur) =>{
    return {
        type : "SearchOrdinateur",
        payload : Ordinateur,
    }
}
