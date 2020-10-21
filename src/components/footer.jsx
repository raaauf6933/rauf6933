import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <h1
                className="section2__title m-5"
                style={{ textIndent: "0px", fontWeight: "bolder", color: "white" }}
              >
                Get in Touch
              </h1>
            </div>
          </div>
          <div className="row contacts d-flex justify-content-center">
            <div class="col-md-12 col-lg-12">
              <div class="contacts__list">
                <dl class="contact-list" style={{color: "white"}}>
                  <dt>Phone:</dt>
                  <dd>
                    <a href="tel:639472454073">(63) 947 2454 073</a>
                  </dd>
                  <dt>Email:</dt>
                  <dd>
                    <a href="mailto:6933rauf@gmail.com">6933rauf@gmail.com</a>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
          <div class="contacts__form">
            <p class="contacts__form" style={{color: "white"}}>Or just write me a letter here_</p>
            <form class="js-form">
              <div class="form-group">
                <input class="form-field js-field-name" type="text" placeholder="Your name" required=""></input>
                <span class="form-validation"></span>
                <span class="form-invalid-icon"><i class="mdi mdi-close" aria-hidden="true"></i></span>
              </div>
              <div class="form-group">
                <input class="form-field js-field-email" type="email" placeholder="Your e-mail" required=""></input>
                <span class="form-validation"></span>
                <span class="form-invalid-icon"><i class="mdi mdi-close" aria-hidden="true"></i></span>
              </div>
              <div class="form-group">
                <textarea class="form-field js-field-message" placeholder="Type the message here" required=""></textarea>
                <span class="form-validation"></span>
                <span class="form-invalid-icon"><i class="mdi mdi-close" aria-hidden="true"></i></span>
              </div>
              <button class="send-btn site-btn--form" type="submit" value="Send">Send</button>
            </form>
          </div>
        </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
