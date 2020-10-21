import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Me from "../assets/img/Projects/Inv.PNG";
import Caeli from "../assets/img/Projects/caeli.PNG";
import Urban from "../assets/img/Projects/urban.PNG";
import Fairfields from "../assets/img/Projects/fairfields.PNG";

class Projects extends Component {
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
                  Projects
                </h1>
                <div className="container">
                  <section class="pricing py-5">
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-4">
                          <div class="card mb-5 mb-lg-0">
                            <div class="card-body">
                              <h5 class="card-title text-uppercase text-center">
                                Inventory System
                              </h5>
                              <img
                                src={Me}
                                className="rounded img-fluid"
                                alt="inventory system"
                              ></img>
                              <hr></hr>
                              <p>
                                Dynamic Inventory System with tracking and QR
                                Code features
                              </p>
                              <h5>Tool used:</h5>
                              <ul className="list-group">
                                <li className="list-group-item">HTML & CSS</li>
                                <li className="list-group-item">Bootstrap</li>
                                <li className="list-group-item">JQuery</li>
                                <li className="list-group-item">PHP</li>
                              </ul>
                              <a
                                class="btn btn-block btn-secondary text-uppercase"
                                href="/#"
                              >
                                View on GitHub
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="card mb-5 mb-lg-0">
                            <div class="card-body">
                              <h5 class="card-title  text-uppercase text-center">
                                Caeli Sea Resort Hotel Reservation and Billing
                                System
                              </h5>
                              <img
                                src={Caeli}
                                className="rounded img-fluid"
                                alt="Hotel and reservation billing system"
                              ></img>
                              <hr></hr>
                              <p>
                                Dynamic versatile features required to run
                                hotels guest house business. The system has
                                facility to generate report for analyzes your
                                booking, checking and checkout status.
                              </p>
                              <h5>Tool used:</h5>
                              <ul className="list-group">
                                <li className="list-group-item">HTML & CSS</li>
                                <li className="list-group-item">Bootstrap</li>
                                <li className="list-group-item">JQuery</li>
                                <li className="list-group-item">PHP</li>
                              </ul>
                              <a
                                class="btn btn-block btn-secondary text-uppercase"
                                href="/#"
                              >
                                View on GitHub
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="card mb-5 mb-lg-0">
                            <div class="card-body">
                              <h5 class="card-title  text-uppercase text-center">
                                Dictionary of UrbanDictionary
                              </h5>
                              <img
                                src={Urban}
                                className="rounded img-fluid"
                                alt="Urban Dictionary"
                              ></img>
                              <hr></hr>
                              <p>
                                Dynamic Inventory System with tracking and QR
                                Code features
                              </p>
                              <h5>Tool used:</h5>
                              <ul className="list-group">
                                <li className="list-group-item">React JS</li>
                                <li className="list-group-item">REST API</li>
                              </ul>
                              <a
                                class="btn btn-block btn-secondary text-uppercase"
                                href="/#"
                              >
                                View on GitHub
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="card mb-5 mb-lg-0">
                            <div class="card-body">
                              <h5 class="card-title  text-uppercase text-center">
                                Fairfields Resort Hotel Reservation and Billing
                                System
                              </h5>
                              <img
                                src={Fairfields}
                                className="rounded img-fluid"
                                alt="Fairfields Resort"
                              ></img>
                              <hr></hr>
                              <p>
                                Dynamic Inventory System with tracking and QR
                                Code features
                              </p>
                              <h5>Tool used:</h5>
                              <ul className="list-group">
                                <li className="list-group-item">HTML & CSS</li>
                                <li className="list-group-item">Bootstrap</li>
                                <li className="list-group-item">JQuery</li>
                                <li className="list-group-item">PHP</li>
                              </ul>
                              <a
                                class="btn btn-block btn-secondary text-uppercase"
                                href="/#"
                              >
                                View on GitHub
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
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

export default Projects;
