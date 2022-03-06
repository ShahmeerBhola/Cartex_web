import Abouts from './pages/Abouts';
import './styles/tailwind.css';
import './styles/custom.css';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Terms from './pages/Terms';
import Profile from './pages/Profile';
import ArrivalBook from './pages/ArrivalBook';
import MyTrips from './pages/MyTrips';
import Footer from './component/Footer';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Abouts/>} />
        <Route path="privacy" element={<PrivacyPolicy/>} />
        <Route path="terms" element={<Terms/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="editprofile" element={<EditProfile/>} />
        <Route path="arrivalbook" element={<ArrivalBook/>} />
        <Route path="trip" element={<MyTrips/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
