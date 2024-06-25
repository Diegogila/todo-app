import React from "react"
import { ReactComponent as CheckSVG} from '../assets/icons/completed.svg'
import { ReactComponent as DeleteSVG} from '../assets/icons/delete.svg'

const iconTypes = {
    "check": <CheckSVG/>,
    "delete": <DeleteSVG />
}

function TodoIcon(props){
    return (
        <span className={`icon-${props.type}`}>
            {iconTypes[props.type]}
        </span>
    );
}

export {TodoIcon}