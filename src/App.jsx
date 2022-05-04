import { useState, useEffect} from 'react'
import './App.css'
import Error from './components/Error'
import NumberRandom from './components/NumberRandom'
function App() {
  const [maximo, setMaximo] = useState(0)
    const [minimo, setMinimo] = useState(0)
    const [random, setRandom] = useState(0)
    const [decimal, setDecimal] = useState(0)
    const [resultado,setResultado] = useState(false)
const [cambio,setCambio] = useState(false)
    const [cargado,setCargado] = useState(false)
    const [error,setError]=useState(false)
    useEffect(() => {
      if(maximo>0||minimo>0){
       setCargado(true)
      }
      
    }, [random])
    const reset=()=>{
      setResultado(false)
setCambio(true)
setMaximo(0)

setMinimo(0)
setRandom(false)
setDecimal(0)
setCambio(false)

    }
const handleRandom=(e)=>{
if(maximo<minimo||(maximo===minimo)){
 console.error(maximo,minimo)
 setError(true)
 setResultado(false)
 return
}
setError(false)
setRandom(Number((Math.random()* (maximo - minimo) + minimo).toFixed(decimal)))
setResultado(true)
setCambio(false)

}

  return (
    <div className="App bg-red-400 h-screen flex justify-center items-center font-bold overflow-y-scroll">
    <div className={`bg-white w-full m-2 md:w-4/6 rounded-lg font-serif flex ${error?"flex-col":""} ${resultado?"":"md:flex-col"} justify-center items-center container-content`}>

<div className="md:w-1/2 mr-2">

     <h1 className="mb-5">Calcular un número aleatorio</h1>
    <div className="mb-3">
     <label htmlFor="">Minimo:</label>{" "}
     <input type="number" required className="text-center bg-red-400 p-1 rounded-lg text-white " onChange={e=>setMinimo(Number(e.target.value))} value={minimo}></input>
    </div>
    <div className='mb-3'>
     <label htmlFor="">Maximo:</label>{" "}
     <input type="number" required className="text-center bg-red-400 p-1 rounded-lg text-white " onChange={e=>setMaximo(Number(e.target.value))} value={maximo} ></input>
    </div>
    <div className='mb-3'>
     <label htmlFor="">Decimal:</label>{" "}
     <input type="number" required className="text-center bg-red-400 p-1 rounded-lg text-white " onChange={e=>setDecimal(Number(e.target.value))} value={decimal} ></input>
    </div>
     {resultado?<button  className="bg-red-400 mt-4 w-1/2 py-1 font-bold text-white rounded-lg" onClick={reset} >Resetear</button>:(<button  className="bg-red-400 mt-4 w-1/2 py-1 font-bold text-white rounded-lg" onClick={handleRandom} >Calcular</button>)}
    </div>
    {error?<Error></Error>:(
    cargado&& random&&<NumberRandom cambio={cambio} className="w-1/2" random={random}></NumberRandom>)
    }
</div>
    </div>
  )
}

export default App
