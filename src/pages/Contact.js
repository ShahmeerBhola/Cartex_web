import React from "react";
import slider from "../Images/Main/slider2.png";
import InfoIcon from "@mui/icons-material/Info";
import SliderCard from "../components/SliderCard";
import Slider from "../components/Slider";
import { Grid } from "@material-ui/core";

import img1 from "../../src/Images/Contact/img1.png";
import tag1 from "../../src/Images/Contact/tag1.png";

function Contact() {
  const packages=[{
    id:'1',
    image:img1,
    tag:tag1,
    title:'Hyderabad RGIA',
    description:"Rajiv Gandhi International Airport",
    location:"24/7 CarterX kiosk",
    departure:"Delivery till terminal entry gates",
    arrival:"Bags to be dropped at CarterX kiosk at Arrivals village. Opp Café Coffee Day",
    luggage:"Available",
    transfer:"Available"
  },{
    id:'2',
    image:img1,
    tag:tag1,
    title:'Hyderabad RGIA',
    description:"Rajiv Gandhi International Airport",
    location:"24/7 CarterX kiosk",
    departure:"Delivery till terminal entry gates",
    arrival:"Bags to be dropped at CarterX kiosk at Arrivals village. Opp Café Coffee Day",
    luggage:"Available",
    transfer:"Available"
  },{
    id:'3',
    image:img1,
    tag:tag1,
    title:'Hyderabad RGIA',
    description:"Rajiv Gandhi International Airport",
    location:"24/7 CarterX kiosk",
    departure:"Delivery till terminal entry gates",
    arrival:"Bags to be dropped at CarterX kiosk at Arrivals village. Opp Café Coffee Day",
    luggage:"Available",
    transfer:"Available"
  },{
    id:'4',
    image:img1,
    tag:tag1,
    title:'Hyderabad RGIA',
    description:"Rajiv Gandhi International Airport",
    location:"24/7 CarterX kiosk",
    departure:"Delivery till terminal entry gates",
    arrival:"Bags to be dropped at CarterX kiosk at Arrivals village. Opp Café Coffee Day",
    luggage:"Available",
    transfer:"Available"
  }
  ,{
    id:'4',
    image:img1,
    tag:tag1,
    title:'Hyderabad RGIA',
    description:"Rajiv Gandhi International Airport",
    location:"24/7 CarterX kiosk",
    departure:"Delivery till terminal entry gates",
    arrival:"Bags to be dropped at CarterX kiosk at Arrivals village. Opp Café Coffee Day",
    luggage:"Available",
    transfer:"Available"
  }];
  return (
    <div className="w-full overflow-hidden">
      <div className="relative h-screen w-full ">
        <img className=" h-full " src={slider} width="100%" alt="" />
      </div>
      <div className="absolute top-[120px] w-full ">
        <div className="w-10/12  flex gap-7 flex-row mx-auto">
          <div className="w-3/5 mx-auto flex flex-col gap-3">
            <div className=" flex flex-row gap-3">
              <div className="bg-[#fff] shadow-2xl py-2 px-4  w-[250px] rounded-2xl">
                <div className="flex flex-col gap-7">
                  <p className="text-start text-[#F47521] font-bold text-base w-1/4">
                    General Queries
                  </p>
                  <p className="text-right text-black font-bold text-xl">
                    +91-911 063 5588
                  </p>
                </div>
              </div>
              <div className="bg-[#fff] shadow-2xl py-2 px-4  w-[250px] rounded-2xl">
                <div className="flex flex-col gap-7">
                  <p className="text-start text-[#F47521] font-bold text-base w-10/12">
                    Door Step Baggage Checkin Service
                  </p>
                  <p className="text-right text-black font-bold text-xl">
                    +91-911 063 5588
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex flex-row gap-3">
              <div className="bg-[#fff] shadow-2xl py-2 px-4  w-[250px] rounded-2xl">
                <div className="flex flex-col gap-7">
                  <p className="text-start text-[#F47521] font-bold text-base w-1/4">
                    Mishandled Luggage
                  </p>
                  <p className="text-right text-black font-bold text-xl">
                    +91-911 063 5588
                  </p>
                </div>
              </div>
              <div className="bg-[#fff] shadow-2xl py-2 px-4  w-[250px] rounded-2xl">
                <div className="flex flex-col gap-7">
                  <p className="text-start text-[#F47521] font-bold text-base w-1/2">
                    Make a booking
                  </p>
                  <p className="text-right text-black font-bold text-xl">
                    +91-911 063 5588
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5">
            <div className="w-full mx-auto flex flex-col gap-4 rounded-2xl bg-white p-4  ">
              <h3 className="font-bold text-[32px] text-center ">
                Have a Query?
              </h3>
              <div className="flex flex-col gap-2 border-2 rounded-xl p-2 border-[#CCCCCC]">
                <div className="text-[#F47521] font-bold text-sm">Name</div>
                <input
                  className="outline-0 text-xl"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col gap-2 border-2 rounded-xl p-2 border-[#CCCCCC]">
                <div className="text-[#F47521] font-bold text-sm">Email</div>
                <input
                  className="outline-0 text-xl"
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col gap-2 border-2 rounded-xl p-2 border-[#CCCCCC]">
                <div className="text-[#F47521] font-bold text-sm">Name</div>
                <textarea
                  className="outline-0 text-xl h-[150px]"
                  placeholder="Write your query here"
                />
              </div>
              <div className="bg-[#F47521] w-8/12 rounded-full py-2  mx-auto">
                <p className="text-center text-[#FFFFFF] font-bold text-lg">
                  Submit Query
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row gap-2 items-center">
            <h3 className="text-[36px] font-bold">Position at Airport</h3>
            <InfoIcon />
          </div>
          <h4 className="text-2xl font-baseline">Find us here</h4>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-4xl font-bold">Airport Transfer</h3>
        </div>
      </div>
      
<div className="flex flex-row flex-nowrap">
{packages.map((v, i) => (
                          <SliderCard packages={v} />
                      ))}
</div>
        {/* <div className="flex flex-row gap-2">
        
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
        </div> */}
    </div>
  );
}

export default Contact;
