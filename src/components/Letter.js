import React, {useContext} from "react";
import { AppConext } from "../App";

function Letter({ letterPos, attemptVal }){

    const {board} = useContext(AppConext);
    const letter = board[attemptVal][letterPos];

    return <div className="letter"> {letter} </div>
    
}

export default Letter;

