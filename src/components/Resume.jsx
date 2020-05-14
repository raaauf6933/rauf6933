import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
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
                  className="section2__title m-5"
                  style={{ textIndent: "0px", fontWeight: "bolder" }}
                >
                  Résumé_
                </h1>
                <div className="container m-5">
                  <p className="section2__description">
                    I am Junior Web developer able to build a Web presence from
                    the ground up - from concept, navigation, layout and
                    programming to UX and SEO. Skilled at writing well-designed,
                    testable and efficient code using current best practices in
                    Web development. Fast learner, hard worker and team player
                    who is proficient in an array of scripting languages and
                    multimedia Web tools.
                  </p>
                  <p className="h3 text-dark">EDUCATION</p>
                  <blockquote className="blockquote">
                    <div className="row">
                      <div className="col-md-6 col-lg-6">
                        <div className="school">
                          {" "}
                          <p className="school-name">
                            <FontAwesomeIcon
                              icon={faCircle}
                              color="#0e1111"
                              size="lg"
                            />{" "}
                            UNIVERSITY OF THE EAST
                          </p>
                          <p className="sub-text">BS Information Technology</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <div className="school">
                          <h5>June 2015 - Present</h5>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 mb-5">
                        <p className="school-name">
                          <FontAwesomeIcon
                            icon={faCircle}
                            color="#0e1111"
                            size="lg"
                          />{" "}
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
