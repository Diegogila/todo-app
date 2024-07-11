import React from "react"
import { TodoIcon } from "./TodoIcon";

function CompleteIcon({onComplete}){
    return (
            <TodoIcon type='check' func={onComplete}/>
    );
}

export {CompleteIcon}