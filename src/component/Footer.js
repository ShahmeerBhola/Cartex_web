import React from 'react'
import Cartex from "../Images/Footer/Cartex.png"
import facebook from "../Images/Footer/face.png"
import google from "../Images/Footer/gplus.png"
import linkdin from "../Images/Footer/link.png"
import mail from "../Images/Footer/mail.png"
import phone from "../Images/Footer/phone.png"
import youtube from "../Images/Footer/youtube.png"
import twitter from "../Images/Footer/twitter.png"

function Footer() {
  return (
      <div className='bg-white py-5 w-full'>
          <img className='mx-auto justify-center w-[280px] md:w-[302px] h-[48px]' src={Cartex} alt="Cartex logo"></img>
          <br/>
          <div className='flex flex-col justify-center md:flex-row md:justify-evenly w-full px-2 md:px-0 md:w-11/12  lg:w-10/12 mx-auto pb-4'>
              <div className='flex flex-col w-full md:mx-0 md:w-1/2 justify-between py-2 gap-4 '>
                  <h1 className=' text-2xl font-bold  '>Informations</h1>
                  <a className='text-xl ' >Terms And Conditions</a>
                  <div className='text-xl ' >Privacy Policy</div>
                  <div className='text-xl ' >Cancellation And Refund Policy</div>
                  <div className='text-xl ' >Arrival Details</div>
                 
          </div>
              <div className='flex flex-col  lg:w-1/4 md:1/2 md:mx-0 justify-between py-2 gap-4 '>
                  <h1 className='text-2xl font-bold '>Need help?</h1>
                  <div className='flex flex-row items-center gap-2'>
                      <img className='w-[32px] h-[32px]' src={phone} alt="phone img" ></img>
                      <div className='flex flex-col'>
                          <div className='text-[#F47521] text-[15px]'>Phone</div>
                          <div className='text-xl'>+91 911 063 5588</div>
                      </div>
                  </div>
                  <div className='flex flex-row items-center gap-2'>
                      <img className='w-[32px] h-[32px] ' src={mail} alt="Email img" ></img>
                      <div className='flex flex-col'>
                          <div className='text-[#F47521] text-[15px]'>Email</div>
                          <div className='text-xl'>customercare@carterporter.in</div>
                      </div>
                  </div>
                  <div className='flex flex-row gap-3 '>
                      <img src={facebook} alt="facebook" ></img>
                      <img src={twitter} alt="twitter" ></img>
                      <img src={google} alt="google plus" ></img>
                      <img src={youtube} alt="youtube" ></img>
                      <img src={linkdin} alt="linkdien" height="40px" width="40px" ></img>
                  </div>
              </div>
          </div>
          <hr />
          <div className='mx-auto text-lg pt-5 md:text-xl text-[#919191] w-full text-center ' >©CarterX All rights reserved</div>
    </div>
  )
}

export default Footer