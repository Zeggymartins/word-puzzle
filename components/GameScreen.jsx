"use client";
import Boxcomponent from "./Boxcomponent";
import MiddleBox from "./middleboxcomponent";
import Mainbox from "./mainboxcomponet";
import ButtonComponent from "./buttonComponent";
import styles from "./gamescreen.module.css";
// also remember to fix the style to styles, and trace all where you were using style and fixed it as well

import Textboxcomponent from "./textboxcomponent";
import { useState } from "react";
import GenerateWord, { hasWord, IsinArray, shuffleWord } from "../utils/word";

import { ToastContainer, toast } from "react-toastify";

export default function GameScreen() {
  const [text, Settext] = useState("");
  const [generated_word, SetGeneratedWord] = useState({});
  const [counter, setCounter] = useState(0);
  const [clear, SetClear] = useState(true);
  const [listofLetters, SetListofLetters] = useState([]); //initialize the state to array
  const [listofWords, SetlistofWords] = useState([]); // initialize the state to array

  function handle_word() {
    var output = GenerateWord(4);

    SetGeneratedWord(output);
  }
  function handleCheck() {
    if (hasWord(text)) {
      if (!IsinArray(text, listofWords)) {
        SetlistofWords([...listofWords, text]);
        toast.success("correct answer");
        handleClear();
        setCounter((prev_V) => {
          return prev_V + 1;
        });
      } else {
        toast.error("word already exists");
      }
    } else {
      toast.error("wrong answer");
    }
  }
  const letterComponents = listofLetters.map((letter, index) => {
    // change the bracket () here to a curly brace {}
    <ButtonComponent
      key={index}
      showtext={Settext}
      letter={letter.toUppercase()}
    />;
  });
  function handleClear() {
    Settext("");
    SetClear(!clear);
  }
  const wordComponents = listofWords.map((word, index) => {
    // change the bracket () here to a curly brace {}
    // also corrected the syntax here
    <span key={index} className={styles.word}>
      {word}
    </span>;
  });

  return (
    <div className={styles.row}>
      <div className={styles.wordList}>{wordComponents}</div>
      <div className={styles.screen}>
        <ToastContainer />
        <div className={styles.topcomponent}>
          <div className={styles.score}>
            <Boxcomponent display={`Score----${counter}`} />
          </div>
          <div className={styles.timer}>
            <Boxcomponent display="Timer" />
          </div>
        </div>
        {/* <div className={styles.middlebox}>
        <Textboxcomponent output={generated_word.shuffle_word} />
      </div> */}
        <div className={styles.secondbox}>
          <MiddleBox box={text} />
        </div>
        <div className={styles.lastbox}>
          <Mainbox>
            {clear ? letterComponents : <div>{letterComponents}</div>}
            {/* <ButtonComponent showtext={Settext} letter="A"/>  */}
          </Mainbox>
        </div>
        <div className={styles.function}>
          <button className={styles.clear} onClick={handleCheck}>
            Check word
          </button>
          <button className={styles.clear} onClick={handleClear}>
            Clear
          </button>
          <button
            className={styles.clear}
            onClick={() => {
              const newword = GenerateWord(4);
              SetListofLetters([...newword.shuffle_word]);
            }}
          >
            Generate word
          </button>
        </div>
      </div>
    </div>
  );
}
