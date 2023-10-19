import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';


function App() {
 
 const [interest,setInterest] = useState(0)
 const [principle,setPrinciple] = useState(0)
 const [rate,setRate] = useState(0)
 const [year,setYear] = useState(0)
 const [isPrinciple , setIsPrinciple] = useState (true)
 const [isRate , setIsRate] = useState (true)
 const [isYear , setIsYear] = useState (true)

 const getvalidate = (e)=>{
  const {name , value} = e.target

 
  // console.log(name , value);
  // console.log(typeof(value));
  if(!!value.match(/^[0-9]*.?[0-9]+$/)){
if(name==='principle')
{
   setPrinciple(value)
    setIsPrinciple(true)}
   else if(name==='rate'){
   setRate(value)
  setIsRate(true)
}
else{
  setYear(value)
  setIsYear(true)
}
   
  }
  else{
    if(name==='principle'){
    setPrinciple(value)
    setIsPrinciple(false)}
    else if(name==='rate'){
      setRate(value)
      setIsRate(false)
    }
    else{
      setYear(value)
      setIsYear(false)
    }
  }
  
 }

 const handleCalculate = (e)=>{
  e.preventDefault()
  if(!principle || !rate || !year){
    alert('fill the form')
  }
  else{
    setInterest(principle*rate*year/100)
  }
}

const handleReset = (e)=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)

}
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div className='bg-light p-5 rounded' style={{width:'500px'}}>
        <h1>Simple Interest App</h1>
        <p>Calculate simple Interest Easily</p>
      
      <div className='bg-warning d-flex justify-content-center align-items-center w-100 p-4 rounded flex-column '>
        <h1>₹{''} {interest}</h1>
        <p>Total Simple Interest</p>
      </div>
      <form className='mt-5'onSubmit={handleCalculate}>
        <div className='mb-3'>
        <TextField name='principle' value={principle || ''} onChange={(e)=>getvalidate(e)} className='w-100' id="outlined-basic" label="₹  Principle Amount" variant="outlined" />
        
        </div>

        {
          !isPrinciple &&
          <div>
            <p className='text-danger'> Invalid Output</p>
          </div>
        }

        <div className='mb-3'>
        <TextField value={rate || ''} name='rate' className='w-100' id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined"  onChange={(e)=>getvalidate(e)} />
        
        </div>

        {
          !isRate &&
          <div>
            <p className='text-danger'> Invalid Output</p>
          </div>
        }

        <div className='mb-3'>
        <TextField value={year || ''} name='year' className='w-100' id="outlined-basic" label="Year (Yr)" variant="outlined" onChange={(e)=>getvalidate(e)} />
        
        </div>
        {
          !isYear &&
          <div>
            <p className='text-danger'> Invalid Output</p>
          </div>
        }

     <Stack className='mt-5' direction="row" spacing={2}>
     <Button disabled={isPrinciple && isRate && isYear?false:true} type='submit' className='bg-success' style={{width:'200px'}} variant="contained">Calculate</Button>
    <Button onClick={handleReset} style={{width:'200px'}} variant="outlined">Reset</Button>
    </Stack>

      </form>
      </div>
    </div>
  );
}

export default App;
