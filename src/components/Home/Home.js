import React, { useState } from 'react';
import '../Home/Home.css';

export const Home = () => {
  const [input, setInput] = useState("");
  const [sound, setSound] = useState("true");

  const handleButtonClick = (value) => {

    if(sound){
      playSound();
    } 
 
    switch (value.trim()) {
      case "CE":
        setInput("");
        break;
      case "=":
        try {
          setInput(eval(input).toString());
        } catch (error) {
          setInput("Error");
        }
        break;
      case "%":
        try {
          let percentageValue = eval(input) / 100;
          setInput(percentageValue.toString());
        } catch (error) {
          setInput("Error");
        }  
      default:
        setInput(prevInput => prevInput + value.trim()); 
        break;
    }
  };

  const VolumeOn = () => {
  
     if(sound){
       setSound(false);
     } else {
       setSound(true);
     }
  }

  const playSound = () => {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const osc = context.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(332, context.currentTime); 
    osc.duration = 0.1;
  
    osc.connect(context.destination);
    osc.start();
    osc.stop(context.currentTime + 0.1);
  };
  

  return (
    <section>
      <article className="calculator">
        <div className="display">{input}</div>
        <section className="section__button">
          <button value="(" id="leftBrackets" onClick={() => handleButtonClick("(")}> ( </button>
          <button value=")" id="rightBrackets" onClick={() => handleButtonClick(")")}> ) </button>
          <button value=" % " id="percentage" onClick={() => handleButtonClick("%")}> % </button>
          <button value="CE" id="divide" className="commands" onClick={() => handleButtonClick("CE")}> CE </button>

          <button value="7" id="number7" onClick={() => handleButtonClick("7")}> 7 </button>
          <button value="8" id="number8" onClick={() => handleButtonClick("8")}> 8 </button>
          <button value="9" id="number9" onClick={() => handleButtonClick("9")}> 9 </button>
          <button value=" / " id="divide" className="operations" onClick={() => handleButtonClick("/")}> &divide; </button>

          <button value="4" id="number4" onClick={() => handleButtonClick("4")}> 4 </button>
          <button value="5" id="number5" onClick={() => handleButtonClick("5")}> 5 </button>
          <button value="6" id="number6" onClick={() => handleButtonClick("6")}> 6 </button>
          <button value=" * " id="mult" className="operations" onClick={() => handleButtonClick("*")}> x </button>

          <button value="1" id="number1" onClick={() => handleButtonClick("1")}> 1 </button>
          <button value="2" id="number2" onClick={() => handleButtonClick("2")}> 2 </button>
          <button value="3" id="number3" onClick={() => handleButtonClick("3")}> 3 </button>
          <button value=" - " id="sub" className="operations" onClick={() => handleButtonClick("-")}> - </button>

          <button value="." id="dot" onClick={() => handleButtonClick(".")}> . </button>
          <button value="0" id="number0" onClick={() => handleButtonClick("0")}> 0 </button>
          <button value=" = " id="result" onClick={() => handleButtonClick("=")}> = </button>
          <button value=" + " id="sum" className="operations" onClick={() => handleButtonClick("+")}> + </button>

          <i onClick={VolumeOn} className="fa-solid fa-volume-high " style={{ color: sound ? 'greenyellow' : 'red'}} ></i>

        </section>

      </article>
     

 
    </section>
  );
};
