"use client";

import { useState } from "react";
import style from "./button.module.css";


export default function ButtonComponent(props){
const [active, setActive]= useState(false);

    function handleClick(){
      setActive(!active);
        props.showtext(function(prev_value){
            return prev_value + props.letter

        });
    }
    return (
      <div className={style.button} onClick={handleClick} disabled={active}>
        <span>{props.letter}</span>
      </div>
    );
    
}