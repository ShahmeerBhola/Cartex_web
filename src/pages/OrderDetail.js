import React from 'react'
import Card from '../component/UI/Card'
import customerService from "../Images/Profile/customer-service.png"

const OrderDetail = () => {
    return (<div className='bg-[#EEEEEE] pb-10 '>
      
        <h2 className='p-10 mx-10 w-full font-bold '>Order Details</h2>
        
        
      <div className='flex flex-col md:flex-row mx-auto w-10/12 md:w-11/12 gap-2 md:gap-2'>
          <hr />
          <div className='w-full flex flex-row'>
          <div className='flex flex-col'>
              <div className=''>Your Order No:</div>
              <div className='text-2xl md:text-4xl font-bold'>XYZ0022786581</div>
            </div>
              <div className='bg-[#F47521] rounded-xl w-[350px]'>rebook</div>
            </div>
            
      <Card css="w-full  lg:w-1/4  h-[260px] justify-center items-center ">
                <div className='flex flex-col justify-center items-center '>
                <img className='h-[108px] w-[108px] ' src={customerService} alt="customer care" ></img>
                <div className='text-sm' >Need help</div>
                <div className='text-[#F47521] text-lg md:text-2xl'>+91 911 063 5588</div>
                    <div className='text-sm'>24/7 Monday - Sunday</div>
                    </div>
            </Card>


      </div>
      </div>
  )
}

export default OrderDetail