import React,{useState} from 'react'
import Modal from "./UI/ModalPopup"
import cartex from "./UI/modalpics/Cartex.png"
import closebtn from "../component/UI/modalpics/closebtnn.png"
import SignupModal from './SignupModal'
import ModalPopup from './UI/ModalPopup'
import { useNavigate } from 'react-router-dom'

const LoginModal = ({setModal}) => {
  const [modal1, setModal1] = useState(false);
  const navigate = useNavigate();

 
  return (
      <div>
  <div className='mx-auto py-10 bg-white flex flex-col relative p-5 rounded-xl shadow-lg justify-center items-center  '>
        <img className='h-[24px] w-[150px]' src={cartex}></img>
        <div className='text-xl py-4 font-bold'>Log in to your account</div>
        <img onClick={()=>setModal(false)}  className='w-[48px] h-[48px] absolute top-0 right-2 cursor-pointer' src={closebtn} ></img>
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
                  
                  <div className='bg-[#F47521] rounded-3xl text-center text-white w-[250px] md:w-[352px] h-[48px] flex justify-center items-center cursor-pointer'>Login</div>
                  <div className='justify-start text-xs md:text-sm'>* denotes mandatory field</div>
        <div className='w-[250px] md:w-[352px] text-sm md:text-lg flex justify-center items-center'>Don't have an account?</div>
          <div onClick={() => { setModal1(!modal1)}} className='text-[#F47521] text-sm md:text-lg w-[250px] md:w-[352px] flex justify-center items-center font-bold cursor-pointer'>Register</div>
        <div className=' text-[12px]  md:text-sm flex flex-row justify-between text-[#1A7DC1] cursor-pointer'>
          <a  onClick={() => {
            navigate("/terms");
            setModal(false)
          }} >Terms & Condition</a>
          <a  onClick={() => {
            navigate("/privacy");
            setModal(false)
          }}>Privacy Policy</a>
       </div>
              
      </div>
      
</div>
<ModalPopup modal={modal1} setModal={setModal1}>
<SignupModal setModal={setModal1}/>
      </ModalPopup>
    </div>
  )
}

export default LoginModal