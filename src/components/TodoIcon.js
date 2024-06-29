import React from "react"
import { ReactComponent as CheckSVG} from '../assets/icons/completed.svg'
import { ReactComponent as DeleteSVG} from '../assets/icons/delete.svg'

const iconTypes = {
    "check": <CheckSVG className="icon-svg"/>,
    "delete": <DeleteSVG className="icon-svg"/>
}

function TodoIcon(props){
    return (
        <span className={`icon-${props.type}${props.completed ? 'icon-check--completed': ''}`} onClick={props.func}>
            {iconTypes[props.type]}
        </span>
    );
}

export {TodoIcon}