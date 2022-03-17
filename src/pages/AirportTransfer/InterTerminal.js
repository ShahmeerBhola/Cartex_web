import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import ControlledCheckbox from "../../components/ControlledChecked";
import { useNavigate} from 'react-router-dom';
import Packing from "../../Images/Airport/Baggage/Packing.png";

function CityTransfer() {
  const navigate=useNavigate();
  const [type,setType]=React.useState(1);
  return (
    <>
    <div className=" flex flex-col w-full md:w-4/5 mt-4 px-2 ">
    <div className="flex flex-row  ">
                <h3 className="font-bold text-lg md:text-xl w-full">
                Domestic / International Baggage Transfer & Inter / Intra Terminal Baggage Transfer
                </h3>
              </div>
              <hr className="w-full my-6" />
              <div className="mt-3 flex flex-col lg:flex-row gap-2 ">
          <div className="rounded-lg border-[#CCCCCC]  border-2  px-2 w-full lg:w-1/3">
            <div className="text-sm lg:text-[15px] text-[#F47521] font-bold">
              Name
            </div>
            <input
              className="outline-0 w-full font-bold text-lg lg:text-2xl border-[#fff] "
              placeholder="Enter Name"
            ></input>
          </div>
          <div className="rounded-lg border-[#CCCCCC]  border-2 w-full lg:w-1/3 px-2 py-2">
            <div className="text-sm lg:text-[15px] text-[#F47521] font-bold">
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
                className="font-bold text-lg lg:text-2xl  w-full outline-0 indent-2"
                placeholder="Enter Mobile NO."
              ></input>
            </div>
          </div>
          <div className="rounded-lg border-[#CCCCCC]  border-2  px-2 w-full lg:w-1/3">
            <div className="text-sm lg:text-[15px] text-[#F47521] font-bold">
              Email
            </div>
            <input
              className="outline-0 w-full font-bold text-lg lg:text-2xl border-[#fff] "
              placeholder="Enter Email"
            ></input>
          </div>
        </div>

              <div className="mt-3 flex flex-row gap-2 ">
              <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
                  <div className="flex flex-row justify-between">
                    <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                      Bags
                    </div>
                    <KeyboardArrowDownIcon className="text-[#F47521]" />
                  </div>
                  <h3 className="outline-0 w-full font-bold text-lg lg:text-2xl border-[#fff] text-black">
                    {" "}
                    Up to 2 bags
                  </h3>
                  <h2 className="text-xs text-[#CCCCCC]">
                    Check in Bags up to 25kg
                  </h2>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-2  my-2">
                <InfoOutlinedIcon className="text-[#FF0000]" />
                <h3 className="text-xs">
                  Adding bags / weight at the time of pick is allowed.
                </h3>
              </div>
              <div className="mt-3 flex flex-col lg:flex-row gap-2 ">
              <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
                  <div className="flex flex-row justify-between">
                       <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                      Arrival Date
                    </div>
                    <KeyboardArrowDownIcon className="text-[#F47521]" />
                  </div>
                  <input
                    className="outline-0 w-full font-bold text-lg lg:text-2xl border-[#fff] "
                    placeholder="Enter Date"
                    defaultValue='Thursday, 28 October, 2021'
                  ></input>
                </div>
                <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
                  <div className="flex flex-row justify-between">
                       <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                       Arrival Time
                    </div>
                    <KeyboardArrowDownIcon className="text-[#F47521]" />
                  </div>
                  <input
                    className="outline-0 w-full font-bold text-lg lg:text-2xl border-[#fff] "
                    placeholder="Select Arrival Time"
                  ></input>
                </div>
              </div>
              <div className="mt-3 flex flex-col lg:flex-row gap-2 ">
              <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
                  <div className="flex flex-row justify-between">
                       <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                      Arrival City
                    </div>
                    <KeyboardArrowDownIcon className="text-[#F47521]" />
                  </div>
                  <input
                    className="outline-0 w-full font-bold text-lg lg:text-2xl border-[#fff] "
                    placeholder="Select Arrival City"
                  ></input>
                </div>
                <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
                  <div className="flex flex-row justify-between">
                       <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                       Arrival Airport
                    </div>
                    <KeyboardArrowDownIcon className="text-[#F47521]" />
                  </div>
                  <input
                    className="outline-0 w-full font-bold text-lg lg:text-2xl border-[#fff] "
                    placeholder="Select Arrival Airport"
                    defaultValue='KIAL Bangalore (Terminal 1)'
                  ></input>
                </div>
              </div>
              <div className='text-xs lg:text-sm font-bold my-4'>
              Departure and Arrival can be 30 days apart. Additional Fragile charges will be applied for all electronic items including TVs. No packing provided. Bags will be stored in as given condition.
              </div>
              {/* Departure */}
              <div className="mt-3 flex flex-col lg:flex-row gap-2 ">
              <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
                  <div className="flex flex-row justify-between">
                       <div className="text-sx lg:text-[15px] text-[#F47521] font-bold">
                      Departure Date
                    </div>
                    <KeyboardArrowDownIcon className="text-[#F47521]" />
                  </div>
                  <input
                    className="outline-0 w-full font-bold text-lg lg:text-2xl border-[#fff] "
                    placeholder="Enter Date"
                    defaultValue='Thursday, 28 October, 2021'
                  ></input>
                </div>
                <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
                  <div className="flex flex-row justify-between">
                       <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                       Departure Time
                    </div>
                    <KeyboardArrowDownIcon className="text-[#F47521]" />
                  </div>
                  <input
                    className="outline-0 w-full font-bold text-lg lg:text-2xl border-[#fff] "
                    placeholder="Select Departure Time"
                  ></input>
                </div>
              </div>
              <div className="mt-3 flex flex-col lg:flex-row gap-2 ">
              <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
                  <div className="flex flex-row justify-between">
                       <div className="text-sx lg:text-[15px] text-[#F47521] font-bold">
                       Departure City
                    </div>
                    <KeyboardArrowDownIcon className="text-[#F47521]" />
                  </div>
                  <input
                    className="outline-0 w-full font-bold text-lg lg:text-2xl border-[#fff] "
                    placeholder="Select Departure City"
                  ></input>
                </div>
                <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
                  <div className="flex flex-row justify-between">
                       <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                       Departure Airport
                    </div>
                    <KeyboardArrowDownIcon className="text-[#F47521]" />
                  </div>
                  <input
                    className="outline-0 w-full font-bold text-lg lg:text-2xl border-[#fff] "
                    placeholder="Select Departure Airport"
                    defaultValue='KIAL Bangalore (Terminal 1)'
                  ></input>
                </div>
              </div>

              
              {/* coupon section */}
              <div className="mt-3 flex flex-row gap-3 ">
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full">
            <div className="text-[15px] text-[#F47521] font-bold">
              Add on
            </div>
            <div className="flex flex-row w-full lg:w-1/2 justify-around lg:gap-1 bg-[#F9F9F9] rounded-xl " >
                      <img src={Packing}/>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center pr-2">
                          <h4 className='text-base'>Insurance</h4>
                          <div className='flex flex-row items-center text-[#1A7DC1] font-bold '>
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
        {/* details */}
          <div className="flex px-2 flex-col gap-3 pt-6 pb-0">
          <h2 className="text-xs lg:text-sm ">
          All order packages will be picked only on further inspection. CarterX additional packing will not be done beyond 24 inches. Order modification is allowed to add bags/extra weight and will be charged extra. TV and electronic should be in original packing will be considered as fragile and charged extra.
          </h2>
          </div>
                {/* agreement section */}
                <div className="mt-3 flex flex-row gap-2 ">
                <div className="rounded-lg bg-[#F9F9F9] py-2 px-2 w-full">
                  <div className="flex flex-row justify-start items-start gap-1 pt-1">
                    <ControlledCheckbox/>
                    <p className="pt-2 pr-2 text-xs lg:text-sm">I agree and understand the Terms And Condition I certify that there are no passport(s), personal documents of importance, cash, illegal items/substance, immediate medicine, alcohol or expensive jewelry and the carriers(s) i.e CarterX and its associate are further released from any liability arising from the contents of my property.</p>
                  </div>
                </div>
                </div>
                {/* Details */}
                <div className='my-3 flex flex-row gap-6'>
                  <h3 className="text-sx lg:text-sm font-bold text-[#1A7DC1]">Cancellation And Refund Policy</h3>
                </div>
                {/* Proceed */}
                <div className="flex flex-col lg:flex-row justify-between mt-2">
          <div className="flex flex-col justify-between">
            <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
              Estimated Time
            </div>
            <h2 className="font-bold text-lg lg:text-2xl">
              30 Oct 2021 after 10:00 AM
            </h2>
          </div>
          <div className="flex flex-row justify-between lg:gap-2">
            <div className="flex flex-col  items-center">
              <div className="flex flex-row gap-1 text-2xl lg:text-4xl font-bold items-center text-[#F47521]">
                <CurrencyRupeeIcon fontSize="large" />
                <p>838</p>
              </div>
              <span className="text-xs">Inclusive of GST</span>
            </div>
            <button className="px-10 items-center text-sm lg:text-base text-white font-bold rounded-full bg-[#F47521]">
              Proceed
            </button>
          </div>
        </div>
            </div>
    </>
  )
}

export default CityTransfer