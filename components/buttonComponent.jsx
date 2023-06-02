"use client";

import style from "./button.module.css";


export default function ButtonComponent(props){
    function handleClick(){
        props.showtext(function(prev_value){
            return prev_value + props.letter

        });
    }
    return (
      <div className={style.button} onClick={handleClick}>
        <span>{props.letter}</span>
      </div>
    );
    
}