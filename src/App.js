import  Navbar from './Components/Navbar';
import './App.css';
import Signup from './Components/Signup';
import WhySenchola from './Components/WhySenchola';
import { Route,Routes } from 'react-router-dom';
import Contact from './Components/Contact'
import Form from './Form/Form'
import Home from './Home/Home'
import Login from './Login/Login';
import Footer from './Components/Footer';
import Servicepage from './Service/Servicepage';
import Aboutus from './About us';

function App() {
  return (
    <div className="App">

      < Navbar />
      <Routes>
        <Route path='/whysenchola' element={<WhySenchola />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/form' element={<Form />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/services' element={<Servicepage />}/>
        {/* <Route path='/about' element={<Aboutus />}/> */}
      </Routes>
      <Footer /> 
     
    </div>
  );
}

export default App;
