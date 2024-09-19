import { useState } from 'react';
import './App.css';
import { num, sc, sym, uc } from './letters';

function App() {
  let[uppercase,setUppercase]=useState(false)
  let[lowercase,setLowercase]=useState(false)
  let[symbolcase,setSymbolcase]=useState(false)
  let[numbercase,setNumbercase]=useState(false)
let[passwordlen,setPasswordlen]=useState(20)
let [pass,setPass]=useState('')


  let createpassword=()=>{
    let finalpass=''
    let charset=''
if(uppercase||lowercase||symbolcase||numbercase)
  {if(uppercase) charset+=uc;
  if(lowercase) charset+=sc;
  if(symbolcase) charset+=sym;
  if(numbercase) charset+=num;
  for(let i=0;i<passwordlen;i++){
    finalpass+=charset.charAt(Math.floor(Math.random()*charset.length))
  }
  setPass(finalpass);
  }
  else{
    alert("Please select one CheckBox!")
  }
  }
  let copypass=()=>{
    navigator.clipboard.writeText(pass)
  }
  return (
    <div className="App">
      <h1 className='heading'>PASSWORD GENERATOR</h1>
      <div className='outerbox'>
      <div className='centerbox'>
        <div className='but'>
          <input type='text' placeholder='Generate password' value={pass}readOnly ></input>
        <button onClick={copypass}>Copy</button>
        </div>
<div className='passlength'>
  <label>Password length</label>
  <input type='number' max={15} min={4} value={passwordlen} onChange={(event)=>setPasswordlen(event.target.value)}></input>
</div>
<div className='passlength'>
  <label>Include uppercase letters</label>
  <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}></input>
</div>
<div className='passlength'>
  <label>Include lowercase letters</label>
  <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)}></input>
</div>
<div className='passlength'>
  <label>Include numbers</label>
  <input type='checkbox' checked={numbercase} onChange={()=>setNumbercase(!numbercase)}></input>
</div>
<div className='passlength'>
  <label>Include symbols</label>
  <input type='checkbox' checked={symbolcase} onChange={()=>setSymbolcase(!symbolcase)}></input>
</div>
<button className='btn' onClick={createpassword}>Generate password</button>
      </div>
      </div>
    </div>
  );
}

export default App;
