import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RBNavbar from './components/rb/RBNavbar';
import RBFooter from './components/rb/RBFooter';
import HomeRB from './pages/HomeRB';
import AboutRB from './pages/AboutRB';

function App() {
  return (
    <Router>
      <RBNavbar />
      
      <Routes>
        <Route path="/" element={<HomeRB />} />
        <Route path="/about" element={<AboutRB />} />
      </Routes>
      
      <RBFooter />
    </Router>
  );
}

export default App;