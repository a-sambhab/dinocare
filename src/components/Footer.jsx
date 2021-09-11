import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import { Facebook } from '@material-ui/icons';
import { Twitter } from '@material-ui/icons';
import '../css/Footer.css';

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="left-footer">

                    <div className="text-foolowus-footer">
                        <h2>Follow Us:</h2>
                    </div>

                    <div className="socialmedia-box-footer">
                        <div className="instagram-icon">
                        <InstagramIcon fontSize="large" color="primary"/> 
                        </div>
                        <div className="instagram-icon">
                        <Facebook fontSize="large" color="primary"/>
                        </div>
                        <div className="instagram-icon">
                        <Twitter fontSize="large" color="primary"/>
                        </div>
                    </div>

                    <div className="text-box-footer">
                        <h1>Made with ❤️ by Team Dinocare </h1>
                        <h1>© 2021 Dinocare - All rights reserved</h1>
                    </div>

                </div>

                <div className="right-footer">
                    <div>
                        <img className="image-dinofooter" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631305742/DINOCARE/dinosaur-icon-12_ppapaq.png" alt=""/>
                    </div>
                </div>

            </div>
        </div>
    )
}
