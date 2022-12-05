import { useState, useRef } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import List from './Components/List/List';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [listState, setListState] = useState([]);
  const input = useRef(null);

  function getInputValue(e) {
    setInputValue(e.target.value);
  }
  function addToList(e) {
    setListState([...listState, inputValue]);
  }

  function handleSubmit(e) {
    console.log('handleSubmit');
    e.preventDefault(); // prevent page refresh
    // clear all input values in the form:
    input.current.value('');
  }

  return [
    <div className="app-container">
      <h1>This is a list of things that everyone is thankful for</h1>
      <Input onChange={getInputValue} onSubmit={handleSubmit} />
      <Button type="submit" onClick={addToList} buttonText="Add to list" />
      {listState.map((list) => {
        return <List listText={list} />;
      })}
      <div className="footer-container">
        <p>
          This app was created by Violeta Cique Fernández & Mikolaj Zagrodzki
        </p>
        <img src="./LOGO.png" />
      </div>
    </div>,
  ];
}

export default App;
