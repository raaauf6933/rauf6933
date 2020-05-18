import React, { Component } from "react";

class Hi extends Component {
  state = {};

  render() {
    return (
      <div>
      
          <section id="#hello" className="container section1">
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
                    I am Junior Software/Web developer who is able to build 
                    web applications from concept,
                    navigation, layout. Skilled at writing well-designed
                    testable and efficient code using current best practices in Web development. 
                  </p>

                  <a href="" className="section_btn site-btn">
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
