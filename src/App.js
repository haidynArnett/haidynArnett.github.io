import './App.css';
import MyNavbar from './Navbar.js';
import Headshot from './Headshot.js';
import Minesweeper from 'minesweeper/src/Minesweeper';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Headshot />
      <Minesweeper />
    </div>
  );
}

export default App;
