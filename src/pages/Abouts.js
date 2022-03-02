import React from 'react'
import Slider from '../Images/Main/Slider.png';
import Business from "../Images/About/business.png"
import Baddges from "../Images/About/baddges.png"
import Families from "../Images/About/families.png"
import Issues from "../Images/About/issues.png"
import Door from "../Images/About/door.png"
import Insurance from "../Images/About/insurance.png"
import Packing from "../Images/About/packing.png"
import Tracking from "../Images/About/tracking.png"
import Secure from "../Images/About/secure.png"
import Delivery from "../Images/About/delivery.png"
import Support from "../Images/About/support.png"
import Cancel from "../Images/About/cancel.png"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


function Abouts() {
  return (
    <div className='w-full'>
      <div className='w-full '>
        <img className='h-[300px] '  src={Slider} width="100%" alt=""/>
      </div>
      <div className='bg-[#EEEEEE] w-full '>
        {/* section1 */}
        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='mt-[40px] font-bold text-4xl'> Effortless Air Travel</div>
          <div className='font-normal text-2xl' >Hassle free Baggage Transfer to and from Airport</div>
        </div>
        <div className='flex mt-3 flex-row p-2 items-center justify-center gap-3'>
          <div className='flex flex-col gap-2 p-4 bg-white w-1/3 shadow-lg rounded-xl h-[225px]'>
            <div>
              <img src={Business}/>
            </div>
            <div className='font-bold text-2xl'>Care for your <span className='text-[#F47521]'>Business</span>
            </div>
            <div className='font-normal text-base'>Stop stressing about your Baggage and let us care for it while attending to your business in style. We at CarterX also pick up your Shopping items from your retail stores and deliver directly to you.</div>
          </div>
          <div className='flex flex-col gap-2 p-4 bg-white w-1/3 shadow-lg rounded-xl h-[225px]'>
            <div>
              <img src={Baddges}/>
            </div>
            <div className='font-bold text-2xl'>Care for your <span  className='text-[#F47521]' >Baddges</span>
            </div>
            <div className='font-normal text-base'>No searching for trolleys, pushing or lugging yourself out from your vehicle. We at CarterX help you transfer your baggage to and from your airport</div>
          </div>
        </div>
        <div className='flex mt-1 flex-row p-2 items-center justify-center gap-3'>
          <div className='flex flex-col gap-2 p-4 bg-white w-1/3 shadow-lg rounded-xl h-[225px]'>
            <div>
              <img src={Families}/>
            </div>
            <div className='font-bold text-2xl'>Care for your <span className='text-[#F47521]'>Families</span>
            </div>
            <div className='font-normal text-base'>Travelling with kids or a large family can mean chaos? Let CarterX handle the prams/buggies and suitcases. Get them delivered personally at the departure gate or hand them over at the arrival gate, travel stress free.</div>
          </div>
          <div className='flex flex-col gap-2 p-4 bg-white w-1/3 shadow-lg rounded-xl h-[225px]'>
            <div>
              <img src={Issues}/>
            </div>
            <div className='font-bold text-2xl'>Weight <span  className='text-[#F47521]' >Issues</span>
            </div>
            <div className='font-normal text-base'>Too many and too heavy? We are here to handle your baggage weight and count for you. At CarterX we accept baggage in almost all shapes and sizes. Our quotes are completely free.</div>
          </div>
          
        </div>
        {/* //section2 */}
        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='mt-[40px] font-bold text-4xl'> Effortless Cargo Transfers</div>
          <div className='font-normal text-2xl' >Hassle free Cargo Transfer</div>
        </div>
        <div className='flex mt-3 flex-row p-2 items-center justify-center gap-3'>
          <div className='flex flex-col gap-2 p-4 bg-white w-1/3 shadow-lg rounded-xl h-[225px]'>
            <div>
              <img src={Business}/>
            </div>
            <div className='font-bold text-2xl'>Care for your <span className='text-[#F47521]'>Business</span>
            </div>
            <div className='font-normal text-base'>Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet est. Sed ut euismod quam. Suspendisse potenti. Aliquam fringilla orci tincidunt, ullamcorper erat in, malesuada metus.</div>
          </div>
          <div className='flex flex-col gap-2 p-4 bg-white w-1/3 shadow-lg rounded-xl h-[225px]'>
            <div>
              <img src={Baddges}/>
            </div>
            <div className='font-bold text-2xl'>Care for your <span  className='text-[#F47521]' >Baddges</span>
            </div>
            <div className='font-normal text-base'>Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet est. Sed ut euismod quam. Suspendisse potenti. Aliquam fringilla orci tincidunt, ullamcorper erat in, malesuada metus.</div>
          </div>
        </div>
        <div className='flex mt-1 flex-row p-2 items-center justify-center gap-3'>
          <div className='flex flex-col gap-2 p-4 bg-white w-1/3 shadow-lg rounded-xl h-[225px]'>
            <div>
              <img src={Issues}/>
            </div>
            <div className='font-bold text-2xl'>Weight <span  className='text-[#F47521]' >Issues</span>
            </div>
            <div className='font-normal text-base'>Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet est. Sed ut euismod quam. Suspendisse potenti. Aliquam fringilla orci tincidunt, ullamcorper erat in, malesuada metus.</div>
          </div>
        </div>
        {/* section3 */}
        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='mt-[40px] font-bold text-4xl'> Effortless Hyperlocal Transfers</div>
          <div className='font-normal text-2xl' >Hassle free Local Transfer</div>
        </div>
        <div className='flex mt-3 flex-row p-2 items-center justify-center gap-3'>
          <div className='flex flex-col gap-2 p-4 bg-white w-1/3 shadow-lg rounded-xl h-[225px]'>
            <div>
              <img src={Business}/>
            </div>
            <div className='font-bold text-2xl'>Care for your <span className='text-[#F47521]'>Business</span>
            </div>
            <div className='font-normal text-base'>Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet est. Sed ut euismod quam. Suspendisse potenti. Aliquam fringilla orci tincidunt, ullamcorper erat in, malesuada metus.</div>
          </div>
          <div className='flex flex-col gap-2 p-4 bg-white w-1/3 shadow-lg rounded-xl h-[225px]'>
            <div>
              <img src={Baddges}/>
            </div>
            <div className='font-bold text-2xl'>Care for your <span  className='text-[#F47521]' >Baddges</span>
            </div>
            <div className='font-normal text-base'>Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet est. Sed ut euismod quam. Suspendisse potenti. Aliquam fringilla orci tincidunt, ullamcorper erat in, malesuada metus.</div>
          </div>
        </div> 
      </div>
      <div className='bg-[#EEEEEE] w-full py-4'>
        <div className='flex flex-row p-2 justify-center items-center gap-2 pt-5 '>
          <div className='flex flex-col p-2 gap-3 w-[150px] h-[130px] bg-white text-center justify-center items-center rounded-xl shadow-lg'>
            <div>
            <img src={Door}/>
            </div>
            <div className='font-bold text-base' >Door Step Pickup</div>
          </div>
          <div className='flex flex-col p-2 gap-3 w-[150px] h-[130px]  bg-white justify-center items-center text-center rounded-xl shadow-lg'>
            <div>
            <img src={Insurance}/>
            </div>
            <div className='font-bold text-base ' >Free Insurance</div>
            
          </div>
          <div className='flex flex-col p-2 gap-3 w-[150px] h-[130px] bg-white text-center justify-center items-center rounded-xl shadow-lg'>
            <div>
            <img src={Packing}/>
            </div>
            <div className='font-bold text-base ' >Tamper Resistant Packing</div>
          </div>
          <div className='flex flex-col p-2 gap-3 w-[150px] h-[130px]  bg-white justify-center items-center text-center rounded-xl shadow-lg'>
            <div>
            <img src={Tracking}/>
            </div>
            <div className='font-bold text-base' >Live Tracking</div>
          </div>
        </div>
        {/* section2 */}
        <div className='flex flex-row p-2 justify-center items-center gap-2 pt-2 '>
          <div className='flex flex-col p-2 gap-3 w-[150px] h-[130px] bg-white text-center justify-center items-center rounded-xl shadow-lg'>
            <div> 
            <img src={Secure}/>
            </div>
            <div className='font-bold text-base' >Secure Handling</div>
          </div>
          <div className='flex flex-col p-2 gap-3 w-[150px] h-[130px]  bg-white justify-center items-center text-center rounded-xl shadow-lg'>
            <div>
            <img src={Delivery}/>
            </div>
            <div className='font-bold text-base ' >Door Step Delivery</div>
            
          </div>
          <div className='flex flex-col p-2 gap-3 w-[150px] h-[130px] bg-white text-center justify-center items-center rounded-xl shadow-lg'>
            <div>
            <img src={Support}/>
            </div>
            <div className='font-bold text-base ' >24/7 Support</div>
          </div>
          <div className='flex flex-col p-2 gap-3 w-[150px] h-[130px]  bg-white justify-center items-center text-center rounded-xl shadow-lg'>
            <div>
            <img src={Cancel}/>
            </div>
            <div className='font-bold text-base' >Free Cancellation</div>
          </div>
        </div>
        <div className='relative w-10/12 bg-[#1A7DC1] mb-2 mt-8 mx-auto rounded-lg py-5 px-10 gap-2'>
          <div className='flex flex-col justify-center items-center py-4 gap-4 px-5' >
          <div className='font-bold text-4xl text-white' >See How it Works</div>
          <div className='flex flex-row gap-4 pt-2'>
            <div className='bg-white rounded-full mt-2 border-2 border-white'>
              <div className='text-[#F47521] p-3 font-bold text-xl text-center '>Air Transfer</div>
            </div>
            <div className='bg-[#1A7DC1] rounded-full mt-2 border-2 border-white'>
              <div className=' text-white p-3 font-bold text-xl text-center '>Rush Chargo</div>
            </div><div className='bg-[#1A7DC1] rounded-full mt-2 border-2 border-white'>
              <div className='text-white p-3 font-bold text-xl text-center  '>Rush Local</div>
            </div>
          </div>
          <p className='text-xl font-normal text-white gap-2 text-center mx-5 pt-2'>With CarterPorter's CarterX, your Baggage is efficiently picked up and securely transported from the first mile to the last. Book, Move and Track your Baggage at the tip of your fingers on your smart phone, tablet or PC and stay updated throughout the service. Your Baggage is waiting ahead of you making your travel light, stress free without the weight and chaos.</p>
          <button className='bg-[#F47521] px-14 py-3 rounded-full font-bold text-lg text-white mb-5' > Call Us </button>
          <div className='absolute -bottom-6 flex flex-row justify-center items-center bg-white rounded-full mt-2 px-2 border-2 border-white'>
            <PlayCircleIcon fontSize='large' className='text-[#F47521]'/>
              <div className='text-black p-2 py-3 font- normal text-xl text-center '>See Video</div>
            </div>
            
          </div>
        </div>
      </div>
      <div className='w-full bg-[#EEEEEE] py-7'>
          <div className='flex flex-col justify-center items-center gap-3  pt-5' >
            <h2 className='font-bold text-4xl '>Meet the Team</h2>
            <p className='text-2xl font-normal' >Aliquam fringilla orci tincidunt, ullamcorper erat in, malesuada metus.</p>
          </div>
          </div>
     
    </div>
  )
}

export default Abouts