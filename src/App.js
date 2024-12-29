import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHomepage from './components/homepage/MainHomepage';
import FAQs from './components/FAQs/FAQs';
import NavBar from './components/homepage/NavBar';
import About from './components/about/About'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHomepage />} />
        <Route path="/faqs" element={
        <>
        <NavBar/><FAQs />
        </>} />
        <Route path="/about" element={
        <>
        <NavBar/><About />
        </>} />
      </Routes>
    </Router>
  );
}

export default App;
