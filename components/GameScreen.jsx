"use client";
import Boxcomponent from "./Boxcomponent";
import MiddleBox from "./middleboxcomponent";
import Mainbox from "./mainboxcomponet";
import ButtonComponent from "./buttonComponent";
import style from "./gamescreen.module.css";
import Textboxcomponent from "./textboxcomponent";
import { useState } from "react";
import GenerateWord,{hasWord, IsinArray, shuffleWord} from "../utils/word";

import { ToastContainer, toast } from 'react-toastify'


export default function GameScreen() {
  const [text, Settext]= useState("")
  const [generated_word, SetGeneratedWord]= useState({});
  const [counter, setCounter]= useState(0)
  const [clear, SetClear]= useState(true)
  const [listofLetters, SetListofLetters]= useState()
  const [listofWords, SetlistofWords]= useState()

  function handle_word(){
  var output= GenerateWord(4)

    SetGeneratedWord(output)
  }
 function handleCheck(){
  if(hasWord(text)){
    if (!IsinArray(text, listofWords)){
      SetlistofWords([...listofWords, text]);
      toast.success("correct answer");
      handleClear();
    setCounter((prev_V)=>{return prev_V+ 1});
    }
     
  else{
toast.error("word already exists") 
  }}
else{
    toast.error("wrong answer")
 }
}
const letterComponents= listofLetters.map((letter, index)=>(
  <ButtonComponent key={index} showtext={Settext} letter={letter.toUppercase()}/> 
));
function handleClear(){
  Settext("");
  SetClear(!clear);
}
const wordComponents= listofWords.map(word, index)=>(
  <span key={index} className={style.word}>{word}</span>
);
      
  return (
    <div className={styles.row}>
    <div className={styles.wordList}>{wordComponents}</div>
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
      {/* <div className={style.middlebox}>
        <Textboxcomponent output={generated_word.shuffle_word} />
      </div> */}
      <div className={style.secondbox}>
        <MiddleBox box={text}/>
      </div>
      <div className={style.lastbox}>
        <Mainbox>
          {clear ? letterComponents: <div>{letterComponents}</div>}
          {/* <ButtonComponent showtext={Settext} letter="A"/>  */}
          
        </Mainbox>
        
      </div>
      <div className={style.function}>
      <button className={style.clear} onClick={handleCheck}>Check word</button>
      <button className={style.clear} onClick={handleClear}>Clear</button>
      <button className={style.clear} onClick={()=>{
        const newword= GenerateWord(4)
        SetListofLetters([...newword.shuffle_word]);
      }}>Generate word</button>
      </div>
    
      
  
    </div>
    </div>
  );
}
