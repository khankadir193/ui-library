import logo from './logo.svg';
import './App.css';
import Button from './Button';
import './Button.css';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div>
      <Button onClick={handleClick} variant='primary'>Click Me!</Button>
    </div>
  );
}

export default App;
