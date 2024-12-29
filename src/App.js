import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHomepage from './components/homepage/MainHomepage';
import FAQs from './components/FAQs/FAQs';
import NavBar from './components/homepage/NavBar';
import About from './components/about/About'
import ContactUs from './components/contact/ContactUs';
import UpcomingTrips from './components/trips/UpcomingTrips';
import Footer from './components/footer/Footer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHomepage />} />
        <Route path="/faqs" element={<><FAQs/><Footer/></>} />
        <Route path="/about" element={<><About/><Footer/></>} />
        <Route path="/contact" element={<><ContactUs/><Footer/></>} />
        <Route path="/trips/upcoming" element={<><UpcomingTrips/><Footer/></>} />
      </Routes>
    </Router>
  );
}

export default App;
