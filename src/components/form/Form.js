import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AiFillFacebook, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import Button from "../button/Button";
import "./Form.css";

const Form = () => {
  const style = { color: "#85BC24" };
  const style2 = { color: "#C7D2FE" };
  return (
    <div className="form-container">
      <div className="contact-information-container">
        <div className="contact-information-sub-container">
          <h3>Contact Information</h3>

          <p className="contact-information-p">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet. Sapien tortor lacus arcu.
          </p>

          <div className="contact-information">
            <div className="contact-information-item">
              <BsTelephone style={style} />
            </div>

            <div className="contact-information-item">
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="contact-information">
            <div className="contact-information-item">
              <FiMail style={style} />
            </div>
            <div className="contact-information-item">
              <p>support@magit.com</p>
            </div>
          </div>

          <div className="social-media-container">
            <div className="social-media">
              <AiFillFacebook style={style2} />
            </div>
            <div className="social-media">
              <AiFillGithub style={style2} />
            </div>
            <div className="social-media">
              <AiOutlineTwitter style={style2} />
            </div>
          </div>
        </div>
      </div>
      <div className="main-form1-container" >
        <div>
          <form>
            <h1>Have a Project? Tell us about it</h1>
            {/* input */}
            <div className="input-super-container">
              <div>
                <div>
                  <label htmlFor="firstname">First name</label>
                </div>
                <input type="text" name="firstname" id="firstname" />
              </div>
              <div>
                <div>
                  <label htmlFor="lastname">Last name</label>
                </div>
                <input type="text" name="lastname" id="lastname" />
              </div>
            </div>

            <div className="input-super-container">
              <div>
                <div>
                  <label htmlFor="email">Email</label>
                </div>
                <input type="email" name="email" id="email" />
              </div>
              <div>
                <div className="phone-input-header">
                  <div>
                    <label htmlFor="phone">Phone</label>
                  </div>
                  <div>
                    <p>Optional</p>
                  </div>
                </div>
                <input type="tel" name="phone" id="phone" />
              </div>
            </div>

            <div className="subject-input-field">
              <div>
                <label htmlFor="subject">Subject</label>
              </div>
              <input type="text" name="subject" id="subject" />
            </div>

            <div className="message-input-field">
              <div className="message-input-header">
                <div>
                  <label htmlFor="message">Message</label>
                </div>
                <div>
                  <p>Max. 500 characters</p>
                </div>
              </div>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                maxLength={500}
              ></textarea>
            </div>
            <div className="btn-container">
              <div>
                <Button background={"#09063C"} title={"Submit"} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
