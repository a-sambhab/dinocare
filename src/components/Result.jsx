import React, {useState} from 'react'

var Dino = [
    {
        name:"neeraj",
        place:"home"
    },
    {
        name:"harsh",
        place:"home"
    },
    {
        name:"sai",
        place:"home"
    },
    {
        name:"shatanu",
        place:"home"
    }
]


export default function Result(props) {
    // const [Dinoinfo, setDinoinfo] = useState(0);
    // setDinoinfo(props.dinoind);
    console.log([props.dinoind])
    return (
        <div>
            <h1>
                {/* {Dino[props.dinoind].name} */}
                Result
            </h1>
        </div>
    )
}
