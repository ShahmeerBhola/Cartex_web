import React from "react";
// import Divider from "@mui/material/Divider";
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import { useNavigate } from 'react-router-dom'
// import { useMediaQuery } from "@mui/material";
import OrderTrip from "../component/OrderTrip";


function MyTrips() {
  // const navigate=useNavigate();
  // const smallScreen = useMediaQuery("(max-width:768px)");
  return (
    <div className="bg-[#EEEEEE]">
      <div className="flex flex-col  gap-3 w-full px-2 md:w-10/12 md:mx-auto pt-12">
        <h2 className="font-bold text-2xl md:text-4xl pl-2 pb-10 text-center md:text-left" >
          My Trips
        </h2>
    
        <OrderTrip/>
        <OrderTrip/>
        <OrderTrip/>
   
      </div>
    </div>
  );
}

export default MyTrips;
