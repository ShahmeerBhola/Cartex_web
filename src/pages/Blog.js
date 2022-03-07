import React from "react";
import Slider from "../Images/Main/slider1.png";
import Tour from "../../src/Images/Blog/tour.png";
import Takeoff from "../../src/Images/Blog/takeoff.png";
import Passport from "../../src/Images/Blog/passport.png";
import Train from "../../src/Images/Blog/train.png";
import Friend from "../../src/Images/Blog/friend.png";
import Post1 from "../../src/Images/Blog/post1.png";
import Post2 from "../../src/Images/Blog/post2.png";
import Post3 from "../../src/Images/Blog/post3.png";
import SearchIcon from "@mui/icons-material/Search";
function Blog() {
  return (
    <div className="w-full h-full bg-[#EEEEEE] ">
      <div className=" w-full ">
        <img className="relative h-[350px]" src={Slider} width="100%" alt="" />
        <div className="absolute top-[405px] w-full ">
          <div className="w-10/12 px-4 py-4 bg-white rounded-xl shadow-2xl mx-auto">
            <div className=" flex flex-row  justify-between px-2 font-normal text-base">
              <div>Travelling</div>
              <div>Tourism</div>
              <div>Flights</div>
              <div>Category 04</div>
              <div>Category 05</div>
              <div>Category 06</div>
              <div>Category 05</div>
              <div>Category 06</div>
            </div>
          </div>
        </div>
        <div className="w-full mt-20">
          <div className="w-10/12 mt-10 mx-auto">
            <h2 className="text-4xl font-bold pb-10">Featured</h2>
            <div className="flex flex-row w-full gap-10 py-2">
              <div className="flex flex-col w-3/4 ">
                <div className="bg-white rounded-2xl shadow-xl p-3 mb-2 ">
                  <img src={Tour} height="100%" width="100%" />
                  <h2 className="text-2xl font-bold pl-2 py-4">
                    8 of the top trending destinations for travelers to explore
                  </h2>
                  <p className=" px-2 font-baseline text-medium">
                    Forget the days of dreaming of trips and holidays abroad,
                    2022 is looking like an optimistic and extraordinary year
                    for travel. Our annual Travel Predictions research* found
                    that nearly two thirds (63%) of travelers say they need to
                    make...
                  </p>
                </div>
                <h2 className="text-4xl font-bold py-5">Trending</h2>
                <div className="flex flex-row gap-4">
                  <div className="bg-white rounded-2xl shadow-xl p-3 mb-2 ">
                    <img src={Takeoff} height="100%" width="100%" />
                    <h2 className="text-2xl font-bold pl-2 py-4">
                      8 of the top trending destinations for travelers to
                      explore
                    </h2>
                    <p className=" px-2 font-baseline text-medium">
                      Forget the days of dreaming of trips and holidays abroad,
                      2022 is looking like an optimistic and extraordinary year
                      for travel. Our annual Travel Predictions research* found
                      that nearly two thirds (63%) of travelers say they need to
                      make...
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-xl p-3 mb-2 ">
                    <img src={Train} height="100%" width="100%" />
                    <h2 className="text-2xl font-bold pl-2 py-4">
                      8 of the top trending destinations for travelers to
                      explore
                    </h2>
                    <p className=" px-2 font-baseline text-medium">
                      Forget the days of dreaming of trips and holidays abroad,
                      2022 is looking like an optimistic and extraordinary year
                      for travel. Our annual Travel Predictions research* found
                      that nearly two thirds (63%) of travelers say they need to
                      make...
                    </p>
                  </div>
                </div>{" "}
                <div className="flex flex-row gap-4 py-2">
                  <div className="bg-white rounded-2xl shadow-xl p-3 mb-2 ">
                    <img src={Passport} height="100%" width="100%" />
                    <h2 className="text-2xl font-bold pl-2 py-4">
                      8 of the top trending destinations for travelers to
                      explore
                    </h2>
                    <p className=" px-2 font-baseline text-medium">
                      Forget the days of dreaming of trips and holidays abroad,
                      2022 is looking like an optimistic and extraordinary year
                      for travel. Our annual Travel Predictions research* found
                      that nearly two thirds (63%) of travelers say they need to
                      make...
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-xl p-3 mb-2 ">
                    <img src={Friend} height="100%" width="100%" />
                    <h2 className="text-2xl font-bold pl-2 py-4">
                      8 of the top trending destinations for travelers to
                      explore
                    </h2>
                    <p className=" px-2 font-baseline text-medium">
                      Forget the days of dreaming of trips and holidays abroad,
                      2022 is looking like an optimistic and extraordinary year
                      for travel. Our annual Travel Predictions research* found
                      that nearly two thirds (63%) of travelers say they need to
                      make...
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/4 flex flex-col h-fit gap-2 p-4 bg-white rounded-2xl shadow-xl">
                <h3 className="font-bold text-medium">Search</h3>
                <div className="flex flex-row rounded-2xl mb-3 border-2 gap-2 py-2  px-2">
                  <SearchIcon className="text-[#EEE]" />
                  <input
                    type="text "
                    className="indent-1 w-4/5 w-fit focus:outline-transparent focus:border-transparent"
                    placeholder="Type Here"
                  />
                </div>
                <h3 className="font-bold text-medium">Recent Posts</h3>
                <div className="flex flex-row gap-2 h-[80px] mb-1">
                  <img src={Post1} className="w-1/3" alt="" />
                  <div className="flex flex-col">
                    <p className="font-bold text-sm">
                      8 of the top trending destinations for travelers to
                      explore
                    </p>
                    <h5 className="text-sm tex-[#EEE]">3 min ago</h5>
                  </div>
                </div>
                <div className="flex flex-row gap-2 h-[80px] mb-1">
                  <img src={Post2} className="w-1/3" alt="" />
                  <div className="flex flex-col">
                    <p className="font-bold text-sm">
                      8 of the top trending destinations for travelers to
                      explore
                    </p>
                    <h5 className="text-sm tex-[#EEE]">3 min ago</h5>
                  </div>
                </div>
                <div className="flex flex-row gap-2 h-[80px] mb-2">
                  <img src={Post3} className="w-1/3" alt="" />
                  <div className="flex flex-col">
                    <p className="font-bold text-sm">
                      8 of the top trending destinations for travelers to
                      explore
                    </p>
                    <h5 className="text-sm tex-[#EEE]">3 min ago</h5>
                  </div>
                </div>
                <h3 className="font-bold text-medium">Tags</h3>
                <div className="flex flex-row gap-1 flex-wrap pr-2">
                  <button className="bg-[#F47521] text-white text-sm font-normal py-1 px-2 rounded-2xl">
                    Travelling
                  </button>
                  <button className="bg-[#F47521] text-white text-sm font-normal py-1 px-2 rounded-2xl">
                    Tourism
                  </button>
                  <button className="bg-[#F47521] text-white text-sm font-normal py-1 px-2 rounded-2xl">
                   Flights
                  </button>
                  <button className="bg-[#F47521] text-white text-sm font-normal py-1 px-2 rounded-2xl">
                    Tag 01
                  </button>
                  <button className="bg-[#F47521] text-white text-sm font-normal py-1 px-2 rounded-2xl">
                  Tag 02
                  </button>
                  <button className="bg-[#F47521] text-white text-sm font-normal py-1 px-2 rounded-2xl">
                  Tag 03
                  </button>
                  <button className="bg-[#F47521] text-white text-sm font-normal py-1 px-2 rounded-2xl">
                  Tag 04
                  </button>
                  <button className="bg-[#F47521] text-white text-sm font-normal py-1 px-2 rounded-2xl">
                  Tag 05
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
