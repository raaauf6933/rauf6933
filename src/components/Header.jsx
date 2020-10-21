import React, { Component } from "react";
import Me from "../assets/img/meee.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row personal-profile">
            <div className="col-md-4  personal-profile__avatar">
              <img className="img-me" src={Me} alt="avatar"></img>
            </div>
            <div className="col-md-8">
              <p className="text-center personal-profile__name">
                Rauf Dimaampao
              </p>
              {/*<p class="text-center personal-profile__work">
                Junior Software Developer
    </p> */}
              <div className="personal-profile__contacts">
                <dl className="contact-list contact-list__opacity-titles">
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
              <p className="text-center personal-profile__social">
                <a
                  href="https://www.linkedin.com/in/rauf-dimaampao/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    color="#0e1111"
                    size="lg"
                    style={{ opacity: "0.7" }}
                  />
                </a>
                <a
                  href="https://github.com/raaauf6933"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    color="#0e1111"
                    size="lg"
                    style={{ opacity: "0.7" }}
                  />
                </a>
                <a
                  href="https://www.facebook.com/RAAAUF6933"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    color="#0e1111"
                    size="lg"
                    style={{ opacity: "0.7" }}
                  />
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
