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


import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

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
        </Routes>
        <Footer />
        <ExitPopup />     
      </Router> 
    </div>
  );
}


export default App;
