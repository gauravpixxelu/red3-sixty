import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './assets/css/style.css';
import './assets/css/mobile.css';
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
import ExitPopup from './Components/ExitPopup';
import SmallBusiness from './Components/SmallBusiness';
import MediumBusiness from './Components/MediumBusiness';
import LargeBusiness from './Components/LargeBusiness';
import AccessToMarket from './Components/AccessToMarket';
import Download from './Components/Download';
import Blogs from './Components/Blogs';
import BlogDetail from './Components/BlogDetail';
import AnAccountant from './Components/AnAccountant';
import UnlockYourPotential from './Components/UnlockYourPotential';
import AConsultant from './Components/AConsultant';
import UnlockYourConsultingSuccess from './Components/UnlockYourConsultingSuccess';
import ACoach from './Components/ACoach';
import UnlockYourCoachingSuccess from './Components/UnlockYourCoachingSuccess';
import Services from './Components/ServicesElements/services';
import FNBMasterUp from './Components/FNBMasterUP/FNBMasterUp';
import TermCondition from './Components/FNBMasterUP/TermCondition';
import NotFound from './Components/NotFound';


import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate', 
  useClassNames: false, 
  disableMutationObserver: false,
  debounceDelay: 50, 
  throttleDelay: 99, 
  offset: 100, 
  delay: 0, 
  duration: 1000, 
  easing: 'ease', 
  once: false,
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});



function App() {
  return (
    <div className="App">
      <Router>
        <Header />        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-company" element={<About />} />
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
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} /> 
          <Route path="/an-accountant" element={<AnAccountant />} />
          <Route path="/potential" element={<UnlockYourPotential />} />
          <Route path="/a-consultant" element={<AConsultant />} />
          <Route path="/consulting-success" element={<UnlockYourConsultingSuccess />} />          
          <Route path="/a-coach" element={<ACoach />} />
          <Route path="/coaching-success" element={<UnlockYourCoachingSuccess />} />    
          <Route path="/services" element={<Services />} />  
          <Route path="/fnbmasterup" element={<FNBMasterUp />} />  
          <Route path="/term-conditions" element={<TermCondition />} />           
          <Route path="/*" element={<NotFound />} />             
        </Routes>
        <Footer />
        <ExitPopup />     
      </Router> 
    </div>
  );
}


export default App;
