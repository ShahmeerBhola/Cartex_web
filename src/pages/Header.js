import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Divider } from '@mui/material';
import logo from '../Images/Main/logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate=useNavigate();
  return (
    <div className='bg-white w-full shadow-lg'>
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
        <Divider/>
        <div className='flex flex-row w-10/12 gap-3 justify-between text-xs font-normal mx-auto py-3'>
            <div className='flex flex-row gap-4 justify-between text-xs font-normal'>
              <img className='h-[26px] w-[160px]' src={logo} onClick={()=>navigate('/')} />
            </div>
            <div className='flex flex-row justify-center items-center text-base font-normal'>
              <div className='flex flex-row justify-between gap-4'>
              <a className='hover:cursor-pointer' onClick={()=>navigate('/privacy')}>Privacy</a>
              <a className='hover:cursor-pointer' onClick={()=>navigate('/terms')}>Terms</a>
              <a className='hover:cursor-pointer' onClick={()=>navigate('/arrivalbook')}>Arrival Book</a>
              <a className='hover:cursor-pointer' onClick={()=>navigate('/trip')}>MyTrip</a>
              <a className='hover:cursor-pointer' onClick={()=>navigate('/profile')}>Profile</a>
              </div>
            </div>
        </div>
        </div>
  )
}

export default Header