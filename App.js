
// import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Today from './Components/Today';
import Thisweek from './Components/Thisweek';
// import Footer from './Components/Footer';

function App() {
  return (
    // <SignUp />
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Today" element={<Today/>}></Route>
      <Route path='/Thisweek' element={<Thisweek/>}></Route>
      {/* <Route path='/Footer' element={<Footer/>}></Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
