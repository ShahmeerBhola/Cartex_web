import React from 'react';
import ReactDOM from "react-dom";
import closebtn from "./modalpics/closebtnn.png"


const ModalOverlay = (props) => {
    return (<div className='bg-[#707070] z-0 h-screen  flex flex-col justify-center items-center w-screen overflow-hidden'>
        <div className='mx-auto w-[275px] md:w-[400px] bg-white flex flex-col relative z-50 p-5 rounded-xl shadow-lg justify-center items-center  '>
            {(props.titleimage) && (<img className='h-[24px] w-[150px]' src={props.titleimage}></img>)}
            {(props.heading) && (<div className='text-xl py-4 font-bold'>{props.heading}</div>)}
                 <img className='w-[48px] h-[48px] absolute top-0 right-2' src={closebtn} ></img>
                <div>{props.children}</div>
            </div>
        </div>
    );
} 

const portalElement = document.getElementById('modelid');


const Modal = (props) => {

    return (<>
    {ReactDOM.createPortal(
        <ModalOverlay  titleimage={props.titleimage} heading={props.heading} >{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
        
  )
}

export default Modal