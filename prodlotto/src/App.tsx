import './App.css'

function App() {
  const creativeLimitations = [
    'unconventional time signature',
    'microtonal',
    'no sidechain',
    '10 tracks or less',
    'only nature samples',
    'no intro or outro'
  ];

  const tempos = [
    '100 bpm',
    '110 bpm',
    '120 bpm',
    '130 bpm',
    '140 bpm'
  ];

  const keys = [
    'a minor',
    'c major'
  ];

  const instrumentTypes = [
    'guitar',
    'piano',
    'synth',
    'accoustic drums'
  ];

  const productionTechniques = [
    'unconventional sidechain',
    'heavily distorted',
    'vocoded',
    'microsampling'
  ];

  const descriptiveWords = [
    'sad',
    'happy',
    'melancholic'
  ];

  function getRandomInt(max : number){
    return Math.floor(Math.random() * max)
  }
  
  function updateTitle() {
    const catagories = [creativeLimitations, tempos, keys, instrumentTypes, productionTechniques, descriptiveWords];
    const selectedCatagories = new Set<string[]>();
      while (selectedCatagories.size < 5) {
        selectedCatagories.add(catagories[getRandomInt(catagories.length)]);
      }
      let selectedArrays = Array.from(selectedCatagories);
      let newTitle = [];
      for (let i = 0; i < selectedArrays.length; i++){
        newTitle.push(selectedArrays[i][getRandomInt(selectedArrays.length)])
      }
      console.log(newTitle)
      console.log(selectedArrays)

    let title = document.getElementById('title');
    if (title){
      title.textContent = newTitle.toString();
    }
  }
  return (
    <div>
      <h1 id='title'>Hello World!</h1>
      <button onClick={() => updateTitle()}>Generate Song Idea</button>
    </div>
  )
}
export default App