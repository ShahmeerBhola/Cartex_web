import React from 'react'
import img1 from "../../src/Images/Contact/img1.png";
import tag1 from "../../src/Images/Contact/tag1.png";
import { Grid } from '@material-ui/core';

function SliderCard() {
  return (
      <Grid
      item
      sm={6}
      md={6}
      lg={4}
      style={{
        width: "fit-content",
        maxWidth: "300px",
        margin: "0 auto",
      }}
      >
    <div className="  w-[300px] pb-2  bg-white shadow-2xl rounded-2xl">
    <div className='flex flex-col gap-1.5'>
    <img src={img1} className=" relative h-[200px]" />
    <img src={tag1} className="absolute pl-3 pt-2" />
    <div className="flex flex-col p-2 gap-2">
      <h3 className="text-xl font-bold">Hyderabad RGIA</h3>
      <p className="text-base ">Rajiv Gandhi International Airport</p>
    </div>
    <div className="flex flex-col px-3 ">
      <h3 className="text-base font-bold">Location at Airport</h3>
      <p className="text-base">24/7 CarterX kiosk</p>
    </div>
    <div className="flex flex-col px-3 ">
      <h3 className="text-base font-bold">Departure</h3>
      <p className="text-base">Delivery till terminal entry gates</p>
    </div>
    <div className="flex flex-col px-3 ">
      <h3 className="text-base font-bold">Arrivals</h3>
      <p className="text-base">
        Bags to be dropped at CarterX kiosk at Arrivals village. Opp.
        Café Coffee Day
      </p>
    </div>
    <div className="flex flex-col px-3 ">
      <h3 className="text-base font-bold">Luggage Storage</h3>
      <p className="text-base">Available</p>
    </div>
    <div className="flex flex-col px-3 ">
      <h3 className="text-base font-bold">Inter Terminal Transfer</h3>
      <p className="text-base">Available</p>
    </div>
    </div>
  </div>
  </Grid>
  )
}

export default SliderCard