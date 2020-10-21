import React, { Component } from "react";
import Fade from "react-reveal/Fade"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCircle } from "@fortawesome/free-solid-svg-icons";

import Ue from "../assets/img/ue.png"
import Nfhs from "../assets/img/nfhs.png"

class Resume extends Component {
  state = {};
  render() {
    return (
      <div>
        <Fade bottom>
          <section id="hello" className="container section2">
            <div className="row">
              <div className="col-md-12 ">
                <h1
                  className="section2__title"
                  style={{ textIndent: "0px", fontWeight: "bolder" }}
                >
                  About me_
                </h1>
                <div className="container">
                  <p className="section2__description"></p>
                  <p className="h3 text-dark">EDUCATION</p>
                  <blockquote className="blockquote">
                    <div className="row">
                      <div className="col-md-6 col-lg-6">
                        <div className="school">
                          {" "}
                          <p className="school-name">
                            <img src={Ue} className="img-school" alt="University Of the East"></img>
                            {/*<FontAwesomeIcon
                              icon={faCircle}
                              color="#0e1111"
                              size="lg"
                            />{" "} */}
                            UNIVERSITY OF THE EAST
                          </p>
                          <p className="sub-text">
                            - BS Information Technology
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <div className="school">
                          <h5>June 2015 - 2020</h5>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 mb-5">
                        <p className="school-name">
                          <img src={Nfhs} className="img-school" alt="North Fairview Highschool"></img>
                         {/*} <FontAwesomeIcon
                            icon={faCircle}
                            color="#0e1111"
                            size="lg"
                          />{" "} */}
                          NORTH FAIRVIEW HIGHSCHOOL
                        </p>
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <div className="school">
                          <h5>2011 - 2015</h5>
                        </div>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
            <hr></hr>
          </section>
        </Fade>
      </div>
    );
  }
}

export default Resume;
