import { useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import List from './Components/List/List';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [listState, setListState] = useState([]);

  function getInputValue(e) {
    setInputValue(e.target.value);
  }
  function addToList(e) {
    setListState([...listState, inputValue]);
  }

  // function emptyInputBox(e) {
  //   e.preventDefault();
  //   setInputValue('');
  // }

  return [
    <div className="app-container">
      <h1>This is a list of things that everyone is thankful for</h1>
      <Input onChange={getInputValue} />
      <Button
        onClick={addToList}
        // onSubmit={emptyInputBox}
        buttonText="Add to list"
      />
      {listState.map((list) => {
        return <List listText={list} />;
      })}
      <p>This app was created by Violeta Cique Fernández & Mikolaj Zagrodzki</p>
      <img src="./LOGO.png" />
    </div>,
  ];
}

export default App;
