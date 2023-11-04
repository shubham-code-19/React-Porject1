import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';




import {Route,Routes} from "react-router-dom"
import Home from './Home';
import Features from './Features';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <>
    
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Featuree' element={<Features/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      
      </Routes>
         
    </>
  );
}

export default App;
