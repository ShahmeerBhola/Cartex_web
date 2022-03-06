import React from 'react'
import profilepic from "../Images/Profile/profileimg.png"
import customerService from "../Images/Profile/customer-service.png"
import Card from '../component/UI/Card'

function Profile() {
    return (<div className='bg-[#EEEEEE] pb-10'>
        <h2 className='p-10 mx-10 w-10/12 font-bold'>Profile</h2>
        <div className='flex flex-row mx-auto w-10/12 '>
            <Card css="w-3/4 h-[348px]">
            <div className='flex flex-col pt-4 justify-center items-center'>
                <img className='rounded-full p-0 ' src={profilepic} alt='profile pic' height="180px" width="180px" ></img>
                <div className='bg-[#F47521] m-3 p-2 px-5 rounded-3xl text-center text-white'>Edit profile</div>
                
            </div>
            <div className='flex flex-col px-12 '>
                <div className='text-[#F47521] text-[15px] pt-10'>Name</div>
                <div className='text-2xl'>Jane Doe</div>
                <div className='text-[#F47521] text-[15px] pt-3'>Mobile No.</div>
                <div className='text-2xl'>+1-234-567-890</div>
                <div className='text-[#F47521] text-[15px] pt-3'>Email</div>
                <div className='text-2xl'>janedoe@gmail.com</div>
            </div>
         
        </Card>
        {/* <div className='bg-white flex flex-row md:mx-10 p-5 rounded-xl w-3/4 shadow-lg h-[348px]'>
          
            {/* <div className='bg-white flex flex-row  rounded-xl w-1/4 shadow-lg justify-center items-center h-[260px]'> */}
            <Card css="w-1/4 h-[260px] justify-center items-center">
                <div className='flex flex-col justify-center items-center'>
                <img className='h-[108px] w-[108px] ' src={customerService} alt="customer care" ></img>
                <div className='text-sm' >Need help</div>
                <div className='text-[#F47521] text-2xl'>+91 911 063 5588</div>
                    <div className='text-sm'>24/7 Monday - Sunday</div>
                    </div>
            </Card>
        </div>





        </div>
    )
}

export default Profile