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
    <div className="container mx-auto px-4 py-8">
      <h1 className='text-center text-7xl font-bold text-gray-200 p-12 animate-pulse'>
        ProdLotto
      </h1>
      <div className = "flex flex-wrap gap-4 text-3xl p-5 font-bold text-gray-200 capitalize text-center">
      <Card id={1}/>
      <Card id={2}/>
      <Card id={3}/>
      <Card id={4}/>
      <Card id={5}/>
      </div>
      
        
        
      <div className="justify-self-center">
        <button className='bg-transparent hover:bg-gray-400 text-gray-100 hover:text-purple-800 font-semibold py-8 px-8 border border-purple-400 rounded shadow my-5'
            onClick={() => updateElements()}>Generate Song Idea</button>
      </div>
      <h1 className='text-gray-100 font-semibold'>
      Prodlotto is my spin on Brian Eno and Peter Schmidt's Oblique Strategies card deck, designed specifically for music producers.
      I often find myself creating similar types of songs and relying on the same tools, which tends to lead to less creative results.
      Prodlotto helps break that cycle by generating a unique set of constraints to spark fresh and creative ideas. Just click the 
      "Generate Song Idea" button to receive a new combination of song elements, then start producing. If most of the elements work 
      for you but you’d like to tweak one or two, use the "Regenerate" button on the top of the card to swap them out. If you are unfamiliar with 
      a technique mentioned, I encourage you to do a bit of googling. Many of the song elements are intentionally vague, leaving things up to your interpretation. 
      </h1>
    </div>
  )
}
export default App