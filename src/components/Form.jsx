import React from "react";
import "./Form.css";

export default function Form(props) {
  // const [Dinoinfo, setDinoinfo] = useState(-1);
  const sendid = () => {
    var rd1 = document.getElementById("huey");
    var rd2 = document.getElementById("dewey");
    var rd3 = document.getElementById("louie");
    var rd4 = document.getElementById("yallaa");
    var rd5 = document.getElementById("habibii");
    if (rd1.checked === true) {
      props.passnote(0);
    } else if (rd2.checked === true) {
      props.passnote(1);
    } else if (rd3.checked === true) {
      props.passnote(2);
    } else if (rd4.checked === true) {
      props.passnote(3);
    } else if (rd5.checked === true) {
      props.passnote(4);
    } else {
      alert("no button is choose");
    }
  };
  return (
    <div id="forms">
      <div className="upperText">
        <h1>PERSONALITY</h1>
      </div>
      <div className="innerDabba">
        <div className="questions">
          <p>Select a maintenance drone:</p>

          <div className="opts">
            <input type="radio" id="huey" name="drone" value="huey" />
            <label for="huey">Huey</label>
          </div>

          <div className="opts">
            <input type="radio" id="dewey" name="drone" value="dewey" />
            <label for="dewey">Dewey</label>
          </div>

          <div className="opts">
            <input type="radio" id="louie" name="drone" value="louie" />
            <label for="louie">Louie</label>
          </div>

          <div className="opts">
            <input type="radio" id="yallaa" name="drone" value="louie" />
            <label for="yallaa">Yallaa</label>
          </div>

          <div className="opts">
            <input type="radio" id="habibii" name="drone" value="louie" />
            <label for="habibii">Habibii</label>
          </div>
          <div className="btns">
            <button>Next</button>
            <button>Previous</button>
            <input onClick={sendid} type="submit" />
          </div>
        </div>
      </div>
      <div className="quesimg">
        {" "}
        <img
          src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631305497/DINOCARE/dinosaur-icon-27-removebg-preview_xd2q4s.png"
          className="dino-img"
          srcset=""
          alt="aboutdino"
        />
      </div>
    </div>
  );
}
