
import { DropListMarque, DropListSalle } from './DropList'
import FormNew from './FormNew'
import InfoOrdinateur from './InfoOrdinateur'
import RecherchOrdinateur from "./RecherchOrdinateur"

export default function TpApp() {


    return (
        <div className='container'>
            <div className='mt-3'>
                <label htmlFor="Marque">Marque : </label>
                <DropListMarque/>
                <label htmlFor="Salle">Salle : </label>
                <DropListSalle/>
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
                <div className=''>
                    <h4>Founded Computers </h4>
                    <RecherchOrdinateur />
                </div>
                <div className="border-start border-2" />
                <div>
                    <FormNew />
                </div>
            </div>
            <hr />
            <div className=''>
                <h4>Selected Computers</h4>
                <InfoOrdinateur />
            </div>
        </div>
    )
}
