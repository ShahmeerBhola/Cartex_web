import React,{useState} from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import IconButton from '@mui/material/IconButton';

export default function SelectBoxs({toggler,setToggler, toggle,data,topp}) {

    // const [toggler, setToggler] = useState(false)
    const [eventType, setEventType] = useState(data)
    
  // const handleChange = (event) => {

  //   // setEventType(event.target.value);
  //   console.log('toggler',event);
  // };
  // console.log('toggler',event);
    
  return (
    <div className='w-full '>
      <div className='  w-full'> 
      <div className="bg-transparent outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] text-black cursor-pointer" onClick={()=>setToggler(true)}>
        <h3 defaultValue ={eventType}>{eventType}</h3>
        <div className={``}>
        </div>
              </div>
              {/* <select className="bg-transparent outline-0 w-full font-bold text-lg lg:text-lg border-[#fff] text-black cursor-pointer" style={{WebkitAppearance:"none", MozAppearance:"none",background:"none",backgroundColor:"none"}} >
              <option value="+1">Thursday, 28 October, 2021</option>
              <option value="+1">Thursday, 29 October, 2021</option>
            </select> */}
      {
        toggler && ( <div className={`absolute flex flex-col z-10 inset-x-0 top-[85px] mt-2 w-full overflow-hidden  rounded-2xl text-xl font-normal shadow-2xl border-primary bg-white ${topp && 'top-[62px]'}`}>
          {
            toggle.map((item,i)=>(
                <>
                <h2 className='cursor-pointer indent-4 py-2 hover:bg-[#fdeadf] hover:text-[#F47521] text-black text-[15px]' onClick={() => { setEventType(item); setToggler(false) }}>{item}</h2>
                <hr/></>
            ))
          }
      </div>)
}
      </div>
     
    </div>
  )
}