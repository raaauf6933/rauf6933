import React, { Component } from 'react';
import Me from "../assets/img/me.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faFacebook} from "@fortawesome/free-brands-svg-icons";

class Header extends Component {
    state = {  }
    render() { 
        return (      
        <div className="header">
        <div className="container">
          <div className="row personal-profile">
            <div class="col-md-6  personal-profile__avatar">
              <img class="img-me" src={Me} alt="avatar"></img>
            </div>
            <div class="col-md-6">
              <p class="text-center personal-profile__name">Abdul Rauf Dimaampao</p>
              <p class="text-center personal-profile__work">
                Junior Software/Web Developer
              </p>
              <div class="personal-profile__contacts">
                <dl class="contact-list contact-list__opacity-titles">
                  <dt className="">Phone:</dt>
                  <dd>
                    <a href="tel:639472454073">(63) 947 2454 073</a>
                  </dd>
                  <dt>Email:</dt>
                  <dd>
                    <a href="mailto:6933rauf@gmail.com">6933rauf@gmail.com</a>
                  </dd>
                  <dt>Address:</dt>
                  <dd>Manila, PH</dd>
                </dl>
              </div>
              <p class="text-center personal-profile__social">
                <a href="" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} color="#0e1111" size="lg" style={{opacity: "0.7"}} />
                </a>
                <a href="" target="_blank">
                <FontAwesomeIcon icon={faGithub} color="#0e1111" size="lg" style={{opacity: "0.7"}} />
                </a>
                <a href="" target="_blank">
                <FontAwesomeIcon icon={faFacebook} color="#0e1111" size="lg" style={{opacity: "0.7"}} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div> 
   
     
      );
    }
}
 
export default Header;