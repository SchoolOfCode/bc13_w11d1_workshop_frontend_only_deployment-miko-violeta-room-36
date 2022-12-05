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
    let addedToList = inputValue;
    if (inputValue !== '') {
      setListState([...listState, addedToList]);
    }
    setInputValue('');
  }

  function handleSubmit(e) {
    console.log('handleSubmit');
    e.preventDefault(); // prevent page refresh
    // clear all input values in the form:
    input.current.value('');
  }

  return [
    <div className="app-container">
      <div className="header-container">
        <h1>This is a list of things that everyone is thankful for</h1>
      </div>
      <div className="input-container">
        <Input
          onChange={getInputValue}
          onSubmit={handleSubmit}
          placeholder="I'm thankful for..."
        />
      </div>
      <div className="button-container">
        <Button
          type="submit"
          onClick={addToList}
          onSubmit={handleSubmit}
          buttonText="Add to list"
        />
      </div>
      <div className="list-container">
        {listState.map((list) => {
          return <List listText={list} />;
        })}
      </div>
      <div className="footer-container">
        <p>
          This app was created by Violeta Cique Fernández & Mikolaj Zagrodzki
        </p>
        <img src="./LOGO.png" alt="V&M logo" />
      </div>
    </div>,
  ];
}

export default App;
