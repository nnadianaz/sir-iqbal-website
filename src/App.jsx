import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from "./Components/Home/Footerf/Header/Header";
// import Navbar from "./Components/Home/Footerf/Navbar/Navbar";
import HomePage from "./Components/Home/Home"; // Make sure this component exists
import HowWorks from './Components/howWork/HowWorks';
import Footer from "./Components/Footerf/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";



function App() {
  return (
    <Router>
       <Header />
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-works" element={<HowWorks />} />
        
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
