//import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import MainRouter from './routes';
import './App.css';
import {CartLogic} from './components/Cart';


const App = () => {
  return (
    <div className='App-container'>
    <CartLogic>
    <MainRouter/>  
    </CartLogic>
    </div>  
  );
}

export default App;
