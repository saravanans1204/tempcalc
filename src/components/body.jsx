import React from 'react'
import Navbar from './Navbar'
import '../css/body.css'
import { useState,useEffect } from 'react'

const Body = () => {
    const [temp,setTemp]=useState(0)
    const [input,setInput]=useState(0)
    const[inputUnit,setInUnit]=useState('C')
    const[outUnit,setOutUnit]=useState('F')


    const setInp=(e)=>{
        e.preventDefault()
    const inputEntry=document.querySelector('#in').value
    setInput(inputEntry)

}
    const inOnchange=(e)=>{
        const tempUnit=document.querySelector('#selectInputDegreeType').value
      
        setInUnit(tempUnit)
        
        
    }

    const outOnchange=(e)=>{
        const tempUnit=document.querySelector('#selectConversionType').value
        setOutUnit(tempUnit)
       
        
    }

    const converterCtFK=(out,input)=>{
        if(out==='F'){
            setTemp(((input*1.8)+32).toFixed(2))
            // console.log(((input*1.8)+32))
        }else if(out='K'){
            setTemp((Number(input)+273.15).toFixed(2))
            // console.log((input+273.15))
        }
    }


    const converterFtCK=(out,input)=>{
        console.log(inputUnit)
        console.log(outUnit)
        if(out==='C'){
            setTemp(((input-32)*(5/9).toFixed(2)))
            // console.log(((input-32)*(5/9).toFixed(3
         }
         
        else if(out='K'){
            setTemp(((input-32) *(5/9)+273.15).toFixed(2))
            // console.log(((input-32) *(5/9)+273.15).toFixed(2))
        }
    }
 

    const converterKtFC=(out,input)=>{
        if(out==='F'){
            setTemp(((input-273.15)*(9/5)+32).toFixed(2))
            // console.log(((input-32)*(5/9).toFixed(3
         }
         
        else if(out='C'){
            setTemp((input-273.15).toFixed(2))
            // console.log(((input-32) *(5/9)+273.15).toFixed(2))
        }
    }
    useEffect(()=>{
        if(inputUnit=='F'){
            // console.log(inputUnit)
            // console.log(outUnit)
            converterFtCK(outUnit,input)
        }else if(inputUnit=='C'){
            
           converterCtFK(outUnit,input)
        
        }else if(inputUnit=='K'){
            console.log(inputUnit)
            console.log(outUnit)
            converterKtFC(outUnit,input)
        };
        return()=>{
            setTemp(0)
        }
      
    },[input,inputUnit,outUnit])
        
   
        
    // useEffect(()=>{
    //     setTemp(0)
    // })



  return (
    <div>
        <Navbar/>
        <div className='main'>
           
            <div className='app'>
                <form className='top' onSubmit={setInp}>
                <label htmlFor='in'><h2>Enter Temperature</h2></label>
                <input type='number' id='in' placeholder='0'/>
                <span>
                    <select className="form-control" onChange={inOnchange} id="selectInputDegreeType" >
                    {outUnit=='C'?'':<option value="C" defaultValue>&deg;C</option>}
                    {outUnit=='F'?'':  <option value="F">&deg;F</option>}
                    {outUnit=='K'?'': <option value="K">K</option>}
                    </select>
                </span>
                <button type='submit'>Go</button>
                </form>
                
           
                
                <div className='center'>
                    <label htmlFor='selectConversionType'><h2>Convert to</h2></label>
                    <select className="form-control" onChange={outOnchange} id="selectConversionType">
                        {inputUnit=='F' ?'':<option value="F" defaultValue> Fahrenheit (&deg;F) </option>}
                        {inputUnit=='C' ?'':<option value="C">Celcius (&deg;C)</option>}
                        {inputUnit=='K' ?'':<option value="K">Kelvin (K)</option>}
                    </select>
                </div>
                <div className='results'>
                    <h1>RESULTS</h1>
                    <div className='res-col'>
                        <h2>{`${input}${inputUnit !='K'?"°":' '}${inputUnit}=${temp+ String(outUnit !='K'?"°":'')+outUnit}`}</h2>
                    </div>
                </div>
              
            </div>
            </div>
            
        </div>
   
  )
}

export default Body