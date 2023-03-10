
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';
import PhoneBar from './components/PhoneBar/PhoneBar';


function App() {
  return (
    <div className="App">
      <NavBar className="text-4xl "></NavBar>
      <h1 className="text-4xl font-bold underline">This is big big header</h1>
      <p className=' underline font-thin'>This is just a paragraph</p>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
