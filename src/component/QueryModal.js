import React from 'react'
import Modal from "./UI/Modal"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const QueryModal = () => {
  return (
      <Modal>
          <div className='flex flex-col gap-4'>
      <div className='text-2xl font-bold text-center p-3'>Send your inquiries and we'll try to help you.</div>
        <div className='rounded-lg flex flex-row justify-between items-center border-[#CCCCCC]  border-2  px-2 w-[250px] md:w-[352px]'>
          <div className=''>
            <div className='text-[15px] text-[#F47521] font-bold'>Issue</div>
            <input className='text:lg md:text-2xl border-[#fff] text-[#707070] outline-0' placeholder='Select issue'></input>
          </div>
          <KeyboardArrowDownIcon/>
        </div>   
        <div className='rounded-lg border-[#CCCCCC]  border-2  px-2 w-[250px] md:w-[352px] h-[190px] md:h-[220px]'>
            <div className='text-[15px] text-[#F47521] font-bold'>Feedback (optional)</div>
          <textarea className='text:lg md:text-2xl border-[#fff] text-[#707070] outline-0 w-full h-[150px] md:h-[190px]' placeholder='Write something' ></textarea>
        </div> 
        <div className='bg-[#F47521] rounded-3xl text-center text-white w-[250px] md:w-[352px] h-[48px] flex justify-center items-center'>Submit Query</div>
        </div>
     </Modal>
  )
}

export default QueryModal