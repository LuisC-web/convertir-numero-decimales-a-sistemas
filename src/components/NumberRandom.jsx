import React from 'react'
import ButtonConverter from './ButtonConverter'
ButtonConverter
const NumberRandom = ({random,cambio}) => {
  return (
    <div className="bg-red-400 shadow-2xl text-black mt-5 md:w-1/2 p-1 rounded-lg">
     <p className="text-white">Numero aleatorio: <span>{random}</span> </p>
     <div className="flex flex-col justify-center items-center">
<p className="text-white">Convertir a: </p>
    

    <ButtonConverter name="Sistema Binario"  cambio={cambio} convertir={2} random={random}></ButtonConverter>
        <ButtonConverter name="Sistema Octal" cambio={cambio} convertir={8} random={random}></ButtonConverter>
    <ButtonConverter name="Sistema Hexadecimal" cambio={cambio} convertir={16} random={random}></ButtonConverter>

     </div>
    </div>
  )
}

export default NumberRandom