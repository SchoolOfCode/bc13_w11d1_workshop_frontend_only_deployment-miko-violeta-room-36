
import './App.css';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import List from './Components/List/List';

function App() {
  return (
    <div className="app-container">
      <h1>This is a list of things that everyone is thankful for</h1>
      <Input/>
      <Button/>
      <List/>
    </div>
  );
}

export default App;
