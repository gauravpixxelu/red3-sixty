import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './assets/css/style.css';
import './assets/js/main.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Benefits from './Components/Benefits';
import Pricing from './Components/Pricing';
import BookOnline from './Components/BookOnline';
import Overview from './Components/Overview';
import SMEBenefits from './Components/SMEBenefits';
import Contact from './Components/Contact';
import UltimateUserGuide from './Components/UltimateUserGuide';
import Tools from './Components/Tools';
import SmallBusiness from './Components/SmallBusiness';
import MediumBusiness from './Components/MediumBusiness';
import LargeBusiness from './Components/LargeBusiness';
import AccessToMarket from './Components/AccessToMarket';
import Download from './Components/Download';
 
function App() {
  return ( 
    <div className="App"> 
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/book-online" element={<BookOnline />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/sme-benefits" element={<SMEBenefits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ultimate-user-guide" element={<UltimateUserGuide />} />
          <Route path="/downloads" element={<Download />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/small-business" element={<SmallBusiness />} />
          <Route path="/medium-business" element={<MediumBusiness />} />
          <Route path="/large-business" element={<LargeBusiness />} />
          <Route path="/access-to-market" element={<AccessToMarket />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
