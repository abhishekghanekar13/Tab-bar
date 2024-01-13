import Buttontab from './Components/Buttontab'
import './App.css'
import Tabbar from './Components/Tabbar'
import { useState } from 'react'

function App() {
  let cityname=["London","Delhi","Tokyo"]
  let [currentvalue,setvalue] =useState("London")
  let handalonclink=(city)=>{
 console.log(city);
 setvalue(city);
  }
  return(<>
  <div className='tab'>   
  <div> 
  <Buttontab handalonclink={handalonclink} cityname={cityname}/>
  </div>
  <div className='Tabbar'>
   <div className={currentvalue==="London"?"contant-active":"contant"}>
    <h1>London</h1>
    <p>London is capital of United kingdom</p>
   </div>
   <div className={currentvalue==="Delhi"?"contant-active":"contant"}>
    <h1>Delhi</h1>
    <p>Delhi is capital of India</p>
   </div>
   <div className={currentvalue==="Tokyo"?"contant-active":"contant"}>
    <h1>Tokyo</h1>
    <p>Tokyo is capital of Japan</p>
   </div>

  </div>
  </div>
  </>)
  
}

export default App
