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
// import Modal from './component/UI/Modal';
import OrderDetail from './pages/OrderDetail';

import Header from './pages/Header';
import Blog from './pages/Blog';
import Cancellation from './pages/Cancellation';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import RegisterAccordianDetail from './component/Accordions/RegisterAccordianDetail';
import CustomerAccordianDetail from './component/Accordions/CustomerAccordion';
import AccountAcordianDetail from './component/Accordions/AccountAcordionDetail';
import OrderAccordianDetail from './component/Accordions/OrderAccordionDetail';
import PaymentAccordianDetail from './component/Accordions/PaymentAccordionDetail';
import PickupAccordianDetail from './component/Accordions/PickupAccordionDetail';
import InsuranceAccordianDetail from './component/Accordions/InsuranceAccordionDetail';
import AirportTransfer from './pages/AirportTransfer';

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
        
        <Route path="trip/orderdetail" element={<OrderDetail/>} />
        <Route path='blog' element={<Blog/>} />
        <Route path='cancellation' element={<Cancellation/>} />
        <Route path='contactus' element={<Contact/>} />
        <Route path='faq' element={<Faq/>} />
        <Route path='faq/register' element={<RegisterAccordianDetail/>} />
        <Route path='faq/customer' element={<CustomerAccordianDetail/>} />
        <Route path='faq/account' element={<AccountAcordianDetail/>} />
        <Route path='faq/order' element={<OrderAccordianDetail/>} />
        <Route path='faq/payment' element={<PaymentAccordianDetail/>} />
        <Route path='faq/pickup' element={<PickupAccordianDetail/>} />
        <Route path='faq/insurance' element={<InsuranceAccordianDetail/>} />
        <Route path='airport' element={<AirportTransfer/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
