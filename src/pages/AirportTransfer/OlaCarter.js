import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import ControlledCheckbox from "../../components/ControlledChecked";
import { useNavigate } from "react-router-dom";
import Packing from "../../Images/Airport/Baggage/Packing.png";

function OlaCarter() {
  const navigate = useNavigate();
  const [type, setType] = React.useState(2);
  const [types, setTypes] = React.useState(0);
  return (
    <>
      <div className=" flex flex-col md:w-4/5 w-full mt-4 px-2  ">
        <div className="flex flex-row justify-between ">
          <h3 className="font-bold text-base md:text-lg lg:text-xl w-3/5 md:w-1/2 lg:w-3/5">
            Book Doorstep Baggage services to and from Ola Drop zone at the
            airport!
          </h3>
          <div className="md:border-2 w-fit md:w-1/2 lg:w-2/5 rounded-full flex flex-col md:flex-row h-[40px]  lg:h-[50px]   ">
            <button
              className={`w-full md:w-1/2 px-1 text-center font-bold text-base rounded-full ${
                types == 0 && "!bg-[#1A7DC1] !text-white"
              }`}
              onClick={() => setTypes(0)}
            >
              Drop Baggage
            </button>
            <button
              className={`w-full px-1 md:w-1/2 text-center font-bold text-base rounded-full ${
                types == 1 && "!bg-[#1A7DC1] !text-white"
              }`}
              onClick={() => setTypes(1)}
            >
              Priority Sweep
            </button>
          </div>
        </div>
        <hr className="w-full my-6" />
        <div className="border-2 w-full rounded-full flex flex-row  h-[40px]   ">
          <button
            className={`w-1/2 outline-0 text-center rounded-full flex flex-row font-bold py-5 justify-center items-center gap-2 text-base  ${
              type === 1 && "!text-white !bg-[#F47521] "
            }`}
            onClick={() => {
              setType(1);
            }}
          >
            <h3>Departure</h3>
          </button>
          <button
            className={`w-1/2 outline-0 text-center rounded-full flex flex-row font-bold py-5 justify-center items-center gap-2 text-base ${
              type === 2 && "!text-white !bg-[#F47521] "
            }`}
            onClick={() => {
              setType(2);
            }}
          >
            <h3>Arrival</h3>
          </button>
        </div>
        <div className="mt-3 flex flex-col lg:flex-row gap-2 ">
          <div className="flex flex-col justify-between md:py-2 rounded-lg border-[#CCCCCC]  border-2  px-2 w-full lg:w-1/2">
            <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">Name</div>
            <input
              className="outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] "
              placeholder="Enter Name"
            ></input>
          </div>
          <div className="rounded-lg border-[#CCCCCC]  border-2 w-full lg:w-1/2 px-2 py-2">
            <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
              Mobile No. *
            </div>

            <div className="flex flex-row">
              <span className="flex flex-col justify-between md:py-2  border-[1px] rounded-lg border-[#F47521] text-sm p-1 ">
                <label className="text-[#F47521]" for="phonecode">
                  <select id="phonecode">
                    <option value="+1">+1</option>
                  </select>
                </label>
              </span>
              <input
                className="font-bold text-lg lg:text-lg w-full outline-0 indent-2"
                placeholder="Enter Mobile No"
              ></input>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-col lg:flex-row gap-2 ">
          <div className="flex flex-col justify-between md:py-2  rounded-lg border-[#CCCCCC]  border-2  px-2 w-full lg:w-1/2">
            <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">Email</div>
            <input
              className="outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] "
              placeholder="Enter Email Address"
            ></input>
          </div>
          <div className=" flex flex-col justify-between md:py-2  rounded-lg border-[#CCCCCC]  border-2  px-2 w-full lg:w-1/2">
            <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
              CRN Number
            </div>
            <input
              className="outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] "
              placeholder="Enter CRN Number"
            ></input>
          </div>
        </div>
        <div className="mt-3 flex flex-col lg:flex-row gap-2 ">
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">Bags</div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <h3 className="outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] text-black">
              {" "}
              Up to 2 bags
            </h3>
            <h2 className="text-xs text-[#CCCCCC]">Check in Bags up to 25kg</h2>
          </div>
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Date & Time Slot For Pickup
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <h3 className="outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] text-black">
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
        <div className="mt-3 flex flex-col lg:flex-row gap-2 ">
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Arrival Terminal
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <input
              className="outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] "
              placeholder="Select Arrival Airport"
              defaultValue="KIAL Bangalore"
            ></input>
          </div>
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Delivery Address
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <input
              className="outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] "
              placeholder="Select Delivery Address"
            ></input>
          </div>
        </div>
        {/* details */}
        <div className="flex px-2 flex-col gap-3 pt-6 pb-0">
          <h2 className="text-xs lg:text-sm ">
            Delivery will be made on the same day if bag is dropped before 3pm
            else by 2pm next day. Order modification is not permissible. TVs are
            classified as Fragile and needs to be in original packing for
            carriage
          </h2>
        </div>
        {/* agreement section */}
        <div className="mt-3 flex flex-row gap-2 ">
          <div className="rounded-lg bg-[#F9F9F9] py-2 px-2 w-full">
            <div className="flex flex-row justify-start items-start gap-1 pt-1">
              <ControlledCheckbox />
              <p className="pt-2 pr-2 text-xs lg:text-sm">
                I agree and understand the{" "}
                <span
                  className="text-[#1A7DC1] font-bold cursor-pointer"
                  onClick={() => navigate("/terms")}
                >
                  Terms And Condition
                </span>{" "}
                I certify that there are no passport(s), personal documents of
                importance, cash, illegal items/substance, immediate medicine,
                alcohol or expensive jewelry and the carriers(s) i.e CarterX and
                its associate are further released from any liability arising
                from the contents of my property.
              </p>
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="my-3 flex flex-row gap-2 lg:gap-6">
          <h3
            className="text-xs lg:text-sm font-bold text-[#1A7DC1] cursor-pointer"
            onClick={() => navigate("/arrivalbook")}
          >
            Departure Booking Information
          </h3>
          <h3
            className="text-xs lg:text-sm font-bold text-[#1A7DC1] cursor-pointer"
            onClick={() => navigate("/cancellation")}
          >
            Cancellation And Refund Policy
          </h3>
        </div>
        {/* Proceed */}
        <div className="flex flex-col lg:flex-row justify-between mt-2">
          <div className="flex flex-col justify-between">
            <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
              Estimated Time
            </div>
            <h2 className="font-bold text-lg lg:text-lg">
              30 Oct 2021 after 10:00 AM
            </h2>
          </div>
          <div className="flex flex-row justify-between lg:gap-2">
            <div className="flex flex-col  items-center">
              <div className="flex flex-row gap-1 text-lg lg:text-4xl font-bold items-center text-[#F47521]">
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
  );
}

export default OlaCarter;
