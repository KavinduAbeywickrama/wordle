import React, {useContext} from 'react'
import { AppConext } from "../App";
import Board from './Board';

function Key({keyVal, bigKey}) {
  const { board, setBoard, currAttempt, setCurrAttempt } = useContext(AppConext);

  const selectLetter = () => {
    const newBoard =[...board]
    newBoard[currAttempt.currAttempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1});
  };

  return (
    <div className='key' id = {bigKey && "big"} onClick={selectLetter} >
      {keyVal}
    </div>
  )
}

export default Key;