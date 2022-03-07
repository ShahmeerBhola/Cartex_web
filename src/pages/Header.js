import React, { useState } from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Divider, Hidden, useMediaQuery } from '@mui/material';
import logo from '../Images/Main/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate=useNavigate();
    const [toggler,setToggler]=useState(false);
  const smallScreen = useMediaQuery("(max-width:786px)");

  return (
    <div className='bg-white w-full shadow-lg'>
      {
        smallScreen?Hidden:<>
         <div className='flex flex-row w-10/12 gap-3 justify-between text-xs font-normal mx-auto py-1.5'>
            <div className='flex flex-row gap-4 justify-between text-sm font-normal'>
                <div className='flex flex-row text-sm font-normal justify-center items-center'>
                <LocalPhoneIcon style={{fontSize:"16px"}}/>
                <p>+91 911 063 5588</p>
                </div>
                <div className='flex flex-row justify-center items-center'>
                <MailOutlineIcon style={{fontSize:"16px"}}/>
                <p>customercare@carterporter.in</p>
                </div>
                <div className='flex flex-row justify-center items-center'>
                <HelpOutlineIcon style={{fontSize:"16px"}}/>
                <p>Support</p>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center'>
                <PersonOutlineIcon style={{fontSize:"16px"}}/>
                <p>Login to Track order</p>
            </div>
        </div>
        <Divider/></>

      }
       
        <div className='flex flex-row w-10/12 gap-3 justify-between text-xs font-normal mx-auto py-3'>
            <div className='flex flex-row gap-4 justify-between text-xs font-normal'>
              <img className='h-[26px] w-[160px]' src={logo} onClick={()=>navigate('/')} />
            </div>
            <div className='flex flex-row justify-center items-center text-base font-normal'>
              {
                smallScreen?<>
                <MenuIcon className="relative" onClick={()=>setToggler(!toggler)} />
                {
                  toggler && (<div className= ' p-2 bottom-0 z-50 absolute right-0 font-medium text-lg top-12 w-[150px] flex flex-col bg-white  gap-5'>
                  <a className='hover:cursor-pointer' onClick={()=>{navigate('/privacy') ;setToggler(!toggler)}}>Privacy</a>
                  <a className='hover:cursor-pointer' onClick={()=>{navigate('/terms');setToggler(!toggler)}}>Terms</a>
                  <a className='hover:cursor-pointer' onClick={()=>{navigate('/arrivalbook');setToggler(!toggler)}}>Arrival Book</a>
                  <a className='hover:cursor-pointer' onClick={()=>{navigate('/trip');setToggler(!toggler)}}>MyTrip</a>
                  <a className='hover:cursor-pointer' onClick={()=>{navigate('/profile');setToggler(!toggler)}}>Profile</a>
                  <a className='hover:cursor-pointer' onClick={()=>{navigate('/blog');setToggler(!toggler)}}>Blog</a>
                  </div>)
                }
                </>:<>
                <div className= ' font-medium text-lg  flex flex-row justify-between md:gap-3 lg:gap-6'>
                  <a className='hover:cursor-pointer' onClick={()=>navigate('/privacy')}>Privacy</a>
                  <a className='hover:cursor-pointer' onClick={()=>navigate('/terms')}>Terms</a>
                  <a className='hover:cursor-pointer' onClick={()=>navigate('/arrivalbook')}>Arrival Book</a>
                  <a className='hover:cursor-pointer' onClick={()=>navigate('/trip')}>MyTrip</a>
                  <a className='hover:cursor-pointer' onClick={()=>navigate('/profile')}>Profile</a>
                  <a className='hover:cursor-pointer' onClick={()=>navigate('/blog')}>Blog</a>

                  </div>
                </>
              }
            </div>
        </div>
        </div>
  )
}

export default Header