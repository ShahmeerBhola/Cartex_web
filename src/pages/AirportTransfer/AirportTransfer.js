import React from "react";
import Header from "../Images/Main/Header.png";
import Baggage from "../Images/Airport/baggage.png";
import Partner from "../Images/Airport/partner.png";
import City from "../Images/Airport/city.png";
import Parcel from "../Images/Airport/parcel.png";
import Transfer from "../Images/Airport/transfer.png";
import Interterminal from "../Images/Airport/Interterminal.png";
import Group from "../Images/Airport/Group.png";
import LocalAirport from "../components/LocalAirport";
import OutstationAirport from "../components/OutstationAirport";

function AirportTransfer() {
  const [step,setStep]=React.useState(0);
  console.log("steps",step);
  return (
    <div className="w-full bg-[#EEEEEE]">
      <div className="w-full">
        <img className="h-[400px] w-full" src={Header} />
      </div>
      <div className="w-10/12 mx-auto">
        <div className="bg-white rounded-2xl px-3 py-3 shadow-xl">
          <div className="flex flex-row gap-2">
            <div className="w-[240px] flex">
              <div className="flex flex-col gap-2">
                <div className="border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center">
                  <img src={Baggage} />
                  <h3 className="font-bold text-base">
                    Airport Baggage Assistance
                  </h3>
                </div>
                <div className="border-2 rounded-lg flex flex-row gap-1 w-[225px] p-1 items-center">
                  <img src={Partner} />
                  <h3 className="font-bold text-base">Alliance Partners</h3>
                  <img src={Group} />
                </div>{" "}
                <div className="border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center">
                  <img src={Parcel} />
                  <h3 className="font-bold text-base">Local Parcels</h3>
                </div>{" "}
                <div className="border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center">
                  <img src={Transfer} />
                  <h3 className="font-bold text-base">Cargo Transfers</h3>
                </div>{" "}
                <div className="border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center">
                  <img src={City} />
                  <h3 className="font-bold text-base">City Transfers</h3>
                </div>{" "}
                <div className="border-2 rounded-lg flex flex-row gap-2 w-[225px] p-1 items-center">
                  <img src={Interterminal} />
                  <h3 className="font-bold text-base">
                    Interterminal Transfers
                  </h3>
                </div>
              </div>
            </div>
            <hr className="h-auto w-[1px] bg-[#EEE] " />
           {/* {step===0 && <LocalAirport step={step} setStep={setStep}/>}
            { step===1 && <OutstationAirport step={step} setStep={setStep}/>} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirportTransfer;
