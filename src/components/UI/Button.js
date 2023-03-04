import React from "react";
const Button = (props)=>{
    return <button onClick={props.onClick} className={props.class} disabled={props.disabled}>{props.text}</button>
}

export default React.memo(Button);