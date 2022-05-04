import React,{useState} from 'react'

const ButtonConverter = ({name, convertir,random,cambio}) => {
 const [numberConverted,setNumberConverted]=useState(false)
if(cambio ){
 setNumberConverted(false)
}
 return (
    <>
    
    <button className="bg-white text-black mb-2 p-2 rounded-lg w-full md:w-1/2 mt-2" onClick={e=>setNumberConverted(true)}>{name}</button>
    {numberConverted?<div className="text-black w-1/2 rounded-lg mt-2 p-2 bg-white mb-2">{(random.toString(convertir))}</div>:null}
    </>

  )
}

export default ButtonConverter