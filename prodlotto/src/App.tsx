import './App.css'

function App() {

  function updateTitle() {
    let title = document.getElementById('title')
    if (title){
      title.textContent = 'hopecore synths | chappel roan vocals | meme drums'
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