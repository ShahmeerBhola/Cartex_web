import React from 'react'
import Card from "../component/UI/Card"
import profilepic from "../Images/Profile/profileimg.png"


const EditProfile = () => {
  return (
    <div className='bg-[#EEEEEE] pb-10 '>
        <h2 className='p-10 mx-10 w-11/12 font-bold'>Edit Profile</h2>
        <div className='flex flex-col md:flex-row mx-auto w-10/12 md:w-11/12 gap-2 md:gap-2'>
            <Card css=" w-full lg:w-3/4 min-h-[348px]">
                  <div className='flex flex-col pt-4 justify-center items-center md:justify-start md:items-start '>
                      <div>
                        <img className='rounded-full p-0' src={profilepic} alt='profile pic' height="180px" width="180px" ></img>
                        {/* <img></img> */}
                      </div>
                <div className='text-[17px] text-[#1A7DC1] font-bold py-3 '>Change Photo</div>
                <div className='text-[17px] text-[#FF0000] font-bold pb-5'>Remove Photo</div>
            </div>
            <div className='flex flex-col md:px-12 w-full gap-4'>
            
                      <div className='rounded-lg border-[#CCCCCC]  border-2 w-full md:w-3/4'>
                          <div className='text-[15x] text-[#F47521] font-bold'>Name</div>
                          <p className='font-bold text-2xl' contentEditable={true}>Jane Doe</p>
                      </div>
                      <div className='rounded-lg border-[#CCCCCC]  border-2 w-full md:w-3/4'>
                          <div className='text-[15x] text-[#F47521] font-bold'>Mobile No.</div>
                          <p className='font-bold text-2xl' contentEditable={true}>+1-234-567-890</p>
                      </div>
                      <div className='rounded-lg border-[#CCCCCC]  border-2 w-full md:w-3/4'>
                          <div className='text-[15x] text-[#F47521] font-bold'>Email</div>
                          <p className='font-bold text-2xl' contentEditable={true}>janedoe@gmail.com</p>
                      </div>
                      <div className='flex flex-col justify-center items-center gap-2 md:w-3/4'>
                      <div className='bg-[#F47521] rounded-3xl text-center text-white w-[340px] h-[48px] flex justify-center items-center'>Save Changes</div>
                <div className=' rounded-3xl text-center text-[#F47521] w-[170px] px-2 py-3'>Discard Changes</div>
               </div>       
            </div>
         
              </Card>
          </div>
          </div>
  )
}

export default EditProfile