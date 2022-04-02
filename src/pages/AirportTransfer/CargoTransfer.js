import React,{useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Packing from "../../Images/Airport/Baggage/Packing.png";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import ControlledCheckbox from "../../components/ControlledChecked";
import { useNavigate } from "react-router-dom";
import SelectBoxs from "../../component/SelectBoxs";
import SelectAddress from "../../component/SelectAddress";
function CargoTransfer() {
  const navigate = useNavigate();
  const [type, setType] = React.useState(1);
  const [active, setActive] = React.useState(false);
  const [toggler, setToggler] = useState(false)
  const [toggler1, setToggler1] = useState(false)
  const [toggler2, setToggler2] = useState(false)
  const [toggler3, setToggler3] = useState(false)
  const [toggler4, setToggler4] = useState(false)
  const toggle= ['<8 kgs ','<5 kgs' ];
  const city= ['Banglore', 'New Dehli'];
  const airports= ['KIAL Banglore', 'New Dehli'];
  const time= ['9:00 pm', '10:00 pm'];
  const date= ['Thursday, 28 October, 2021','Friday, 29 October, 2021', 'Saturday, 30 October, 2021','Sunday, 31 October, 2021'];
  const address=['Banglore, kanataka,India',"Banglore cantonmet Railway Station","Banglore cantonmet Railway Station","Banglore cantonmet Railway Station","Banglore cantonmet Railway Station","Banglore cantonmet Railway Station","Banglore cantonmet Railway Station"];
  return (
    <>
      <div className="bg-white flex flex-col md:w-4/5 w-full mt-2 py-2 px-2  ">
        <div className="flex flex-col gap-2 ">
          <h3 className="font-bold text-lg md:text-xl w-3/5">
            Cargo Transfers
          </h3>
          <ul className="list-disc px-5">
            <li className=" text-base "> Delivery anywhere in India</li>
            <li className=" text-base">
              {" "}
              Air (4 days), Surface (4-7 days), Express (36-48 hours)
            </li>
          </ul>
        </div>
        <hr className="w-full my-6" />
        <div className="mt-3">
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full">
            <div className="flex flex-col lg:flex-row gap-2 ">
              <div className="flex flex-col gap-3 bg-[#F47521] w-full lg:w-1/3 text-white p-2 rounded-xl">
                <h2 className="font-bold">Rush Cargo - Air</h2>
                <ul className="list-disc px-5">
                  <li className=" text-sm"> 4 Days</li>
                  <li className=" text-sm"> Delivery anywhere in India</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 bg-[#F9F9F9]  w-full lg:w-1/3  p-2 rounded-xl">
                <h2 className="font-bold">Rush Cargo - Surface</h2>
                <ul className="list-disc px-5">
                  <li className=" text-sm"> 4-7 Days</li>
                  <li className=" text-sm"> Delivery anywhere in India</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 bg-[#F9F9F9]  w-full lg:w-1/3  p-2 rounded-xl">
                <h2 className="font-bold" >Rush Cargo - Express</h2>
                <ul className="list-disc px-5">
                  <li className=" text-sm"> 36- 48 Hours</li>
                  <li className=" text-sm"> Delivery anywhere in India</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
        <div className="mt-3 flex flex-col lg:flex-row gap-4 ">
          <div className="relative rounded-lg border-[#CCCCCC] flex flex-col justify-between py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Weight
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <SelectBoxs setToggler={setToggler2} toggler={toggler2} toggle={toggle} data={'<10 kgs '} extraData={'Weights'} />
            {/* <select className="bg-none outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] text-black cursor-pointer " style={{WebkitAppearance:"none", MozAppearance:"none",background:"none",backgroundColor:"none"}} >
                    <option value="+1">Up to 2 Bags</option>
                    <option value="+1">Up to 4 Bags</option>
                  </select>  */}
          </div>
          <div className="relative rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Date & Time Slot For Pickup
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <SelectBoxs setToggler={setToggler1} toggler={toggler1} toggle={date} data={'Select Date'} />
            {/* <select className="bg-none outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] text-black cursor-pointer " style={{WebkitAppearance:"none", MozAppearance:"none",background:"none",backgroundColor:"none"}} >
                    <option value="+1">Thursday, 28 October, 2021</option>
                    <option value="+1">Thursday, 29 October, 2021</option>
                  </select> */}
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
        <div className="mt-3 flex flex-col lg:flex-row gap-4 ">
        <div className="flex flex-col w-full gap-2 lg:w-1/2">
          <div className="relative rounded-lg border-[#CCCCCC] py-2 border-2  px-2 ">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Pickup Address
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
                 </div>
                 <SelectAddress toggle={address} toggler={toggler3} setToggler={setToggler3} data={'Select Address'} />
            </div>
            <div className=" flex flex-row items-center justify-start gap-2 lg:w-full my-2 whitespace-nowrap">
              <InfoOutlinedIcon className="text-[#FF0000]" />
              <h3 className="text-xs">Address will be updated post booking</h3>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-1/2">
         <div className="relative rounded-lg border-[#CCCCCC] py-2 border-2  px-2 ">
            <div className="flex flex-row justify-between">
              <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
                Drop Address
              </div>
              <KeyboardArrowDownIcon className="text-[#F47521]" />
            </div>
            <SelectAddress toggle={address} toggler={toggler4} setToggler={setToggler4} data={'Select Address'} />
            {/* <select className="bg-none outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] cursor-pointer " style={{WebkitAppearance:"none", MozAppearance:"none",background:"none",backgroundColor:"none"}} >
            <option disabled selected value> Fill /provide drop address</option>
              <option value="+1">KIAL Bangalore</option>
              <option value="+1">New Dehli</option>
            </select> */}
          </div>
          <div className=" flex flex-row items-center justify-start gap-2 lg:w-full my-2 whitespace-nowrap">
            <InfoOutlinedIcon className="text-[#FF0000]" />
            <h3 className="text-xs">
            Please enter the vaid code

            </h3>
          </div>
         </div>
        </div>

        {/* coupon section */}
        <div className="mt-3 flex flex-col lg:flex-row gap-4 ">
          <div className="flex flex-col justify-between rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
              Discount Coupon
            </div>
            <div className="flex flex-row justify-between gap-1 pt-1">
              <div className="flex flex-col gap-1 w-3/5">
                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  className="outline-0 text-xl lg:text-lg font-baseline"
                />
                <span className="text-xs">E.g. CXBPL100</span>
              </div>
              <button className="text-xs lg:text-base font-bold text-white p-2 bg-[#F47521] rounded-full align-baseline ">
                Apply Coupon
              </button>
            </div>
          </div>
          <div className="rounded-lg border-[#CCCCCC] py-2 border-2  px-2 w-full lg:w-1/2">
            <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
              Add on
            </div>
            <div
              className={`flex flex-row w-full gap-1 bg-[#F9F9F9] rounded-xl cursor-pointer ${
                active && "!border-2 !border-[#F47521] !bg-[#fdeadf]"
              }`}
              onClick={() => setActive(!active)}
            >
              <img src={Packing} />
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center pr-2">
                  <h4 className="text-base">Packing</h4>
                  <div className="flex flex-row items-center text-[#1A7DC1] font-bold ">
                    <AddSharpIcon fontSize="small" />
                    <CurrencyRupeeIcon fontSize="small" />
                    <span className="text-base ">80</span>
                  </div>
                </div>
                <p className="text-xs">
                  Mauris neque nisi, faucibus non elementum in, convallis et
                  eros. Donec aliquet dignissim.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* details */}
        <div className="flex flex-col gap-3 py-4">
          <h2 className="text-xs lg:text-sm">
            Fragile Charges will be applied for all electronics and TVs in
            original packing only.
          </h2>
          <h2 className="text-xs lg:text-sm">
            All items need to be fully packed. Cargo forms will have to be
            filled additionally.
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
          <h3 className="text-xs lg:text-sm font-bold text-[#1A7DC1]">
            Packing List
          </h3>
          <h3 className="text-xs lg:text-sm font-bold text-[#1A7DC1]">
            Cargo Security Declaration
          </h3>
        </div>
        {/* Proceed */}
        <div className="flex flex-col lg:flex-row justify-between mt-2">
          <div className="flex flex-col justify-between">
            <div className="text-xs lg:text-[15px] text-[#F47521] font-bold">
              Estimated Time
            </div>
            <h2 className="font-bold text-lg lg:text-lg">
              16 Nov 2021 Before 11:55 PM
            </h2>
          </div>
          <div className="flex flex-row justify-between lg:gap-20">
            <div className="flex flex-col items-center">
              <div className="flex flex-row  text-lg lg:text-4xl font-bold items-center text-[#F47521]">
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

export default CargoTransfer;
