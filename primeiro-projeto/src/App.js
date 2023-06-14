import { useState } from 'react';
import List from './components/List';
import FormattedText from './components/FormattedText';
import './App.css';
import'./components/Box.css'
import Card from './components/Card';
import Box from './components/Box';
import RandomNumber from './components/RandomNumber';
import Name from './components/Name';

const list1 = ["Corinthians","Palmeira","Santos","São Paulo"]
const list2 = ["Real Madri","Barcelona"];


function App() {
  const [contador, setContador] = useState(0)
  const hendleClick = () =>{
    setContador(contador + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <RandomNumber/>
        <Name/>
    {/*}    <Box fontColor="#9a8df7">
          <p>texto</p>
          <p>texto2</p>
        </Box>
        <List items={list1}/>
        <FormattedText label={"Nome"} value={" Leo"}/>
  <FormattedText label={"Idade"} value={" 22"}/> */}
      </header>
    </div>
  );
}

export default App;
