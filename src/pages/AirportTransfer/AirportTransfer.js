import React from "react";
import Header from "../../Images/Main/Header.png";
import Baggage from "../../Images/Airport/baggage.png";
import Partner from "../../Images/Airport/partner.png";
import City from "../../Images/Airport/city.png";
import Ola from "../../Images/Airport/Ola.png";
import Parcel from "../../Images/Airport/parcel.png";
import Transfer from "../../Images/Airport/transfer.png";
import Interterminal from "../../Images/Airport/Interterminal.png";

import Group from "../../Images/Airport/Group.png";
import { useNavigate } from "react-router-dom";
import CargoTransfer from "./CargoTransfer";
import CityTransfer from "./CityTransfer";
import Interterminals from "./InterTerminal";
import LocalParcels from "./LocalParcels";
import LocalAirport from "./LocalAirport";
import OlaCarter from "./OlaCarter";
import MainAirportTransfer from "../../component/MainAirportTransfer";
import { useMediaQuery } from "@mui/material";
import Safety from "../../component/Safety";
import Footer from "../../component/Footer";
import Home from "./Home";
import PackagesSection from "../../components/PackagesSection";

function AirportTransfer() {
  const [step,setStep]=React.useState(0);
  const matches = useMediaQuery('(max-width:768px)');
  const navigate=useNavigate();

  console.log("steps",step);
  return (<>
    <Home/>
  
     {/* <Footer/> */}
    </>
  );
}

export default AirportTransfer;
