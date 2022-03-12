import React from 'react'
import Modal from "./UI/Modal"
import cartex from "./UI/modalpics/Cartex.png"
const LoginModal = () => {
  return (
      <div>
          <Modal titleimage={cartex} heading="Create a new account">
              <div className='flex flex-col gap-3 md:gap-4'>
              <div className='rounded-lg border-[#CCCCCC]  border-2 w-[250px] md:w-[352px] px-2 py-2'>
                          <div className='text-[15px] text-[#F47521] font-bold'>Mobile No. *</div>
                          <div className='flex flex-row'>
          <span className='border-[1px] rounded-lg border-[#F47521] text-sm p-1 ' ><label className='text-[#F47521]' for="phonecode"><select  id="phonecode">
                <option value="+1">+1</option>
              
          </select></label></span>
          <input className='font-bold text:lg md:text-2xl text-[#707070] w-full outline-0 indent-2' placeholder='Enter Mobile NO.'></input>
          </div>
                  </div>
                  
                  <div className='bg-[#F47521] rounded-3xl text-center text-white w-[250px] md:w-[352px] h-[48px] flex justify-center items-center'>Login</div>
                  <div className='justify-start text-xs md:text-sm'>* denotes mandatory field</div>
        <div className='w-[250px] md:w-[352px] text-sm md:text-lg flex justify-center items-center'>Don't have an account?</div>
        <div className='text-[#F47521] text-sm md:text-lg w-[250px] md:w-[352px] flex justify-center items-center font-bold'>Register</div>
        <div className=' text-[12px]  md:text-sm flex flex-row justify-between text-[#1A7DC1]'>
          <a>Terms & Condition</a>
          <a>Privacy Policy</a>
       </div>
              
              </div>
          </Modal>

    </div>
  )
}

export default LoginModal