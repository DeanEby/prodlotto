import { useEffect } from 'react';
import './App.css'

import {songElements} from './songElements.tsx'


function App() {
  console.log(songElements);
  function getRandomInt(max : number){
    return Math.floor(Math.random() * max)
  }
  
  function updateTitle() {
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
    let newTitleString = newTitle.toString()
    newTitleString = newTitleString.replace(/,/g , " | ")
    let title = document.getElementById('title');
    if (title){
      title.textContent = newTitleString;
    }
  }
  useEffect(() => {
    updateTitle();
  });
  return (
    
    <div>
      <h1 id='title'></h1>
      <button onClick={() => updateTitle()}>Generate Song Idea</button>
    </div>
  )
}
export default App