'use client'

import React from "react";

export default function InteractiveCard({ children,contentName }  : {children: React.ReactNode, contentName : string}) {

  function OnHospitalSelected(){
    alert("You select " + contentName)
  }
  function OnCardMouseAction(event:React.SyntheticEvent){

    if(event.type == 'mouseover')
    {
        event.currentTarget.classList.remove('shadow-lg')
        event.currentTarget.classList.remove('bg-white')
        event.currentTarget.classList.add('shadow-2xl')
        event.currentTarget.classList.add('bg-neutral-200')
        

    }
    else{
        
        event.currentTarget.classList.remove('shadow-2xl')
        event.currentTarget.classList.remove('bg-neutral-200')
        event.currentTarget.classList.add('shadow-lg')
        event.currentTarget.classList.add('bg-white')
    }    

  }

  return (
    <div className='justify-center   h-[300px] rounded-lg shadow-lg bg-white  ' onClick={()=> OnHospitalSelected()}
    onMouseOver={(e)=>OnCardMouseAction(e)}
    onMouseOut={(e)=>OnCardMouseAction(e)}>
      { children }
    </div>
  );
}
