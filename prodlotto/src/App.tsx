import { useEffect } from 'react';
import './App.css'
import Card from './components/card.tsx'
import {songAttributes} from './songAttributes.ts'


let cards : string[] = [];

function animateCard(cardNumber: number) {
    let card = document.getElementById(String(cardNumber));
    if (card) {
      // const interval = setInterval(() => {
      //   let cardArray = songAttributes.get(cards[cardNumber - 1]);
      //   if (cardArray) {
      //     card.textContent = cardArray[getRandomInt(cardArray.length)];
      //   }
      // }, 100);
      // // Clear interval after animation duration
      // setTimeout(() => {
      //   clearInterval(interval)
      // }, 2000);
      
    }
  }


function updateCards() {
  const selectedCatagories = new Set<string>();
  // console.log(songAttributes);
  while (selectedCatagories.size < 5) {
    selectedCatagories.add(getRandomAttributeCategory());
  }
  // console.log(selectedCatagories);
  let selectedArray = Array.from(selectedCatagories);
  cards = selectedArray;
  for(let i=1; i < 6; i++){
    updateCard(i);
  }
}

function getRandomInt(max : number){
  return Math.floor(Math.random() * max)
}

function getRandomAttributeCategory(){
  const categories = Object.keys(songAttributes)
  return categories[getRandomInt(categories.length)]
}



export function updateCard(cardNumber : number){
  animateCard(cardNumber);
  let card = document.getElementById(String(cardNumber));
  const attributeList = Object.keys(songAttributes[cards[cardNumber - 1] as keyof typeof songAttributes])
  const attributeValues = Object.values(songAttributes[cards[cardNumber - 1] as keyof typeof songAttributes])
  // console.log(attributeValues);
  let randomIndex = getRandomInt(attributeList.length);
  let randomAttribute = attributeList[randomIndex];
  let randomValue = attributeValues[randomIndex];
  // console.log(randomAttribute);
  if (card) {
    if (randomValue !== "empty") {
      const link = document.createElement('a')
      link.href = randomValue;
      link.textContent = randomAttribute;
      link.target = "_blank";
      link.className = "text-purple-400 hover:text-purple-300";

      card.innerHTML = '';
      card.appendChild(link);
    } else {
      card.textContent = randomAttribute;
    }
  }

}

function App() {


    useEffect(() => {
      updateCards();
    });

    
  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <h1 className='text-center text-4xl sm:text-7xl font-bold text-gray-200 p-4 sm:p-12 animate-pulse'>
        ProdLotto
      </h1>
      <div className="flex flex-wrap gap-2 sm:gap-4 text-xl sm:text-3xl p-2 sm:p-5 font-bold text-gray-200 capitalize text-center">
      <Card id={1}/>
      <Card id={2}/>
      <Card id={3}/>
      <Card id={4}/>
      <Card id={5}/>
      </div>
      
      <div className="flex justify-center">
        <button className='cursor-pointer bg-transparent hover:bg-gray-400 text-gray-100 hover:text-purple-800 font-semibold py-4 sm:py-8 px-4 sm:px-8 border border-purple-400 rounded shadow my-2 sm:my-5 text-sm sm:text-base'
            onClick={() => updateCards()}>Generate Song Idea</button>
      </div>
      <h1 className='text-gray-100 font-semibold text-sm sm:text-base px-2 sm:px-0'>
      Prodlotto is my spin on Brian Eno and Peter Schmidt's Oblique Strategies card deck, designed specifically for music producers.
      I often find myself creating similar types of songs and relying on the same tools, which tends to lead to less creative results.
      Prodlotto helps break that cycle by generating a unique set of constraints to spark fresh and creative ideas. Just click the 
      "Generate Song Idea" button to receive a new combination of song elements, then start producing. If most of the elements work 
      for you but you'd like to tweak one or two, use the "Regenerate" button on the top of the card to swap them out. If you are unfamiliar with 
      a technique mentioned, I encourage you to do a bit of googling. I have also provided links for some of the concepts. Many of the song elements are intentionally vague, leaving things up to your interpretation. 
      </h1>
    </div>
  )
}
export default App