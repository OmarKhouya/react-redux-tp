import {marques} from "../Data"
import {salles} from "../Data"
import {selectDropListMarque} from "../Actions";
import {selectDropListSalle} from "../Actions";
import { useDispatch } from "react-redux";

export function DropListMarque() {
    const dispatch = useDispatch()
    return (
        <div>
            
            <select className="form-select" onChange={(e)=>dispatch(selectDropListMarque(e.target.value))}>
                <option value={null}>Select a Marque</option>
                {marques.map((m, index)=> <option key={index} value={m}>{m}</option>)}
            </select>
        </div>
    )
}

export function DropListSalle() {
    const dispatch = useDispatch()
    return (
        <div>
            <select className="form-select" onChange={(e)=>dispatch(selectDropListSalle(e.target.value))}>
                <option value={null}>Select a Salle</option>
                {salles.map((s, index) => <option key={index} value={s}>{s}</option>)}
            </select>
        </div>  
    )
}