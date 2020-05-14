import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Hi extends Component {
  state = {};

  render() {
    return (
      <div>
        <Fade bottom>
          <section id="#hello" className="container section1">
            <div className="row">
              <div className="col-md-12 ">
                <h1
                  className="section__title m-5"
                  style={{ textIndent: "0px", fontWeight: "bolder" }}
                >
                  Hi_
                </h1>
                <div className="container m-5">
                  <p className="section__description">
                    I am Junior Web developer able to build a Web presence from
                    the ground up - from concept, navigation, layout and
                    programming to UX and SEO. Skilled at writing well-designed,
                    testable and efficient code using current best practices in
                    Web development. Fast learner, hard worker and team player
                    who is proficient in an array of scripting languages and
                    multimedia Web tools.
                  </p>

                  <a href="" className="section_btn site-btn">
                    <img src="assets/img/img_btn_icon.png" alt=""></img>Download
                    CV
                  </a>
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

export default Hi;
