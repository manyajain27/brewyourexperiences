import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHomepage from './components/homepage/MainHomepage';
import FAQs from './components/FAQs/FAQs';
import NavBar from './components/homepage/NavBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHomepage />} />
        <Route path="/faqs" element={
        <>
        <NavBar/><FAQs />
        </>} />
      </Routes>
    </Router>
  );
}

export default App;
