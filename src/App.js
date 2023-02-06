import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar className="text-4xl "></NavBar>
      <h1 className="text-4xl font-bold underline">This is big big header</h1>
      <p className=' underline font-thin'>This is just a paragraph</p>
    </div>
  );
}

export default App;
