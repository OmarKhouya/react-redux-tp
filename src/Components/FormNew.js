import { Ordinateurs } from "../Data";
import {useSelector} from "react-redux"
export default function FormNew() {
    const Salle = useSelector(state => state.selectSalle.Salle)
    const Marque = useSelector(state => state.selectMarque.Marque)

    const handleInsert = (event) =>{
        event.preventDefault();
        const {number,title,purchaseDate} = document.getElementById("newComputer")

        const newComputer = {
            Numero: Number(number.value),
            Marque: Marque,
            Intitulé: title.value,
            DateAchat: purchaseDate.value,
            Salle: Salle,
        }
        Ordinateurs.push(newComputer)
        number.value = '';
        title.value = '';
        purchaseDate.value = '';
    }
    
    return (
        <div>
            <form onSubmit={handleInsert} id="newComputer">
                {/* <label htmlFor="Marque">Marque : </label>
                <DropListMarque selected={SetSelected}/>
                <label htmlFor="Salle">Salle : </label>
                <DropListSalle selected={SetSelected}/> */}
                <label htmlFor="Num">Number</label>
                <input type="number" className="form-control" name="number"/>
                <label htmlFor="Title">Title</label>
                <input type="text" className="form-control" name="title"/>
                <label htmlFor="PD">Purchase Date</label>
                <input type="text" className="form-control" name="purchaseDate"/>
                <button className="btn btn-outline-success my-3" type="Submit">New Computer</button>
            </form>
        </div>
    )
}
