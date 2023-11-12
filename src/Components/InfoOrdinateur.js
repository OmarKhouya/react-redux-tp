import { Ordinateurs } from "../Data";
import {useSelector} from "react-redux"
export default function InfoOrdinateur() {
    const NumberOrdinateur = useSelector(state=>state.searchOrdinateur.Ordinateur)
    return (
        <div>
            <p>Number : {NumberOrdinateur} </p>
            <p>Title : {Ordinateurs.map((O)=>{return O.Numero === Number(NumberOrdinateur) && O.Intitulé})}</p>
            <p>Purchase date : {Ordinateurs.map((O)=>{return O.Numero === Number(NumberOrdinateur) && O.DateAchat})}</p>
        </div>
    )
}
