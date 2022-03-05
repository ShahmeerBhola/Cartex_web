import Abouts from './pages/Abouts';
import './styles/tailwind.css';
import './styles/custom.css';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Terms from './pages/Terms';
import Profile from './pages/Profile';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Abouts/>} />
        <Route path="privacy" element={<PrivacyPolicy/>} />
        <Route path="terms" element={<Terms/>} />
        <Route path="profile" element={<Profile/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
