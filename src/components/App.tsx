import { BrowserRouter, Route, Routes } from "react-router-dom";
import Developers from "./Developers";
import Home from "./Home";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import About from './About';
import Footer from "./Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/developers" element={<Developers/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
