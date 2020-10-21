import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Mta from "../assets/img/Badge/mta.png";

class Badge extends Component {
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
                  Badge_
                </h1>
                <div className="container">
                  <blockquote className="blockquote">
                    <div className="row">
                      <div className="col-md-12 col-lg-12">
                        <div className="school">
                          {" "}
                          <p className="school-name">
                            <img
                              src={Mta}
                              className="img-badge"
                              alt="MTA"
                            ></img>{" "}
                            <a
                              href="https://www.youracclaim.com/badges/a3e2dcdd-9e75-4f22-9b21-fc8789e775aa/linked_in_profile"
                              target="_blank"
                              style={{ color: "black" }}
                              rel="noopener noreferrer"
                            >
                              {" "}
                              MTA: Introduction to Programming Using JavaScript
                              - Certified 2020
                            </a>
                          </p>
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

export default Badge;
