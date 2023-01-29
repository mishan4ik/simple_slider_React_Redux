import './App.css';
import Slider from "./Component/Slider"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from "./reducers"


const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
      <Slider/>
      </Provider>
    </div>
  );
}

export default App;
