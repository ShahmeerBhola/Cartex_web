import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Packing from "../../Images/Airport/Baggage/Packing.png";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import ControlledCheckbox from "../../components/ControlledChecked";
import { useNavigate } from "react-router-dom";
function CargoTransfer() {
  const navigate = useNavigate();
  const [type, setType] = React.useState(1);
  return (
    <>
      <div className=" flex flex-col w-4/5 ">
        <div className="flex flex-col gap-2 ">
          <h3 className="font-bold text-xl w-3/5">Cargo Transfers</h3>
          <ul className="list-disc px-5">
            <li className=" text-base"> Delivery anywhere in India</li>
            <li className=" text-base">
              {" "}
              Air (4 days), Surface (4-7 days), Express (36-48 hours)
            </li>
          </ul>
        </div>
        <hr className="w-full my-6" />
        <div className="mt-3">
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full">
            <div className="flex flex-row gap-2 ">
              <div className="flex flex-col gap-3 bg-[#F47521] w-1/3 text-white p-2 rounded-xl">
                <h2>Rush Cargo - Air</h2>
                <ul className="list-disc px-5">
                  <li className=" text-sm"> 4 Days</li>
                  <li className=" text-sm"> Delivery anywhere in India</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 bg-[#F9F9F9] w-1/3  p-2 rounded-xl">
                <h2>Rush Cargo - Surface</h2>
                <ul className="list-disc px-5">
                  <li className=" text-sm"> 4-7 Days</li>
                  <li className=" text-sm"> Delivery anywhere in India</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 bg-[#F9F9F9] w-1/3  p-2 rounded-xl">
                <h2>Rush Cargo - Express</h2>
                <ul className="list-disc px-5">
                  <li className=" text-sm"> 36- 48 Hours</li>
                  <li className=" text-sm"> Delivery anywhere in India</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-row gap-2 ">
          <div className="rounded-lg border-[#CCCCCC]  border-2  px-2 w-1/3">
            <div className="text-[15px] text-[#F47521] font-bold">Name</div>
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
            <div className="text-[15px] text-[#F47521] font-bold">Email</div>
            <input
              className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-[#707070]"
              placeholder="Enter Email"
            ></input>
          </div>
        </div>
        <div className="mt-3 flex flex-row gap-2 ">
          <div className="rounded-lg border-[#CCCCCC] flex flex-col justify-between py-2 border-2  px-2 w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-[15px] text-[#F47521] font-bold">Weight</div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <h3 className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-black">
              10 kgs
            </h3>
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
              <h2 className="text-xs  text-[#1A7DC1]  ">Select Time Slot</h2>
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
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-[15px] text-[#F47521] font-bold">
                Pickup Address
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <input
              className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-[#707070]"
              placeholder="Fill /provide pick-up address"
            ></input>
          </div>
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-[15px] text-[#F47521] font-bold">
                Drop Address
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <input
              className="outline-0 w-full font-bold text:lg md:text-2xl border-[#fff] text-[#707070]"
              placeholder="Fill /provide drop address"
            ></input>
          </div>
        </div>

        {/* coupon section */}
        <div className="mt-3 flex flex-row gap-3 ">
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/2">
            <div className="text-[15px] text-[#F47521] font-bold">
              Discount Coupon
            </div>
            <div className="flex flex-row justify-between gap-1 pt-1">
              <div className="flex flex-col gap-1 w-3/5">
                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  className="outline-0 text-2xl font-baseline"
                />
                <span className="text-xs">E.g. CXBPL100</span>
              </div>
              <button className="text-base font-bold text-white p-2 bg-[#F47521] rounded-full align-baseline ">
                Apply Coupon
              </button>
            </div>
          </div>
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-1/2">
            <div className="text-[15px] text-[#F47521] font-bold">
              Add on
            </div>
            <div className="flex flex-row w-full gap-1 bg-[#F9F9F9] rounded-xl " >
                      <img src={Packing}/>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center pr-2">
                          <h4 className='text-base'>Packing</h4>
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
          <div className="flex flex-col gap-3 py-4">
          <h2 className="text-sm">
            Fragile Charges will be applied for all electronics and TVs in
            original packing only.
          </h2>
          <h2 className="text-sm">
            All items need to be fully packed. Cargo forms will have to be
            filled additionally.
          </h2>
          </div>
        {/* agreement section */}
        <div className="mt-3 flex flex-row gap-2 ">
          <div className="rounded-lg bg-[#F9F9F9] py-2 px-2 w-full">
            <div className="flex flex-row justify-start items-start gap-1 pt-1">
              <ControlledCheckbox />
              <p className="pt-2 pr-2 text-sm">
                I agree and understand the Terms And Condition I certify that
                there are no passport(s), personal documents of importance,
                cash, illegal items/substance, immediate medicine, alcohol or
                expensive jewelry and the carriers(s) i.e CarterX and its
                associate are further released from any liability arising from
                the contents of my property.
              </p>
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="my-3 flex flex-row gap-6">
          <h3 className="text-sm font-bold text-[#1A7DC1]">
            Departure Booking Information
          </h3>
          <h3 className="text-sm font-bold text-[#1A7DC1]">
            Cancellation And Refund Policy
          </h3>
          <h3 className="text-sm font-bold text-[#1A7DC1]">Packing List</h3>
          <h3 className="text-sm font-bold text-[#1A7DC1]">
            Cargo Security Declaration
          </h3>
        </div>
        {/* Proceed */}
        <div className="flex flex-row justify-between mt-2">
          <div className="flex flex-col justify-between">
            <div className="text-[15px] text-[#F47521] font-bold">
              Estimated Time
            </div>
            <h2 className="font-bold text-2xl">16 Nov 2021 Before 11:55 PM</h2>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-row gap-1 text-4xl font-bold items-center text-[#F47521]">
                <CurrencyRupeeIcon fontSize="large" />
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
  );
}

export default CargoTransfer;