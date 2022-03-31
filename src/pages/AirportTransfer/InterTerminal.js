import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import ControlledCheckbox from "../../components/ControlledChecked";
import { useNavigate } from "react-router-dom";
import Packing from "../../Images/Airport/Baggage/Packing.png";

function CityTransfer() {
  const navigate = useNavigate();
  const [type, setType] = React.useState(1);
  const [active, setActive] = React.useState(0);

  return (
    <>
      <div className=" flex flex-col w-full md:w-4/5 mt-4 px-2 ">
        <div className="flex flex-row  ">
          <h3 className="font-bold text-lg md:text-xl w-full">
            Domestic / International Baggage Transfer & Inter / Intra Terminal
            Baggage Transfer
          </h3>
        </div>
        <hr className="w-full my-6" />
        <div className="mt-3 flex flex-col lg:flex-row gap-2 ">
          <div className="flex flex-col justify-between md:py-2 rounded-lg border-[#CCCCCC]  border-2  px-2 w-full lg:w-1/3">
            <div className="text-sm lg:text-[15px] text-[#F47521] font-bold">
              Name
            </div>
            <input
              className="outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] "
              placeholder="Enter Name"
            ></input>
          </div>
          <div className="flex flex-col justify-between md:py-2 rounded-lg border-[#CCCCCC]  border-2 w-full lg:w-1/3 px-2 py-2">
            <div className="text-sm lg:text-[15px] text-[#F47521] font-bold">
              Mobile No. *
            </div>

            <div className="flex flex-row">
              <span className="border-[1px] rounded-lg border-[#F47521] text-sm p-1 ">
                <label className="text-[#F47521]" for="phonecode">
                  <select className="bg-none" style={{background:"none",backgroundColor:"none"}} id="phonecode">
                    <option value="+1">+1</option>
                  </select>
                </label>
              </span>
              <input
                className="font-bold text-lg lg:text-lg  w-full outline-0 indent-2"
                placeholder="Enter Mobile No"
              ></input>
            </div>
          </div>
          <div className="flex flex-col justify-between md:py-2 rounded-lg border-[#CCCCCC]  border-2  px-2 w-full lg:w-1/3">
            <div className="text-sm lg:text-[15px] text-[#F47521] font-bold">
              Email
            </div>
            <input
              className="outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] "
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
            <select className="bg-none outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] text-black cursor-pointer " style={{WebkitAppearance:"none", MozAppearance:"none",background:"none",backgroundColor:"none"}} >
                    <option value="+1">Up to 2 Bags</option>
                    <option value="+1">Up to 4 Bags</option>
                  </select> 
            <h2 className="text-xs text-[#CCCCCC]">Check in Bags up to 25kg</h2>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-4  my-2">
          <InfoOutlinedIcon className="text-[#FF0000]" />
          <h3 className="text-xs">
            Adding bags / weight at the time of pick is allowed.
          </h3>
        </div>
        <div className="mt-3 flex flex-col lg:flex-row gap-4 ">
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Arrival Date
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <select className="bg-none outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] text-black cursor-pointer " style={{WebkitAppearance:"none", MozAppearance:"none",background:"none",backgroundColor:"none"}} >
                    <option value="+1">Thursday, 28 October, 2021</option>
                    <option value="+1">Thursday, 29 October, 2021</option>
                  </select>
          </div>
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Arrival Time
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <select className="bg-none outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] text-black cursor-pointer" style={{WebkitAppearance:"none", MozAppearance:"none",background:"none",backgroundColor:"none"}} >
              <option value="+1">09:00 AM</option>
              <option value="+1">10:00 AM</option>
            </select>
          </div>
        </div>
        <div className="mt-3 flex flex-col lg:flex-row gap-4 ">
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Arrival City
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
              
            <select className="bg-none outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] cursor-pointer " style={{WebkitAppearance:"none", MozAppearance:"none",background:"none",backgroundColor:"none"}} >
              <option value="+1">Bangalore</option>
              <option value="+1">New Dehli</option>
            </select>
            
          </div>
          
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Arrival Airport
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <select className="bg-none outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] cursor-pointer " style={{WebkitAppearance:"none", MozAppearance:"none",background:"none",backgroundColor:"none"}} >
              <option value="+1">Bangalore</option>
              <option value="+1">New Dehli</option>
            </select>
          </div>
        </div>
       
        <div className="text-xs lg:text-sm font-bold my-4">
          Departure and Arrival can be 30 days apart. Additional Fragile charges
          will be applied for all electronic items including TVs. No packing
          provided. Bags will be stored in as given condition.
        </div>
       
        {/* Departure */}
        <div className="mt-3 flex flex-col lg:flex-row gap-4 ">
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-sx lg:text-[15px] text-[#F47521] font-bold">
                Departure Date
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <select className="bg-none outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] text-black cursor-pointer " style={{WebkitAppearance:"none", MozAppearance:"none",background:"none",backgroundColor:"none"}} >
                    <option value="+1">Thursday, 28 October, 2021</option>
                    <option value="+1">Thursday, 29 October, 2021</option>
                  </select>
          </div>
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Departure Time
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <select className="bg-none outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] text-black cursor-pointer" style={{WebkitAppearance:"none", MozAppearance:"none",background:"none",backgroundColor:"none"}} >
              <option value="+1">09:00 AM</option>
              <option value="+1">10:00 AM</option>
            </select>
          </div>
        </div>
        <div className="mt-3 flex flex-col lg:flex-row gap-4 ">
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-sx lg:text-[15px] text-[#F47521] font-bold">
                Departure City
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <select className="bg-none outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] cursor-pointer " style={{WebkitAppearance:"none", MozAppearance:"none",background:"none",backgroundColor:"none"}} >
              <option value="+1">Bangalore</option>
              <option value="+1">New Dehli</option>
            </select>
          </div>
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Departure Airport
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <select className="bg-none outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] cursor-pointer " style={{WebkitAppearance:"none", MozAppearance:"none",background:"none",backgroundColor:"none"}} >
              <option value="+1">Bangalore</option>
              <option value="+1">New Dehli</option>
            </select>
          </div>
        </div>
        <div className="font-bold text-xs lg:text-sm py-3">
          <p>
          Arrival time and Departure should be at least 6 Hours apart else refund will be automated.
          </p>
          <p>
All electronics items including TVs are accepted only in original packing.
</p>
        <p>
All bags to be handed over in fully locked condition. All zippers are to be locked before handover of bags.
          </p>
        </div>

        {/* coupon section */}
        <div className="mt-3 flex flex-row gap-3 ">
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full">
            <div className="text-[15px] text-[#F47521] font-bold">Add Ons</div>
            <div className={`flex flex-row w-8/12 lg:w-1/2 justify-around lg:gap-1 bg-[#F9F9F9] rounded-xl px-1 ml-2 my-4 py-1 cursor-pointer ${
                active && "!border-2 !border-[#F47521] !bg-[#fdeadf]"
              }`} onClick={() => setActive(!active)}>
              <img className="" src={Packing} />
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center pr-2">
                  <h4 className="text-base indent-2"> Insurance</h4>
                  <div className="flex flex-row items-center text-[#1A7DC1] font-bold  ">
                    <AddSharpIcon className="" fontSize="xs" />
                    <CurrencyRupeeIcon fontSize="xs" />
                    <span className="text-base text-[13px]">80</span>
                  </div>
                </div>
                <p className="text-xs pl-2">
                  Mauris neque nisi, faucibus non elementum in, convallis et
                  eros. Donec aliquet dignissim.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* details */}
        <div className="flex px-2 flex-col gap-3 pt-6 pb-0">
          <h2 className="text-xs lg:text-sm ">
            All order packages will be picked only on further inspection.
            CarterX additional packing will not be done beyond 24 inches. Order
            modification is allowed to add bags/extra weight and will be charged
            extra. TV and electronic should be in original packing will be
            considered as fragile and charged extra.
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
          <div className="flex flex-row justify-between  lg:gap-20">
            <div className="flex flex-col  items-center">
              <div className="flex flex-row text-lg lg:text-4xl font-bold items-center text-[#F47521]">
                <CurrencyRupeeIcon fontSize="large" />
                <p>838</p>
              </div>
              <span className="text-xs lg:pl-1">Inclusive of GST</span>
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

export default CityTransfer;
