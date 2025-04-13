import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landingpage from "./pages/Landingpage";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Singup from "./pages/Singup";



function App() {
  return (
    <>
      <Header/>
      
      

        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/Login' element={<Login/>} />
          <Route path='/Singup' element={<Singup/> }/>
          <Route path='/Home' element={<Home/>}/>
        </Routes>
      
      <Footer/>
      
    </>
  );
}

export default App;
