import Abouts from './pages/Abouts';
import './styles/tailwind.css';
import './styles/custom.css';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Terms from './pages/Terms';
import Profile from './pages/Profile';
import ArrivalBook from './pages/ArrivalBook';
import MyTrips from './pages/MyTrips';
import Footer from '../src/component/Footer';
import EditProfile from './pages/EditProfile';
import Header from './pages/Header';
import Blog from './pages/Blog';
import Cancellation from './pages/Cancellation';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Abouts/>} />
        <Route path="privacy" element={<PrivacyPolicy/>} />
        <Route path="terms" element={<Terms/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="/profile/editprofile" element={<EditProfile/>} />
        <Route path="arrivalbook" element={<ArrivalBook/>} />
        <Route path="trip" element={<MyTrips/>}/>
        <Route path='blog' element={<Blog/>} />
        <Route path='cancellation' element={<Cancellation/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
