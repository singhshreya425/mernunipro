import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Courses from './components/Courses';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/home'element={<Home/>}/>
          <Route path='/about'element={<About/>}/>
          <Route path='/services'element={<Services/>}/>
          <Route path='/navbar'element={<Navbar/>}/>
          <Route path='/courses'element={<Courses/>}/>
          <Route path='/contactus'element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
