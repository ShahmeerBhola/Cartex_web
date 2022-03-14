import React from 'react'
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Bags from '../Images/Airport/Baggage/Bags.png';
import Cab from '../Images/Airport/Baggage/Cab.png';
import Luggage from '../Images/Airport/Baggage/Luggage.png';
import Plane from '../Images/Airport/Baggage/Plane.png';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import ControlledCheckbox from "./ControlledChecked";
import {useNavigate} from 'react-router-dom';
function OutstationAirport({step,setStep}) {
//   const navigate=useNavigate();
  return (
    <>
    <div className=" flex flex-col w-4/5 ">
              <div className="flex flex-row  ">
                <h3 className="font-bold text-xl w-3/5">
                  Book doorstep baggage services to and from the airport with
                  complete assistance
                </h3>
                <div className="border-2 w-2/5 rounded-full flex flex-row  h-[50px]   ">
                  <button className="w-1/2 text-center font-bold text-base" onClick={()=>{setStep(0)}} >
                    Local
                  </button>
                  <button className="w-1/2 text-center rounded-full font-bold text-white text-base bg-[#1A7DC1]" >
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
                    <KeyboardArrowDownIcon className="text-[#F47521]" />
                  </div>
                  <h3 className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-black">
                    {" "}
                    Up to 2 bags
                  </h3>
                  <h2 className="text-xs text-[#CCCCCC]">
                    Check in Bags up to 25kg
                  </h2>
                </div>
                <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/2">
                  <div className="flex flex-row justify-between">
                    <div className="text-[15px] text-[#F47521] font-bold">
                      Date & Time Slot For Pickup
                    </div>
                    <KeyboardArrowDownIcon className="text-[#F47521]" />
                  </div>
                  <h3 className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-black">
                    {" "}
                    Thursday, 28 October, 2021
                  </h3>
                  <div className="flex flex-row gap-2">
                    <h2 className="text-xs  text-[#1A7DC1]  ">
                      Select Time Slot
                    </h2>
                    <KeyboardArrowDownIcon className="text-[#1A7DC1]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-2  my-2">
                <InfoOutlinedIcon className="text-[#FF0000]" />
                <h3 className="text-xs">
                  Adding bags / weight at the time of pick is allowed.
                </h3>
              </div>
              <div className="mt-3 flex flex-row gap-2 ">
                <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/4">
                  <div className="flex flex-row justify-between">
                    <div className="text-[15px] text-[#F47521] font-bold">
                      Select City of Service
                    </div>
                    <KeyboardArrowDownIcon className="text-[#F47521]" />
                  </div>
                  <h3 className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-black">
                    {" "}
                    Bangalore
                  </h3>
                </div>
                <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/4">
                  <div className="flex flex-row justify-between">
                    <div className="text-[15px] text-[#F47521] font-bold">
                      Delivery Airport
                    </div>
                    <KeyboardArrowDownIcon className="text-[#F47521]" />
                  </div>
                  <h3 className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-black">
                    KIAL Bangalore
                  </h3>
                </div>
                <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/2">
                  <div className="flex flex-row justify-between">
                    <div className="text-[15px] text-[#F47521] font-bold">
                      Pickup Address
                    </div>
                    <KeyboardArrowDownIcon className="text-[#F47521]" />
                  </div>
                  <h3 className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-black">
                    {" "}
                    Fill /provide pick-up address
                  </h3>
                </div>
              </div>
              <div className="mt-3 flex flex-row gap-2 ">
                <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/2">
                  <div className="flex flex-row justify-between">
                    <div className="text-[15px] text-[#F47521] font-bold">
                      Departure Dates
                    </div>
                    <KeyboardArrowDownIcon className="text-[#F47521]" />
                  </div>
                  <div className="flex flex-row gap-1">
                    <button className="text-white font-bold text-base bg-[#F47521] border-[#F47521] border-2 rounded-full px-2 py-1">
                      28 October, 2021
                    </button>
                    <button className="text-[#F47521] font-bold text-base border-2  border-[#F47521] rounded-full px-2 py-1">
                      29 October, 2021
                    </button>
                  </div>
                  {/* <h3
                    className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-black"
                  >KIAL Bangalore</h3> */}
                </div>
                <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/2">
                  <div className="flex flex-row justify-between">
                    <div className="text-[15px] text-[#F47521] font-bold">
                      Select Time to meet CarterX at Airport
                    </div>
                    <KeyboardArrowDownIcon className="text-[#F47521]" />
                  </div>
                  <h3 className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-black">
                    {" "}
                    09:00 AM
                  </h3>
                </div>
              </div>
              <div className="mt-3 flex flex-col gap-2 ">
                <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full">
                  <div className="text-[15px] text-[#F47521] font-bold pb-2">
                    Add ons
                  </div>
                  <div className="flex flex-row gap-2 pb-2">
                    <div className="flex flex-row w-1/2 gap-1 bg-[#F9F9F9] rounded-xl " >
                      <img src={Bags}/>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center pr-2">
                          <h4 className='text-base'>Express Service</h4>
                          <div className='flex flex-row items-center text-[#F47521] font-bold '>
                            <AddSharpIcon fontSize="small"/>
                            <CurrencyRupeeIcon fontSize='small'/>
                            <span className="text-base ">80</span>
                          </div>
                        </div>
                        <p className='text-xs'>Mauris neque nisi, faucibus non elementum in, convallis et eros. Donec aliquet dignissim.</p> 
                      </div>
                    </div>
                    <div className="flex flex-row w-1/2 gap-1 bg-[#F9F9F9] rounded-xl " >
                      <img src={Cab}/>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center pr-2">
                          <h4 className='text-base'>Cab Service</h4>
                          <div className='flex flex-row items-center text-[#F47521] font-bold '>
                            <AddSharpIcon fontSize="small"/>
                            <CurrencyRupeeIcon fontSize='small'/>
                            <span className="text-base ">80</span>
                          </div>
                        </div>
                        <p className='text-xs'>Mauris neque nisi, faucibus non elementum in, convallis et eros. Donec aliquet dignissim.</p> 
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 pb-2">
                    <div className="flex flex-row w-1/2 gap-1 bg-[#F9F9F9] rounded-xl " >
                      <img src={Plane}/>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center pr-2">
                          <h4 className='text-base'>Lounge for Airport</h4>
                          <div className='flex flex-row items-center text-[#F47521] font-bold '>
                            <AddSharpIcon fontSize="small"/>
                            <CurrencyRupeeIcon fontSize='small'/>
                            <span className="text-base ">80</span>
                          </div>
                        </div>
                        <p className='text-xs'>Mauris neque nisi, faucibus non elementum in, convallis et eros. Donec aliquet dignissim.</p> 
                      </div>
                    </div>
                    <div className="flex flex-row w-1/2 gap-1 bg-[#F9F9F9] rounded-xl " >
                      <img src={Luggage}/>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center pr-2">
                          <h4 className='text-base'>Insurance</h4>
                          <div className='flex flex-row items-center text-[#F47521] font-bold '>
                            <AddSharpIcon fontSize="small"/>
                            <CurrencyRupeeIcon fontSize='small'/>
                            <span className="text-base ">80</span>
                          </div>
                        </div>
                        <p className='text-xs'>Mauris neque nisi, faucibus non elementum in, convallis et eros. Donec aliquet dignissim.</p> 
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
              {/* coupon section */}
              <div className="mt-3 flex flex-col gap-2 ">
                <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/2">
                    <div className="text-[15px] text-[#F47521] font-bold">
                      Discount Coupon
                    </div>
                  <div className="flex flex-row justify-between gap-1 pt-1">
                    <div className="flex flex-col gap-1 w-3/5">
                      <input type='text' placeholder='Enter Coupon Code' className='outline-0 text-2xl font-baseline'/>
                      <span className='text-xs'>E.g. CXBPL100</span>
                    </div>
                    <button className="text-base font-bold text-white p-2 bg-[#F47521] rounded-full align-baseline ">Apply Coupon</button>
                  </div>
                  {/* <h3
                    className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-black"
                  >KIAL Bangalore</h3> */}
                </div>
                </div>
                {/* agreement section */}
                <div className="mt-3 flex flex-row gap-2 ">
                <div className="rounded-lg bg-[#F9F9F9] py-2 px-2 w-full">
                  <div className="flex flex-row justify-start items-start gap-1 pt-1">
                    <ControlledCheckbox/>
                    <p className="pt-2 pr-2 text-sm">I am 18 years and above and agree and understand the Terms And Condition and Privacy Policy. I certify that there are no passport(s), personal documents of importance, cash, illegal items/substances, immediate medicine, alcohol or expensive jewelry. I Agree and certify that CarterX and its associates do not know the contents of the bag and are further released from any liability arising from the contents of my baggage(s).</p>
                  </div>
                  {/* <h3
                    className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-black"
                  >KIAL Bangalore</h3> */}
                </div>
                </div>
                {/* Details */}
                <div className='my-3 flex flex-row gap-6'>
                  <h3 className="text-sm font-bold text-[#1A7DC1]">Departure Booking Information</h3>
                  <h3 className="text-sm font-bold text-[#1A7DC1]">Cancellation And Refund Policy</h3>
                </div>
                {/* Proceed */}
                <div className='flex flex-row justify-between mt-2'>
                  <div className='flex flex-col justify-between'>
                  <div className="text-[15px] text-[#F47521] font-bold">
                      Estimated Time
                    </div>
                    <h2 className="font-bold text-2xl" >30 Oct 2021 after 10:00 AM</h2>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col justify-between items-center">
                      <div className="flex flex-row gap-1 text-4xl font-bold items-center text-[#F47521]">
                        <CurrencyRupeeIcon fontSize='large' />
                        <p>838</p>
                      </div>
                      <span className="text-xs">Inclusive of GST</span>
                    </div>
                    <button className="px-10 items-center text-base text-white font-bold rounded-full bg-[#F47521]">
                      Proceed
                    </button>
                  </div>
                </div>
            </div>
    </>
  )
}

export default OutstationAirport