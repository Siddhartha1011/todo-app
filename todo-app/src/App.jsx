
import './App.css'

function App() {
  const [text, setText] = useState("")
  
  return (
    <div className="app">
      <Header />
      <div className="input-box">
        <input
          type="text"
          value={text}
          placeholder="Add a task..."
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add</button>
      </div>
    </div>
  );
}

export default App
