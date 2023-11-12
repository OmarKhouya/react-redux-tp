import {Ordinateurs} from "../Data";
import {useSelector, useDispatch} from "react-redux";
import { searchOrdinateur } from "../Actions";
export default function RecherchOrdinateur() {
    const dispatch = useDispatch()
    const Marque = useSelector(state=>state.selectMarque.Marque)
    const Salle = useSelector(state=>state.selectSalle.Salle)
    return (
        <div>
            <select className="form-select" multiple onChange={(e)=>dispatch(searchOrdinateur(e.target.value))}>
                {Ordinateurs.map((O) => {
                    if (Marque === O.Marque && Salle === O.Salle){
                        return  <option key={O.Numero} value={O.Numero}>{O.Intitulé}</option>
                    }
                })}
            </select>
        </div>
    )
}
