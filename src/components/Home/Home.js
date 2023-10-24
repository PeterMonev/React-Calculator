import "../Home/Home.css";

export const Home = () => {
  return (
    <section>
      <article className="calculator">
        <div className="display">{}</div>
        <section className="section__button">
          <button value="(" id="leftBrackets">
            (
          </button>
          <button value=")" id="rightBrackets">
            )
          </button>
          <button value=" % " id="percentage">
            %
          </button>
          <button value="CE" id="divide" className="commands">
            CE
          </button>
          

          <button value="7" id="number7">
            7
          </button>
          <button value="8" id="number8">
            8
          </button>
          <button value="9" id="number9">
            9
          </button>
          <button value=" / " id="divide" className="operations">
            &divide;
          </button>

          <button value="4" id="number4">
            4
          </button>
          <button value="5" id="number5">
            5
          </button>
          <button value="6" id="number6">
            6
          </button>
          <button value=" * " id="mult" className="operations">
            x
          </button>

          <button value="1" id="number1">
            1
          </button>
          <button value="2" id="number2">
            2
          </button>
          <button value="3" id="number3">
            3
          </button>
          <button value=" - " id="sub" className="operations">
            -
          </button>

          <button value="." id="dot">
            .
          </button>
          <button value="0" id="number0">
            0
          </button>
          <button value=" = " id="result">
            =
          </button>
          <button value=" + " id="sum" className="operations">
            +
          </button>
        </section>
      </article>
    </section>
  );
};
