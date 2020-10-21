import React, { Component } from "react";

class Hi extends Component {
  state = {};

  render() {
    return (
      <div>
      
          <section name="hi" className="container section1">
            <div className="row">
              <div className="col-md-12 ">
                <h1
                  className="section__title"
                  style={{ textIndent: "0px", fontWeight: "bolder" }}
                >
                  Hi_
                </h1>
                <div className="container">
                  <p className="section__description">
                  I am an aspiring Software developer who is able to build applications 
                  on both web and mobile application from concept, navigation, layout. 
                  Skilled at writing well-designed testable and efficient code 
                  using current best practices in application development. 
                  </p>

                  <a className="section_btn site-btn" href="/#">
                   Download CV
                  </a>
                </div>
              </div>
            </div>
            <hr></hr>
          </section>
        
      </div>
    );
  }
}

export default Hi;
