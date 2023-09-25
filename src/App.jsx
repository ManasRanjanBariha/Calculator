import { useState } from 'react'
import './App.css'

function App() {
  const [answer, setAnswer] = useState("0")
  function onClick(e){
    // console.log(e.target.textContent)
    if(answer.startsWith(0))
    {
      console.log(answer.substring(1));
      setAnswer(answer.substring(1)+e.target.textContent);

    }
    else{
      setAnswer(answer+e.target.textContent);
    }
    
    console.log(answer);
  }
  function onDelete(){
    if(answer.length==1)
    {
      setAnswer("0")
    }
    else{
      setAnswer(answer.slice(0,-1))
    }
  }
  return (
   <div className='calculator'>
      <div className='row-1'>
        <input type='text' id="input-ans"name="answer" readOnly value={answer}   />
      </div>
      <div className='row'>
        <div className='button' onClick={()=>{
          setAnswer("0")
        }
        }>AC</div>
        <div className='button' onClick={onDelete}>DE</div>
        <div className='button' onClick={onClick}>.</div>
        <div className='button' onClick={onClick}>/</div>
      </div>
      <div className='row'>
        <div className='button' onClick={onClick}>7</div>
        <div className='button'onClick={onClick}>8</div>
        <div className='button'onClick={onClick}>9</div>
        <div className='button'onClick={onClick}>*</div>
      </div>
      <div className='row'>
        <div className='button'onClick={onClick}>4</div>
        <div className='button'onClick={onClick}>5</div>
        <div className='button'onClick={onClick}>6</div>
        <div className='button'onClick={onClick}>-</div>
      </div>
      <div className='row'>
        <div className='button'onClick={onClick}>1</div>
        <div className='button'onClick={onClick}>2</div>
        <div className='button'onClick={onClick}>3</div>
        <div className='button'onClick={onClick}>+</div>
      </div>
      <div className='row'>
        <div className='button'onClick={onClick}>00</div>
        <div className='button'onClick={onClick}>0</div>
        <div className='button button-2' onClick={()=>{
          setAnswer(eval(answer)+"")
        }}>=</div>
      </div>
   </div>
  )
}

export default App
