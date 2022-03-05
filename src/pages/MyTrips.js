import React from "react";
import Divider from "@mui/material/Divider";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function MyTrips() {
  return (
    <div className="bg-[#EEEEEE]">
      <div className="flex flex-col  gap-3 w-full px-2 md:w-10/12 md:mx-auto pt-12">
        <h2 className="font-bold text-2xl md:text-4xl pl-2 pb-10 text-center md:text-left">
          My Trips
        </h2>
        {/* section1 */}
        <div className="flex flex-row w-full">
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 flex flex-col gap-5 mb-6 w-3/4 ">
            <div className="flex flex-row justify-between items-center">
              <h2 className="font-bold text-2xl ">Order No: XYZ0022786581</h2>
              <button className="text-[#F47521] font-bold text-2xl border-2 border-[#F47521] rounded-full px-3 py-2">
                In Progress
              </button>
            </div>
            <Divider />
            <div className="flex flex-row gap-3">
              <div className="flex flex-col gap-2 w-1/2">
                <h3 className="text-[#F47521] text-[15px] font-bold">
                  Number of Bags
                </h3>
                <h2 className="font-bold text-2xl ">3</h2>
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <h3 className="text-[#F47521] text-[15px] font-bold">Date</h3>
                <h2 className="font-bold text-2xl ">9th August, 2021</h2>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="flex flex-col gap-2 w-1/2">
                <h3 className="text-[#F47521] text-[15px] font-bold"> From</h3>
                <h2 className="font-bold text-2xl ">New Delhi</h2>
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <h3 className="text-[#F47521] text-[15px] font-bold">To</h3>
                <h2 className="font-bold text-2xl ">Bangalore Airport</h2>
              </div>
            </div>
            <Divider />
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-3">
                <button className="text-white bg-[#1A7DC1] font-bold text-lg border-2 border-[#1A7DC1] rounded-full px-3 py-2">
                  Order Details
                </button>
                <button className="text-[#F47521] font-bold text-lg border-2 border-[#F47521] rounded-full px-3 py-2">
                  Share Feedback
                </button>
              </div>
              <div className="flex flex-row gap-3">
                <div className="flex flex-row text-[#F47521] items-center gap-2  " >
                    <CurrencyRupeeIcon fontSize="large" />
                    <h3 className="font-bold text-3xl">1046</h3>
                </div>
                <button className="text-white bg-[#F47521] font-bold text-lg border-2 border-[#F47521] rounded-full px-3 py-2">
                  REBOOK
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* section2 */}
        <div className="flex flex-row w-full">
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 flex flex-col gap-5 mb-6 w-3/4 ">
            <div className="flex flex-row justify-between items-center">
              <h2 className="font-bold text-2xl ">Order No: XYZ0022786581</h2>
              <button className="text-[#F47521] font-bold text-2xl border-2 border-[#F47521] rounded-full px-3 py-2">
                In Progress
              </button>
            </div>
            <Divider />
            <div className="flex flex-row gap-3">
              <div className="flex flex-col gap-2 w-1/2">
                <h3 className="text-[#F47521] text-[15px] font-bold">
                  Number of Bags
                </h3>
                <h2 className="font-bold text-2xl ">3</h2>
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <h3 className="text-[#F47521] text-[15px] font-bold">Date</h3>
                <h2 className="font-bold text-2xl ">9th August, 2021</h2>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="flex flex-col gap-2 w-1/2">
                <h3 className="text-[#F47521] text-[15px] font-bold"> From</h3>
                <h2 className="font-bold text-2xl ">New Delhi</h2>
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <h3 className="text-[#F47521] text-[15px] font-bold">To</h3>
                <h2 className="font-bold text-2xl ">Bangalore Airport</h2>
              </div>
            </div>
            <Divider />
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-3">
                <button className="text-white bg-[#1A7DC1] font-bold text-lg border-2 border-[#1A7DC1] rounded-full px-3 py-2">
                  Order Details
                </button>
                <button className="text-[#F47521] font-bold text-lg border-2 border-[#F47521] rounded-full px-3 py-2">
                  Share Feedback
                </button>
              </div>
              <div className="flex flex-row gap-3">
                <div className="flex flex-row text-[#F47521] items-center gap-2  " >
                    <CurrencyRupeeIcon fontSize="large" />
                    <h3 className="font-bold text-3xl">1046</h3>
                </div>
                <button className="text-white bg-[#F47521] font-bold text-lg border-2 border-[#F47521] rounded-full px-3 py-2">
                  REBOOK
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* section3 */}
        <div className="flex flex-row w-full">
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 flex flex-col gap-5 mb-6 w-3/4 ">
            <div className="flex flex-row justify-between items-center">
              <h2 className="font-bold text-2xl ">Order No: XYZ0022786581</h2>
              <button className="text-[#F47521] font-bold text-2xl border-2 border-[#F47521] rounded-full px-3 py-2">
                In Progress
              </button>
            </div>
            <Divider />
            <div className="flex flex-row gap-3">
              <div className="flex flex-col gap-2 w-1/2">
                <h3 className="text-[#F47521] text-[15px] font-bold">
                  Number of Bags
                </h3>
                <h2 className="font-bold text-2xl ">3</h2>
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <h3 className="text-[#F47521] text-[15px] font-bold">Date</h3>
                <h2 className="font-bold text-2xl ">9th August, 2021</h2>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="flex flex-col gap-2 w-1/2">
                <h3 className="text-[#F47521] text-[15px] font-bold"> From</h3>
                <h2 className="font-bold text-2xl ">New Delhi</h2>
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <h3 className="text-[#F47521] text-[15px] font-bold">To</h3>
                <h2 className="font-bold text-2xl ">Bangalore Airport</h2>
              </div>
            </div>
            <Divider />
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-3">
                <button className="text-white bg-[#1A7DC1] font-bold text-lg border-2 border-[#1A7DC1] rounded-full px-3 py-2">
                  Order Details
                </button>
                <button className="text-[#F47521] font-bold text-lg border-2 border-[#F47521] rounded-full px-3 py-2">
                  Share Feedback
                </button>
              </div>
              <div className="flex flex-row gap-3">
                <div className="flex flex-row text-[#F47521] items-center gap-2  " >
                    <CurrencyRupeeIcon fontSize="large" />
                    <h3 className="font-bold text-3xl">1046</h3>
                </div>
                <button className="text-white bg-[#F47521] font-bold text-lg border-2 border-[#F47521] rounded-full px-3 py-2">
                  REBOOK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTrips;
