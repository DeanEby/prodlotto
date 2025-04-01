import { useEffect } from 'react';
import './App.css'

import {songElements} from './songElements.tsx'

function App() {

  let elements : string[] = [];
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
  let buttonClass = "bg-transparent hover:bg-gray-400 text-gray-100 hover:text-purple-800 text-grey-100 font-semibold py-2 px-4 border border-purple-500 hover:border-transparent rounded scale-50"
  let elementClass = '.grid-cols-5 .grid-rows-5 border border-purple-400 basis-full w-[250px] h-[300px]'
  return (
    <div className="justify-self-center items-center p-11 m-30">
      <h1 className='text-center text-7xl font-bold text-gray-200 p-12 animate-pulse'>ProdLotto</h1>
      <div className = "flex justify-between text-3xl p-5 font-bold text-gray-200 gap-20 capitalize text-center">
        <div className={elementClass}>
          <button className={buttonClass}
              onClick={() => updateElement(1)}>regenerate</button>
          <h1 id='element1'></h1>
        </div>
        
        <div className={elementClass}>
          <button className={buttonClass}
              onClick={() => updateElement(2)}>regenerate</button>
          <h1 id='element2'></h1>
        </div>

        <div className={elementClass}>
          <button className={buttonClass}
              onClick={() => updateElement(3)}>regenerate</button>
          <h1 id='element3'></h1>
        </div>

        <div className={elementClass}>
          <button className={buttonClass}
              onClick={() => updateElement(4)}>regenerate</button>
          <h1 id='element4'></h1>
        </div>

        <div className={elementClass}>
          <button className={buttonClass}
              onClick={() => updateElement(5)}>regenerate</button>
          <h1 id='element5'></h1>
        </div>

      </div>
      <div className="justify-self-center">
        <button className='bg-transparent hover:bg-gray-400 text-gray-100 hover:text-purple-800 font-semibold py-8 px-8 border border-purple-400 rounded shadow'
            onClick={() => updateElements()}>Generate Song Idea</button>
      </div>
    </div>
  )
}
export default App