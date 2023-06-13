import { useState } from 'react';
import List from './components/List';
import FormattedText from './components/FormattedText';
import './App.css';
import Card from './components/Card';

const list1 = ["Corinthians","Palmeira","Santos","São Paulo"]
const list2 = ["Real Madri","Barcelona"]

function App() {
  const [contador, setContador] = useState(0)
  const hendleClick = () =>{
    setContador(contador + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <List items={list1}/>
        <List items={list2}/>
        <FormattedText label={"Nome"} value={" Leo"}/>
        <FormattedText label={"Idade"} value={" 22"}/>
      </header>
    </div>
  );
}

export default App;
