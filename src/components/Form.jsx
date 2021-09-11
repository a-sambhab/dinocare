import React from 'react'

export default function Form(props) {
    // const [Dinoinfo, setDinoinfo] = useState(-1);
    const sendid = () => {
        var rd1 = document.getElementById('huey');
        var rd2 = document.getElementById('dewey');
        var rd3 = document.getElementById('louie');
        if(rd1.checked===true){
            props.passnote(0);
        } else if(rd2.checked===true){
            props.passnote(1);
        } else if(rd3.checked===true){
            props.passnote(2);
        } else {
            alert("no button is choose")
        }
    }
    return (
        <div>
            <p>Select a maintenance drone:</p>

            <div>
            <input type="radio" id="huey" name="drone" value="huey"/>
            <label for="huey">Huey</label>
            </div>

            <div>
            <input type="radio" id="dewey" name="drone" value="dewey" />
            <label for="dewey">Dewey</label>
            </div>

            <div>
            <input type="radio" id="louie" name="drone" value="louie" />
            <label for="louie">Louie</label>
            </div>
        <input onClick={sendid} type="submit"/>
        </div>
    )
}