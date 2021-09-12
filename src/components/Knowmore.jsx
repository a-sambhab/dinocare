import React from 'react';
import '../css/Knowmore.css'
 
const dataKnowCard=[

  {
    image: "https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365351/DINOCARE/dino_1_g1gsoc.png"
  },

  {
    image: "https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365350/DINOCARE/dino_7_ejymbj.png"
  },

  {
    image: "https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365349/DINOCARE/dino_4_tm0bwy.png"
    
  },

  {
    image: "https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365349/DINOCARE/dino_5_rd7jti.png"
  },

  {
    image: "https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365349/DINOCARE/dino_6_u2fqc4.png"
  },

  {
    image: "https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365349/DINOCARE/dino_2_vkpv9j.png"
  },

  {
    image: "https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365348/DINOCARE/dino_bj428g.png"
  },

  {
    image: "https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631365349/DINOCARE/dino_8_w75cuz.png"
  },
]



const KnowCard = (props) => {
    return(
      <div className="knowcard">
              <div className="imagesection_knowcard">
                <img className="image_knowcard" src={props.image} alt=""/>
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
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
    )
}
