import {Provider} from "react-redux";
import {store} from "./Reducers"
import TpApp from "./Components/TpApp";
function App() {

  return (
    <Provider store={store}>
      <TpApp />
    </Provider>
  );
}

export default App;
