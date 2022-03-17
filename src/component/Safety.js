import React from 'react'
import cancel from "../Images/Safety/cancel.png"
import contact from "../Images/Safety/contactless.png"
import hours from "../Images/Safety/hours.png"
import safe from "../Images/Safety/safe.png"
import sanitize from "../Images/Safety/sanitize.png"
import screened from "../Images/Safety/screened.png"
import shield from "../Images/Safety/shield.png"
import time from "../Images/Safety/time.png"
import Card from './UI/Card'


const Safety = () => {
  return (<div className='w-full mx-auto bg-[#EEE] py-6'>
      <div className='w-10/12 mx-auto'>
      <div className='py-8 text-4xl'>Safety First</div>
      <div>Ease fear of your Exposure, Your bags are protected</div>
      </div>
      
      <div className='flex flex-row w-10/12 mx-auto'>
          {/*  */}
      <div className='flex flex-col md:flex-row w-full justify-end items-center gap-3 '>
          <div className='p-1 md:p-0 lg:p-3'>
                  <Card css="h-[230px] md:h-[260px] w-[120px] sm:w-[130px] md:w-[150px] lg:w-[185px]">
                      <div className='flex flex-col justify-center items-center pt-7'>
                  <img className='h-[90px] md:h-[108px] w-[90px] md:w-[108px] ' src={contact}></img>
                    <div className='pt-6 font-bold text-sm md:text-xl text-center'>Contactless Process</div>
                      </div>
              </Card>
          </div>
          <div className='p-1 md:p-0 lg:p-3'>
          <Card css="h-[230px] md:h-[260px] w-[120px] sm:w-[130px] md:w-[150px] lg:w-[185px]">
                      <div className='flex flex-col justify-center items-center pt-7'>
                  <img className='h-[90px] md:h-[108px] w-[90px] md:w-[108px] ' src={safe}></img>
                    <div className='pt-6 font-bold text-sm md:text-xl text-center'>Aarogya Setu Safe</div>
                      </div>
              </Card>
          </div>
          </div>

          <div className='flex flex-col md:flex-row w-full justify-start items-center gap-3 '>
          <div className='p-1 md:p-0 lg:p-3'>
                  <Card css="h-[230px] md:h-[260px] w-[120px] sm:w-[130px] md:w-[150px] lg:w-[185px]">
                      <div className='flex flex-col justify-center items-center pt-7'>
                  <img className='h-[90px] md:h-[108px] w-[90px] md:w-[108px] ' src={shield}></img>
                    <div className='pt-6 font-bold text-sm md:text-xl text-center'>2 Shield Packing</div>
                      </div>
              </Card>
          </div>
          <div className='p-1 md:p-0 lg:p-3'>
          <Card css="h-[230px] md:h-[260px] w-[120px] sm:w-[130px] md:w-[150px] lg:w-[185px]">
                      <div className='flex flex-col justify-center items-center pt-7'>
                  <img className='h-[90px] md:h-[108px] w-[90px] md:w-[108px] ' src={screened}></img>
                    <div className='pt-6 font-bold text-sm md:text-xl text-center'>Screened Personnel</div>
                      </div>
              </Card>
          </div>
          </div>
      </div>
      {/*  */}
      <div className='flex flex-row w-10/12 mx-auto pt-4'>
          {/*  */}
      <div className='flex flex-col md:flex-row w-full justify-end items-center gap-3 '>
          <div className='p-1 md:p-0 lg:p-3'>
                  <Card css="h-[230px] md:h-[260px] w-[120px] sm:w-[130px] md:w-[150px] lg:w-[185px]">
                      <div className='flex flex-col justify-center items-center pt-7'>
                  <img className='h-[90px] md:h-[108px] w-[90px] md:w-[108px] ' src={time}></img>
                    <div className='pt-6 font-bold text-sm md:text-xl text-center'>Slot Based Delivery</div>
                      </div>
              </Card>
          </div>
          <div className='p-1 md:p-0 lg:p-3'>
          <Card css="h-[230px] md:h-[260px] w-[120px] sm:w-[130px] md:w-[150px] lg:w-[185px]">
                      <div className='flex flex-col justify-center items-center pt-7'>
                  <img className='h-[90px] md:h-[108px] w-[90px] md:w-[108px] ' src={sanitize}></img>
                    <div className='pt-6 font-bold text-sm md:text-xl text-center'>Sanitized Van</div>
                      </div>
              </Card>
          </div>
          </div>

          <div className='flex flex-col md:flex-row w-full justify-start items-center gap-3 '>
          <div className='p-1 md:p-0 lg:p-3'>
                  <Card css="h-[230px] md:h-[260px] w-[120px] sm:w-[130px] md:w-[150px] lg:w-[185px]">
                      <div className='flex flex-col justify-center items-center pt-7'>
                  <img className='h-[90px] md:h-[108px] w-[90px] md:w-[108px] ' src={cancel}></img>
                    <div className='pt-3 pb-2 font-bold text-sm md:text-xl text-center'>Free Cancellations 48 hours prior</div>
                      </div>
              </Card>
          </div>
          <div className='p-1 md:p-0 lg:p-3'>
          <Card css="h-[230px] md:h-[260px] w-[120px] sm:w-[130px] md:w-[150px] lg:w-[185px]">
                      <div className='flex flex-col justify-center items-center pt-7'>
                  <img className='h-[90px] md:h-[108px] w-[90px] md:w-[108px] ' src={hours}></img>
                    <div className='pt-3 pb-2 font-bold text-sm md:text-xl text-center'>24/7 Support (post booking)</div>
                      </div>
              </Card>
          </div>
          </div>
      </div>


      </div>






    //   </div>
  )
}

export default Safety