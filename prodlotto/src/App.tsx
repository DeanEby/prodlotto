import { useEffect } from 'react';
import './App.css'

import {songElements} from './songElements.tsx'


function App() {
  console.log(songElements);
  function getRandomInt(max : number){
    return Math.floor(Math.random() * max)
  }
  
  function updateElements() {
    const selectedCatagories = new Set<string []>();
    while (selectedCatagories.size < 5) {
      selectedCatagories.add(songElements[getRandomInt(songElements.length)]);
    }
    //console.log(selectedCatagories);
    let selectedArrays = Array.from(selectedCatagories);
    let newTitle = [];
      for (let i = 0; i < selectedArrays.length; i++){
        newTitle.push(selectedArrays[i][getRandomInt(selectedArrays[i].length)])
      }
    //let newTitleString = newTitle.toString()
    //newTitleString = newTitleString.replace(/,/g , " | ")
    let element1 = document.getElementById('element1');
    if (element1){
      element1.textContent = newTitle[0];
    }
  }

  useEffect(() => {
    updateElements();
  });
  return (
    <div className="justify-self-center items-center">
      <div className = "flex  justify-between text-3xl p-2 font-bold text-gray-500 gap-50">
        <div className=''>
          <h1 id='element1'>testest</h1>
        </div>
        <div className='flex gap-2'>
          <h1 id='element2'>testest</h1>
        </div>
        <h1 id='element3'>testest</h1>
        <h1 id='element4'>testest</h1>
        <h1 id='element5'>testest</h1>
      </div>
      <div>
        <button className='bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => updateElements()}>Generate Song Idea</button>
      </div>
    </div>
  )
}
export default App