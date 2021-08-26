import './App.css';
import Message from "./components/Message";

function App() {
  const someText = 'Some text to show in component Message';

  return (
    <div className="App">
      <Message value ={someText}/>
    </div>
  );
}

export default App;
