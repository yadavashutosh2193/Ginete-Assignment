// import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from '../src/Redux/Container/Container'
import Gallery from './Gallery';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Gallery/>
    </div>
    </Provider>
  );
}

export default App;
