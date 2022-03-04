import Abouts from './pages/Abouts';
import './styles/tailwind.css';
import './styles/custom.css';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Abouts/>} />
        <Route path="privacy" element={<PrivacyPolicy/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
