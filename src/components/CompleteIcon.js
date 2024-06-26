import React from "react"
import completedIcon from '../assets/icons/completed.svg'
import { TodoIcon } from "./TodoIcon";

function CompleteIcon({completed, onComplete}){
    return (
            <TodoIcon type='check' func={onComplete}/>
    );
}

export {CompleteIcon}