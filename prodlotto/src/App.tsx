import './App.css'

function App() {
  const creativeLimitations = [
    'unconventional time signature',
    'microtonal',
    'no sidechain',
    '10 tracks or less',
    'only nature samples',
    'no intro or outro',
    'made in under an hour'
  ];

  const tempos = [
    '60 bpm', '61 bpm', '62 bpm', '63 bpm', '64 bpm',
    '65 bpm', '66 bpm', '67 bpm', '68 bpm', '69 bpm',
    '70 bpm', '71 bpm', '72 bpm', '73 bpm', '74 bpm',
    '75 bpm', '76 bpm', '77 bpm', '78 bpm', '79 bpm',
    '80 bpm', '81 bpm', '82 bpm', '83 bpm', '84 bpm',
    '85 bpm', '86 bpm', '87 bpm', '88 bpm', '89 bpm',
    '90 bpm', '91 bpm', '92 bpm', '93 bpm', '94 bpm',
    '95 bpm', '96 bpm', '97 bpm', '98 bpm', '99 bpm',
    '100 bpm', '101 bpm', '102 bpm', '103 bpm', '104 bpm',
    '105 bpm', '106 bpm', '107 bpm', '108 bpm', '109 bpm',
    '110 bpm', '111 bpm', '112 bpm', '113 bpm', '114 bpm',
    '115 bpm', '116 bpm', '117 bpm', '118 bpm', '119 bpm',
    '120 bpm', '121 bpm', '122 bpm', '123 bpm', '124 bpm',
    '125 bpm', '126 bpm', '127 bpm', '128 bpm', '129 bpm',
    '130 bpm', '131 bpm', '132 bpm', '133 bpm', '134 bpm',
    '135 bpm', '136 bpm', '137 bpm', '138 bpm', '139 bpm',
    '140 bpm', '141 bpm', '142 bpm', '143 bpm', '144 bpm',
    '145 bpm', '146 bpm', '147 bpm', '148 bpm', '149 bpm',
    '150 bpm', '151 bpm', '152 bpm', '153 bpm', '154 bpm',
    '155 bpm', '156 bpm', '157 bpm', '158 bpm', '159 bpm',
    '160 bpm', '161 bpm', '162 bpm', '163 bpm', '164 bpm',
    '165 bpm', '166 bpm', '167 bpm', '168 bpm', '169 bpm',
    '170 bpm', '171 bpm', '172 bpm', '173 bpm', '174 bpm',
    '175 bpm', '176 bpm', '177 bpm', '178 bpm', '179 bpm',
    '180 bpm', '181 bpm', '182 bpm', '183 bpm', '184 bpm',
    '185 bpm', '186 bpm', '187 bpm', '188 bpm', '189 bpm',
    '190 bpm', '191 bpm', '192 bpm', '193 bpm', '194 bpm',
    '195 bpm', '196 bpm', '197 bpm', '198 bpm', '199 bpm',
    '200 bpm', 'Smallest possible bpm', 'fastest possible bpm'
  ];

  const keys = [
    'a minor',
    'a# minor',
    'b minor',
    'c minor',
    'c# minor',
    'd minor',
    'd# minor',
    'e minor',
    'f minor',
    'f# minor',
    'g minor',
    'g# minor',
    'c major'
  ];

  const instrumentTypes = [
    'guitar',
    'piano',
    'synth',
    'accoustic drums',
    'arpeggiated synths',
    'repetitive vocal chops',
    'breakbeat drums',
    'sampling',
    'tribal vocal samples',
    'big 808s',
    '8-bit synths',
    'orchestral elements'
  ];

  const productionTechniques = [
    'unconventional sidechain',
    'heavily distorted',
    'vocoded',
    'microsampling',
    'heavy panning',
    'subtle panning',
    'creative arpeggiation',
    'heavily sample use'
  ];

  const descriptiveWords = [
    'sad',
    'happy',
    'melancholic',
    'ethereal',
    'expansive',
    'futuristic',
    'aggressive',
    'experimental',
    'synthetic',
    'hard hitting',
    'dusty',
    'disco',
    'psychedelic'
  ];

  const focusElements = [
    'chordal',
    'harmonicly driven',
    'melodically driven',
    'high contrast',
    'vocal driven',
    'heavy call and response',
    'steady rhythm',
    'clearly defined sections',
    'swung',
  ]

  function getRandomInt(max : number){
    return Math.floor(Math.random() * max)
  }
  
  function updateTitle() {
    const catagories = [creativeLimitations, tempos, keys, instrumentTypes, productionTechniques, descriptiveWords, focusElements];
    const selectedCatagories = new Set<string[]>();
      while (selectedCatagories.size < 5) {
        selectedCatagories.add(catagories[getRandomInt(catagories.length)]);
      }
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
  return (
    <div>
      <h1 id='title'>Hello World!</h1>
      <button onClick={() => updateTitle()}>Generate Song Idea</button>
    </div>
  )
}
export default App