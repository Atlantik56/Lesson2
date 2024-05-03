import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
const [counter, setCounter] =useState(0);

const [date, setDate] =useState ("");

const [flag, setFlag] =useState (1);

useEffect ( () =>{
  setDate(new Date().toString())
  setFlag(-flag)

}, [flag] )


  return (
    
    <>
    
    <p className='clik'>Счетчик: {counter}</p>
  <button onClick={ () => {setCounter( counter + 1)} }> Прибавить +1 </button>
  <button onClick={ () => {setCounter( counter - 1)} }> Уменьшить -1 </button>
  
<h2>Текущая дата</h2>

<p>{date}</p>

<button  onClick={ ()=> { setFlag (-flag)} }> Обновить дату </button>




    </>
  );
}

export default App;
