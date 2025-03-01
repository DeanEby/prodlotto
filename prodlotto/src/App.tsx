import { useEffect } from 'react';
import './App.css'

import {songElements} from './songElements.tsx'
//import {Element} from './utils/data-elements.ts'

function App() {
  let elements : string[] = [];
  //console.log(songElements);
  function getRandomInt(max : number){
    return Math.floor(Math.random() * max)
  }

  function updateElement(elementNumber : number){
    let element = document.getElementById('element' + String(elementNumber));
    let elementArray = songElements.get(elements[elementNumber - 1])
      if (element && elementArray){
        element.textContent = elementArray[getRandomInt(elementArray.length)];
      }
  }
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
  useEffect(() => {
    updateElements();
  });
  let buttonClass = "bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded scale-40"
  return (
    <div className="justify-self-center items-center p-11 m-50">
      <div className = "flex justify-between text-3xl p-5 font-bold text-gray-200 gap-50 capitalize .lg:box-border">
        <div className='.grid-cols-5 .grid-rows-5'>
          <button className={buttonClass}
              onClick={() => updateElement(1)}>regenerate</button>
          <h1 id='element1'>testest</h1>
        </div>
        
        <div className='.grid-cols-5 .grid-rows-5'>
          <button className={buttonClass}
              onClick={() => updateElement(2)}>regenerate</button>
          <h1 id='element2'>testest</h1>
        </div>

        <div className='.grid-cols-5 .grid-rows-5'>
          <button className={buttonClass}
              onClick={() => updateElement(3)}>regenerate</button>
          <h1 id='element3'>testest</h1>
        </div>

        <div className='.grid-cols-5 .grid-rows-5'>
          <button className={buttonClass}
              onClick={() => updateElement(4)}>regenerate</button>
          <h1 id='element4'>testest</h1>
        </div>

        <div className='.grid-cols-5 .grid-rows-5'>
          <button className={buttonClass}
              onClick={() => updateElement(5)}>regenerate</button>
          <h1 id='element5'>testest</h1>
        </div>

      </div>
      <div className="justify-self-center">
        <button className='bg-transparent hover:bg-gray-100 text-purple-800 font-semibold py-2 px-4 border border-purple-400 rounded shadow'
            onClick={() => updateElements()}>Generate Song Idea</button>
      </div>
    </div>
  )
}
export default App