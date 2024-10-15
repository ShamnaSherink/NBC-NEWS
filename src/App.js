import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import World from './pages/World';
import Politics from './pages/Politics';
import Technology from './pages/Technology';
import Sports from './pages/Sports';
import Business from './pages/Business';
import Footer from './pages/Footer';
import TopNav from './components/TopNav';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/navbar' element={<TopNav/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/world' element={<World/>}/>
    <Route path='/politics' element={<Politics/>}/>
    <Route path='/technology' element={<Technology/>}/>
    <Route path='/sports' element={<Sports/>}/>
    <Route path='/business' element={<Business/>}/>
    <Route path='/footer' element={<Footer/>}/>

</Routes>
   
   </BrowserRouter>

  );
}

export default App;
