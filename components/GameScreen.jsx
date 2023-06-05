"use client";
import Boxcomponent from "./Boxcomponent";
import MiddleBox from "./middleboxcomponent";
import Mainbox from "./mainboxcomponet";
import ButtonComponent from "./buttonComponent";
import style from "./gamescreen.module.css";
import Textboxcomponent from "./textboxcomponent";
import { useState } from "react";
import GenerateWord,{hasWord} from "../utils/word";

import { ToastContainer, toast } from 'react-toastify'


export default function GameScreen() {
  const [text, Settext]= useState("")
  const [generated_word, SetGeneratedWord]= useState({});
  const [counter, setCounter]= useState(0)

  function handle_word(){
  var output= GenerateWord(4)

    SetGeneratedWord(output)
  }
 function handleCheck(){
  if(hasWord(text)){
    toast.success("correct answer");
    Settext("");
  setCounter((prev_V)=>{return prev_V+ 1});
}
  else{
toast.error("wrong answer") 
  }
 }

      
  return (
    <div className={style.screen}>
       <ToastContainer/>
      <div className={style.topcomponent}>
        <div className={style.score}>
          <Boxcomponent display={`Score----${counter}`} />
        </div>
        <div className={style.timer}>
          <Boxcomponent display="Timer" />
        </div>
      </div>
      <div className={style.middlebox}>
        <Textboxcomponent output={generated_word.shuffle_word} />
      </div>
      <div className={style.secondbox}>
        <MiddleBox box={text}/>
      </div>
      <div className={style.lastbox}>
        <Mainbox>
          <ButtonComponent showtext={Settext} letter="A"/> 
          <ButtonComponent showtext={Settext} letter="B"/> 
          <ButtonComponent showtext={Settext} letter="C"/> 
          <ButtonComponent showtext={Settext} letter="D"/> 
          <ButtonComponent showtext={Settext} letter="E"/> 
          <ButtonComponent showtext={Settext} letter="F"/> 
          <ButtonComponent showtext={Settext} letter="G"/> 
          <ButtonComponent showtext={Settext}  letter="H"/> 
          <ButtonComponent showtext={Settext} letter="I"/> 
          <ButtonComponent showtext={Settext} letter="J"/> 
          <ButtonComponent showtext={Settext} letter="K"/> 
          <ButtonComponent showtext={Settext} letter="L"/> 
          <ButtonComponent showtext={Settext} letter="M"/> 
          <ButtonComponent showtext={Settext} letter="N"/> 
          <ButtonComponent showtext={Settext} letter="O"/> 
          <ButtonComponent showtext={Settext} letter="P"/> 
          <ButtonComponent showtext={Settext} letter="Q"/> 
          <ButtonComponent showtext={Settext} letter="R"/> 
          <ButtonComponent showtext={Settext} letter="S"/> 
          <ButtonComponent showtext={Settext} letter="T"/> 
          <ButtonComponent showtext={Settext} letter="U"/> 
          <ButtonComponent showtext={Settext} letter="V"/> 
          <ButtonComponent showtext={Settext} letter="W"/> 
          <ButtonComponent showtext={Settext} letter="X"/> 
          <ButtonComponent showtext={Settext} letter="Y"/> 
          <ButtonComponent showtext={Settext} letter="Z"/> 
        </Mainbox>
        
      </div>
      <div className={style.function}>
      <button className={style.clear} onClick={handleCheck}>Check word</button>
      <button className={style.clear} onClick={()=>{Settext("")}}>Clear</button>
      <button className={style.clear} onClick={handle_word}>Generate word</button>
      </div>
    
      
  
    </div>
  );
}
