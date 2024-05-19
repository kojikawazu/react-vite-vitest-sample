import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
