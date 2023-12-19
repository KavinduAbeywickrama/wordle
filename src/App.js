import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { createContext, useState } from "react" ;
import { boardDefault } from './Words';

export const AppConext = createContext();

function App() {

  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState ({attempt: 0, letterPos: 0});

  return (
    <div className="App">
      <nav>
        <h1> Wordle</h1>           
      </nav>
      <AppConext.Provider value={{board, setBoard, currAttempt, setCurrAttempt}}>        
        <div className='game'>
        <Board/>
        <Keyboard/>
        </div>
      </AppConext.Provider>      
    </div>
  );
}

export default App;
