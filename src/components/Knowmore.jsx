import React from 'react';
import '../css/Knowmore.css'
 
const dataKnowCard=[

  {
    h1: "BRACHIOSAURUS",
    image: "https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365351/DINOCARE/dino_1_g1gsoc.png"
  },

  {
    h1: "PARASAUROLOPHUS",
    image: "https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365350/DINOCARE/dino_7_ejymbj.png"
  },

  {
    h1: "Tanystropheus",
    image: "https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365349/DINOCARE/dino_4_tm0bwy.png"
    
  },

  {
    h1: "STEGOSAURUS",
    image: "https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365349/DINOCARE/dino_5_rd7jti.png"
  },

  {
    h1: "VELOCIRAPTOR",
    image: "https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365349/DINOCARE/dino_6_u2fqc4.png"
  },

  {
    h1: "TYRANNOSAURUS X",
    image: "https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365349/DINOCARE/dino_2_vkpv9j.png"
  },

  {
    h1: "archaeopteryx",
    image: "https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365348/DINOCARE/dino_bj428g.png"
  },

  {
    h1: "Spinosaurus",
    image: "https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365349/DINOCARE/dino_8_w75cuz.png"
  },
]



const KnowCard = (props) => {
    return(
      <div className="knowcard">
            <div className="knowcard-inner">
              <div className="imagesection_knowcard">
                <img className="image_knowcard" src={props.image} alt=""/>
              </div>
              <div class="knowcard-back">
                <h1>{props.h1}</h1>
              
              </div>
            </div>
      </div>
          
    )
}

export default function Knowmore() {
    return (
        <div>
            <div className="knowmore_section">
              <div className="heading_knowmore_section"><h1>Know More Dinos</h1></div>
              <div className="knowcards_section">
                <div className="knowcard_cards">
                    {dataKnowCard.map(function knowcard(val){
                      return(
                        <KnowCard 
                          image={val.image}
                          h1={val.h1}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
    )
}
