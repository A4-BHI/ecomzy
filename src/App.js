import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
     <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
     </div>
    </div>
  );
}

export default App;
