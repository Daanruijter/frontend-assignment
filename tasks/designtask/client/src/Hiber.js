import React, { Component } from "react";
import "./Hiber.css";

export default class Hiber extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="section-one-container">
          <div className="headers-top">
            <div className="centralize-text">we're always ready to help</div>
            <br />

            <div className="centralize-text big-font-size">
              Got a question? Ask away.
            </div>
            <br />
            <div className="centralize-text">
              Send us a message and we'll get back to you within 24 hours. If
              not sooner.
              <br />
            </div>
          </div>
          <form>
            <div className="form-content-container">
              <div className="form-question">
                <textarea
                  type="text"
                  placeholder="What do you want to know? *"
                />
              </div>
              <div className="form-firstname">
                <input type="text" placeholder="First name *" />
              </div>
              <div className="form-lastname">
                <input type="text" placeholder="Last name *" />
              </div>
              <div className="form-email">
                <input type="text" placeholder="Your email address *" />
              </div>
              <div className="form-button">
                <input
                  type="submit"
                  value="send your question"
                  placeholder="First Name"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="section-two-container">
          <div className="headers-bottom">
            <div className="centralize-text faqs-header">faqs</div>
            <div className="centralize-text big-font-size">
              Find your answer here.
            </div>
          </div>
          <div className="more-information-container">
            <div className="flex-plus-and-questions">
              <div className="plus-sign">+</div>
              <div>what is hiberband?</div>
            </div>
            <hr />
            <div className="flex-plus-and-questions">
              <div className="plus-sign">+</div>
              <div>does hiberband have its own satellite constellation?</div>
            </div>
            <hr />
            <div className="flex-plus-and-questions">
              <div className="plus-sign">+</div>
              <div>what does the service cost?</div>
            </div>

            <div className="button-flexer">
              <button className="read-all-faqs-button">read all faqs</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
