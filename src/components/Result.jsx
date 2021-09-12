import React from 'react';
import './result.css'

var Dino = [
    {
        name:"brachiosaurus",
        imgsrc:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365351/DINOCARE/dino_1_g1gsoc.png",
        trait:"Slow, friendly",
        fatal:"tend to not being able to distinguish foes",
        improv:"know the difference from docile and coward : a brachiosaurus is not a coward"       
    },
    {
        name:"Tyrannosaurus x",
        imgsrc:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365349/DINOCARE/dino_2_vkpv9j.png",
        trait:"gentle, kind, and caring",
        fatal:"absent-minded and tends to cause accidental mayhem",
        improv:"no matter how the world perceives you stay true to your"       
    },
    {
        name:"Velociraptor",
        imgsrc:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365349/DINOCARE/dino_6_u2fqc4.png",
        trait:"quick on your feet, smart and goal-driven",
        fatal:"temper switches with the drop of a hat",
        improv:"have to be smart enough to not let things go out of your hand"       
    },
    {
        name:"Stegosaurus",
        imgsrc:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365349/DINOCARE/dino_5_rd7jti.png",
        trait:"peaceful when not provoked",
        fatal:"a bit more lazy than acceptable",
        improv:"adopt larger than life personality easy-going"       
    },
    {
        name:"Parasaurolophus",
        imgsrc:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365350/DINOCARE/dino_7_ejymbj.png",
        trait:" Highly sociable, with large herds",
        fatal:"sometimes thrown out of there own herd",
        improv:"should try to be self-sufficient"       
    },
]


export default function Result(dinoind) {
    // let dinoname=Dino[dinoind].name
    // let dinoindex=dinoind;
    // console.log(Dino[dinoind.dinoind].name);
    return (
        <div id="result">
            <div className="reslefttext">
                know your dino
            </div>
            <div className="rescard">
                <img className="rescard_image" src={Dino[dinoind.dinoind].imgsrc} alt="dinoicon"/>
                <h2>{Dino[dinoind.dinoind].name}</h2>
                <span>Trait: <p> {Dino[dinoind.dinoind].trait}</p></span> 
                
                <div className="personbox">
                    <div className="fatalbox">
                        <h3>Fatal flaw</h3>
                        <span>
                            {Dino[dinoind.dinoind].fatal}
                        </span>
                    </div>
                    <div className="improvbox">
                        <h3>Imporvement</h3>
                        <span>{Dino[dinoind.dinoind].improv}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
