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

function AirportTransfer() {
  const [step,setStep]=React.useState(0);
  const matches = useMediaQuery('(max-width:600px)');
  const navigate=useNavigate();

  console.log("steps",step);
  return (
<div className="w-full bg-[#EEEEEE]">
      <div className="w-full">
        <img className="relative h-[400px] w-full" src={Header} />
      </div>
     <div className=" absolute w-full top-[150px]" >
       {matches && <>
        <div className=" w-10/12  mx-auto">
        <div className="bg-white rounded-2xl px-3 py-2 lg:px-3 lg:py-3 shadow-xl">
            <div className="w-full ">
              <div className="flex flex-col gap-2">
                <div className={`border-2 rounded-lg flex flex-row gap-2 w-full p-1 items-center ${step==0 && '!border-[#F47521]'}`} onClick={()=>{setStep(0); navigate("local")}}>
                  <img src={Baggage} />
                  <h3 className="font-bold text-base">
                    Airport Baggage Assistance
                  </h3>
                </div>
                <div className={`border-2 rounded-lg flex flex-row gap-2 w-full p-1 items-center ${step==1 && '!border-[#F47521]'}`} onClick={()=>setStep(1)}>
                  <img src={Partner} />
                  <h3 className="font-bold text-base">Alliance Partners</h3>
                  <img src={Group} />
                </div>{" "}
                <div className={`border-2 rounded-lg flex flex-row gap-2 w-full p-1 items-center ${step==2 && '!border-[#F47521]'}`} onClick={()=>{setStep(2); navigate("localparcel")}}>
                  <img src={Parcel} />
                  <h3 className="font-bold text-base">Local Parcels</h3>
                </div>{" "}
                <div className={`border-2 rounded-lg flex flex-row gap-2 w-full p-1 items-center ${step==3 && '!border-[#F47521]'}`} onClick={()=>{setStep(3);navigate("cargotransfer")}}>
                  <img src={Transfer} />
                  <h3 className="font-bold text-base">Cargo Transfers</h3>
                </div>{" "}
                <div className={`border-2 rounded-lg flex flex-row gap-2 w-full p-1 items-center ${step==4 && '!border-[#F47521]'}`} onClick={()=>{setStep(4);navigate("citytransfer")}}>
                  <img src={City} />
                  <h3 className="font-bold text-base">City Transfers</h3>
                </div>{" "}
                <div className={`border-2 rounded-lg flex flex-row gap-2 w-full p-1 items-center ${step==5 && '!border-[#F47521]'}`} onClick={()=>{setStep(5);navigate("interterminal")}}>
                  <img src={Interterminal} />
                  <h3 className="font-bold text-base">
                    Interterminal Transfers
                  </h3>
                </div>
                <div className={`border-2 rounded-lg flex flex-row gap-2 w-full p-1 items-center ${step==6 && '!border-[#F47521]'}`} onClick={()=>{setStep(6);navigate("olacarter")}}>
                  <img src={Ola} />
                  <h3 className="font-bold text-base">
                    #olacarter
                  </h3>
                </div>
              </div> 
          </div>
        </div>
      </div></>}
     <div className=" md:w-11/12 lg:w-10/12  mx-auto">
        <div className="bg-white rounded-2xl px-1 py-2 lg:px-3 lg:py-3 shadow-xl">
          <div className="md:flex hidden flex-row gap-2">
            <div className="w-[230px] lg:w-[240px] flex">
              <div className="flex flex-col gap-2">
                <div className={`border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${step==0 && '!border-[#F47521]'}`} onClick={()=>{setStep(0)}}>
                  <img src={Baggage} />
                  <h3 className="font-bold text-base">
                    Airport Baggage Assistance
                  </h3>
                </div>
                <div className={`border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${step==1 && '!border-[#F47521]'}`} onClick={()=>setStep(1)}>
                  <img src={Partner} />
                  <h3 className="font-bold text-base">Alliance Partners</h3>
                  <img src={Group} />
                </div>{" "}
                <div className={`border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${step==2 && '!border-[#F47521]'}`} onClick={()=>{setStep(2)}}>
                  <img src={Parcel} />
                  <h3 className="font-bold text-base">Local Parcels</h3>
                </div>{" "}
                <div className={`border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${step==3 && '!border-[#F47521]'}`} onClick={()=>{setStep(3)}}>
                  <img src={Transfer} />
                  <h3 className="font-bold text-base">Cargo Transfers</h3>
                </div>{" "}
                <div className={`border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${step==4 && '!border-[#F47521]'}`} onClick={()=>{setStep(4)}}>
                  <img src={City} />
                  <h3 className="font-bold text-base">City Transfers</h3>
                </div>{" "}
                <div className={`border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${step==5 && '!border-[#F47521]'}`} onClick={()=>{setStep(5)}}>
                  <img src={Interterminal} />
                  <h3 className="font-bold text-base">
                    Interterminal Transfers
                  </h3>
                </div>
                <div className={`border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center ${step==6 && '!border-[#F47521]'}`} onClick={()=>{setStep(6)}}>
                  <img src={Ola} />
                  <h3 className="font-bold text-base">
                    #olacarter
                  </h3>
                </div>
              </div>
            </div>
            <hr className="h-auto w-[1px] bg-[#EEE] " />

            {step===0 && <LocalAirport/>}
            {step===6 && <OlaCarter/>}
            {step===2 && <LocalParcels/>}
            {step===3 && <CargoTransfer/>}
            {step===4 && <CityTransfer/>}
            {step===5 && <Interterminals/>}
            {/* {
              props.children
            } */}
           
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default AirportTransfer;
