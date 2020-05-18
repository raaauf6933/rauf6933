import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Me from "../assets/img/Projects/Inv.PNG";
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
                              <h5 class="card-title text-muted text-uppercase text-center">
                                Inventory System
                              </h5>
                              <img src={Me} className="rounded img-fluid"></img>
                              <hr></hr>
                              <ul class="fa-ul">
                                <li>
                                  <span class="fa-li">
                                    <i class="fas fa-check"></i>
                                  </span>
                                  Single User
                                </li>
                                <li>
                                  <span class="fa-li">
                                    <i class="fas fa-check"></i>
                                  </span>
                                  5GB Storage
                                </li>
                                <li>
                                  <span class="fa-li">
                                    <i class="fas fa-check"></i>
                                  </span>
                                  Unlimited Public Projects
                                </li>
                                <li>
                                  <span class="fa-li">
                                    <i class="fas fa-check"></i>
                                  </span>
                                  Community Access
                                </li>
                                <li class="text-muted">
                                  <span class="fa-li">
                                    <i class="fas fa-times"></i>
                                  </span>
                                  Unlimited Private Projects
                                </li>
                                <li class="text-muted">
                                  <span class="fa-li">
                                    <i class="fas fa-times"></i>
                                  </span>
                                  Dedicated Phone Support
                                </li>
                                <li class="text-muted">
                                  <span class="fa-li">
                                    <i class="fas fa-times"></i>
                                  </span>
                                  Free Subdomain
                                </li>
                                <li class="text-muted">
                                  <span class="fa-li">
                                    <i class="fas fa-times"></i>
                                  </span>
                                  Monthly Status Reports
                                </li>
                              </ul>
                              <a
                                href="#"
                                class="btn btn-block btn-dark text-uppercase"
                              >
                                View on GitHub
                              </a>
                              <a
                                href="#"
                                class="btn btn-block btn-success text-uppercase"
                              >
                                View Live Demo
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
