import React, { Component } from "react";
import Fade from "react-reveal/Fade";



//Skill_Logo
import Html from "../assets/img/Icons/html.png"
import Js from "../assets/img/Icons/js.png"
import Bootstrap from "../assets/img/Icons/bootstrap.png"
import JQuery from "../assets/img/Icons/jquery.png"
import Php from "../assets/img/Icons/php.png"
import Python from "../assets/img/Icons/python.png"
import Reactjs from "../assets/img/Icons/reactjs.png"
import Node from "../assets/img/Icons/nodejs.png"
import MongoDB from "../assets/img/Icons/mongodb.png"
import Sql from "../assets/img/Icons/sql.png"
import Mssql from "../assets/img/Icons/mssql.png"
import Network from "../assets/img/Icons/network.png"


class Skills extends Component {
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
                  Skills_
                </h1>
                <div className="container m-5">
                  <blockquote className="blockquote">
                    <div className="row">
                      <div className="col-md-6 col-lg-4">
                        <div className="school">
                          {" "}
                          <p className="school-name">
                          <img src={Html} className="img-skill"></img>
                           HTML with CSS
                          </p>
                          <p className="sub-text">- Intermediate Level</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="school">
                          {" "}
                          <p className="school-name">
                          <img src={Js} className="img-skill"></img>
                           JavaScript
                          </p>
                          <p className="sub-text">- Intermediate Level</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="school">
                          {" "}
                          <p className="school-name">
                          <img src={Bootstrap} className="img-skill"></img>
                            Bootstrap
                          </p>
                          <p className="sub-text">- Intermidiate Level</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="school">
                          {" "}
                          <p className="school-name">
                          <img src={JQuery} className="img-skill"></img>
                            JQuery
                          </p>
                          <p className="sub-text">- Intermidiate Level</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="school">
                          {" "}
                          <p className="school-name">
                          <img src={Php} className="img-skill"></img>
                            PHP
                          </p>
                          <p className="sub-text">- Intermidiate Level</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="school">
                          {" "}
                          <p className="school-name">
                          <img src={Python} className="img-skill"></img>
                            Python
                          </p>
                          <p className="sub-text">- Novice Level</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="school">
                          {" "}
                          <p className="school-name">
                          <img src={Reactjs} className="img-skill"></img>
                            ReactJS
                          </p>
                          <p className="sub-text">- Intermidiate Level</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="school">
                          {" "}
                          <p className="school-name">
                          <img src={Node} className="img-skill"></img>
                            NodeJS with Express
                          </p>
                          <p className="sub-text">- Novice Level</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="school">
                          {" "}
                          <p className="school-name">
                          <img src={MongoDB} className="img-skill"></img>
                            MongoDB
                          </p>
                          <p className="sub-text">- Novice Level</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="school">
                          {" "}
                          <p className="school-name">
                          <img src={Sql} className="img-skill"></img>
                            SQL Database
                          </p>
                          <p className="sub-text">- Intermidiate Level</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="school">
                          {" "}
                          <p className="school-name">
                          <img src={Mssql} className="img-skill"></img>
                            MS SQL Server
                          </p>
                          <p className="sub-text">- Intermidiate Level</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="school">
                          {" "}
                          <p className="school-name">
                          <img src={Network} className="img-skill"></img>
                            Computer Networking
                          </p>
                          <p className="sub-text">- Intermidiate Level</p>
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

export default Skills;
