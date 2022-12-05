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
    if (inputValue !== '') {
      setListState([...listState, inputValue]);
    }
    setInputValue('');
  }

  return [
    <div className="app-container">
      <div className="header-container">
        <h1>This is a list of things that everyone is thankful for</h1>
      </div>
      <div className="input-container">
        <Input onChange={getInputValue} placeholder="I'm thankful for..." />
      </div>
      <div className="button-container">
        <Button type="submit" onClick={addToList} buttonText="Add to list" />
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
