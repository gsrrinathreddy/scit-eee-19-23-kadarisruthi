
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Aboutus from './Pages/Aboutus';
import Skills from './Pages/Skills';
import Hobbies from './Pages/Hobbies';
import Experience from './Pages/Experience';
import Qualification from './Pages/Qualification';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>  
      <Routes>
        <Route path="Aboutus" element={<Aboutus/>}/> 
        <Route path="Skills" element={<Skills/>}/> 
        <Route path="Hobbies" element={<Hobbies/>}/> 
        <Route path="Qualification" element={<Qualification/>}/>
        <Route path="Experience" element={<Experience/>}/>

      </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
    