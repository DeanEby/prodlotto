import { useEffect } from 'react';
import './App.css'
import Card from './card.tsx'
import {songElements} from './songElements.tsx'


let elements : string[] = [];


function updateElements() {
  const selectedCatagories = new Set<string>();
  let elementKeys = Array.from(songElements.keys())
  while (selectedCatagories.size < 5) {
    selectedCatagories.add(elementKeys[getRandomInt(elementKeys.length)]);
  }
  let selectedArray = Array.from(selectedCatagories);
  elements = selectedArray;
  for(let i=1; i < 6; i++){
    updateElement(i);
  }
}

function getRandomInt(max : number){
  return Math.floor(Math.random() * max)
}


export function updateElement(elementNumber : number){
  let element = document.getElementById(String(elementNumber));
  let elementArray = songElements.get(elements[elementNumber - 1])
    if (element && elementArray){
      element.textContent = elementArray[getRandomInt(elementArray.length)];
    }
}



function App() {


    useEffect(() => {
      updateElements();
    });

    
  return (
    <div className="justify-self-center items-center p-11 m-30 shrink">
      <h1 className='text-center text-7xl font-bold text-gray-200 p-12 animate-pulse'>
        ProdLotto
      </h1>
      <div className = "flex justify-between text-3xl p-5 font-bold text-gray-200 gap-20 capitalize text-center w-full h-auto ">
      <Card id={1}/>
      <Card id={2}/>
      <Card id={3}/>
      <Card id={4}/>
      <Card id={5}/>
      </div>
      
        
        
      <div className="justify-self-center">
        <button className='bg-transparent hover:bg-gray-400 text-gray-100 hover:text-purple-800 font-semibold py-8 px-8 border border-purple-400 rounded shadow'
            onClick={() => updateElements()}>Generate Song Idea</button>
      </div>
    </div>
  )
}
export default App