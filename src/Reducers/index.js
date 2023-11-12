import { combineReducers, createStore } from "redux";
import DLMReducer from "./DropListMarqueReducer";
import DLSReducer from "./DropListSalleReducer"
import SOReducer from "./SearchOrdinateurReducer"

const allReducers = combineReducers({
    selectMarque : DLMReducer,
    selectSalle : DLSReducer,
    searchOrdinateur : SOReducer
})

export const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
