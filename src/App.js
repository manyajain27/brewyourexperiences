import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHomepage from './components/homepage/MainHomepage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHomepage />} />
      </Routes>
    </Router>
  );
}

export default App;
