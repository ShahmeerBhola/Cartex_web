import React from "react";
import Header from "../Images/Main/Header.png";
import Baggage from "../Images/Airport/baggage.png";
import Partner from "../Images/Airport/partner.png";
import City from "../Images/Airport/city.png";
import Parcel from "../Images/Airport/parcel.png";
import Transfer from "../Images/Airport/transfer.png";
import Interterminal from "../Images/Airport/Interterminal.png";
import Group from "../Images/Airport/Group.png";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function AirportTransfer() {
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
            <div className=" flex flex-col w-4/5 ">
              <div className="flex flex-row  ">
                <h3 className="font-bold text-xl w-3/5">
                  Book doorstep baggage services to and from the airport with
                  complete assistance
                </h3>
                <div className="border-2 w-2/5 rounded-full flex flex-row  h-[50px]   ">
                  <button className="w-1/2 text-center rounded-full font-bold text-white text-base bg-[#1A7DC1]">
                    Local
                  </button>
                  <button className="w-1/2 text-center font-bold text-base">
                    Outstation
                  </button>
                </div>
              </div>
              <hr className="w-full my-6" />
              <div className="border-2 w-full rounded-full flex flex-row  h-[40px]   ">
                <button className="w-1/2 outline-0 text-center rounded-full flex flex-row font-bold text-white justify-center items-center gap-2 text-base bg-[#F47521]">
                  <FlightTakeoffIcon className="text-white" />
                  <h3>To the Airport</h3>
                </button>
                <button className="w-1/2 outline-0 text-center rounded-full flex flex-row font-bold  justify-center items-center gap-2 text-base ">
                  <FlightLandIcon />
                  <h3>From the Airport</h3>
                </button>
              </div>
              <div className="mt-3 flex flex-row gap-2 ">
                <div className="rounded-lg border-[#CCCCCC]  border-2  px-2 w-1/3">
                  <div className="text-[15px] text-[#F47521] font-bold">
                    Name
                  </div>
                  <input
                    className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-[#707070]"
                    placeholder="Enter Name"
                  ></input>
                </div>
                <div className="rounded-lg border-[#CCCCCC]  border-2 w-1/3 px-2 py-2">
                  <div className="text-[15px] text-[#F47521] font-bold">
                    Mobile No. *
                  </div>

                  <div className="flex flex-row">
                    <span className="border-[1px] rounded-lg border-[#F47521] text-sm p-1 ">
                      <label className="text-[#F47521]" for="phonecode">
                        <select id="phonecode">
                          <option value="+1">+1</option>
                        </select>
                      </label>
                    </span>
                    <input
                      className="font-bold text:lg md:text-2xl text-[#707070] w-full outline-0 indent-2"
                      placeholder="Enter Mobile NO."
                    ></input>
                  </div>
                </div>
                <div className="rounded-lg border-[#CCCCCC]  border-2  px-2 w-1/3">
                  <div className="text-[15px] text-[#F47521] font-bold">
                    Email
                  </div>
                  <input
                    className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-[#707070]"
                    placeholder="Enter Email"
                  ></input>
                </div>
              </div>
              <div className="mt-3 flex flex-row gap-2 ">
              <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/2">
                  <div className="flex flex-row justify-between">
                  <div className="text-[15px] text-[#F47521] font-bold">
                    Bags
                  </div>
                  <KeyboardArrowDownIcon className='text-[#F47521]'/>
                  </div>
                  <h3
                    className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-black"
                  > Up to 2 bags</h3>
                  <h2 className="text-xs text-[#CCCCCC]">Check in Bags up to 25kg</h2>
                </div>
                <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/2">
                <div className="flex flex-row justify-between">
                  <div className="text-[15px] text-[#F47521] font-bold">
                  Date & Time Slot For Pickup
                  </div>
                  <KeyboardArrowDownIcon className='text-[#F47521]'/>
                  </div>
                  <h3
                    className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-black"
                  > Thursday, 28 October, 2021</h3>
                  <div className="flex flex-row gap-2">
                  <h2 className="text-xs  text-[#1A7DC1]  ">Select Time Slot</h2>
                  <KeyboardArrowDownIcon className='text-[#1A7DC1]'/>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-2  my-2">
                  <InfoOutlinedIcon className="text-[#FF0000]"/>
              <h3 className='text-xs'>Adding bags / weight at the time of pick is allowed.</h3>
              </div>
              <div className="mt-3 flex flex-row gap-2 ">
              <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/4">
                  <div className="flex flex-row justify-between">
                  <div className="text-[15px] text-[#F47521] font-bold">
                  Select City of Service
                  </div>
                  <KeyboardArrowDownIcon className='text-[#F47521]'/>
                  </div>
                  <h3
                    className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-black"
                  > Bangalore</h3>
                </div>
                <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/4">
                  <div className="flex flex-row justify-between">
                  <div className="text-[15px] text-[#F47521] font-bold">
                  Delivery Airport
                  </div>
                  <KeyboardArrowDownIcon className='text-[#F47521]'/>
                  </div>
                  <h3
                    className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-black"
                  >KIAL Bangalore</h3>
                </div>
                <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/2">
                <div className="flex flex-row justify-between">
                  <div className="text-[15px] text-[#F47521] font-bold">
                  Pickup Address
                  </div>
                  <KeyboardArrowDownIcon className='text-[#F47521]'/>
                  </div>
                  <h3
                    className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-black"
                  > Fill /provide pick-up address</h3>
                </div>
              </div>
              <div className="mt-3 flex flex-row gap-2 ">
                <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/2">
                  <div className="flex flex-row justify-between">
                  <div className="text-[15px] text-[#F47521] font-bold">
                  Departure Dates
                  </div>
                  <KeyboardArrowDownIcon className='text-[#F47521]'/>
                  </div>
                  <h3
                    className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-black"
                  >KIAL Bangalore</h3>
                </div>
                <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/2">
                <div className="flex flex-row justify-between">
                  <div className="text-[15px] text-[#F47521] font-bold">
                  Select Time to meet CarterX at Airport
                  </div>
                  <KeyboardArrowDownIcon className='text-[#F47521]'/>
                  </div>
                  <h3
                    className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-black"
                  > 09:00 AM</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirportTransfer;
