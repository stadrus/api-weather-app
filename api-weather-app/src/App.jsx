import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";





function App() {
  
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
