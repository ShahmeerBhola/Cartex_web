import React,{useState} from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import IconButton from '@mui/material/IconButton';

export default function SelectBoxs({eventType,setEventType,setToggler,toggler}) {

  const toggle= ['Mehndi','Birthday', 'Wedding','Valima'];
  const[items,setItems]=useState('')
  // const handleChange = (event) => {

  //   // setEventType(event.target.value);
  //   console.log('toggler',event);
  // };
  // console.log('toggler',event);
  return (
    <div className='w-full'>
      <div className=' relative w-full'> 
      <div className= "bg-[#F3F3F3] w-full flex justify-between items-center text-4xl font-semibold text-[#D12860]  pl-2 py-2.5 rounded-xl" onClick={()=>setToggler(true)}>
        <h3 defaultValue ={eventType}>{eventType}</h3>
        <div className={``}>
        <IconButton >
          <ArrowLeftIcon className= {`text-[#D12860]  ${toggler && 'rotate '} arrow`} fontSize='large'/>
        </IconButton>
        </div>
      </div>
      {
        toggler && ( <div className=' absolute flex flex-col z-10  mt-2 w-full  rounded-xl text-xl font-normal shadow-2xl border-primary bg-white'>
          {
            toggle.map((item,i)=>(
              <h2 className='cursor-pointer indent-4 py-2 hover:bg-[#F3F3F3] text-black text-2xl'  onClick={()=>{setEventType(item); setToggler(false)}}>{item}</h2>
            ))
          }
      </div>)
}
      </div>
     
    </div>
  )
}