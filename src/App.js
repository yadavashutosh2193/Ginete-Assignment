// import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from '../src/Redux/Container/Container'
import Gallery from './Gallery';
import GalleryDisc from './GalleryDisc';
function App() {
  return (<>
    <GalleryDisc/>
    <Provider store = {store}>
    <div className="App">
      <Gallery/>
    </div>
    </Provider>
    <div className = "footer">
      <h2 style = {{color:'Highlight'}}>Powerd By Ginete Created by <span style ={{color: 'aliceblue'}}>Ashutosh yadav</span></h2>
    </div>
  </>);
}

export default App;
