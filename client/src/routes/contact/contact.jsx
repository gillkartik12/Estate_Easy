import { useContext } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import { AuthContext } from "../../context/AuthContext";

function Contact() {
  const { currentUser } = useContext(AuthContext);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_606qxqj", "template_irccp4n", form.current, {
        publicKey: "gdacj6Rjuxj8yyd6y",
      })
      .then(
        () => {
          e.target.reset();
          alert('Message Sent successfully!');
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };


  return (
    <div className="contact">
      <div className="textContainer">
        <div className="wrapper">
          <h3 className="title">Contact us</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-group">
              <div className="input-box">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input-box">
                <textarea
                  name="message"
                  placeholder="Enter your message here"
                  required
                />
                <button className="btn" type="submit">
                  {" "}
                  Send{" "}
                </button>
              </div>
            </div>
          </form>
          <div className="boxes">
            <div className="box1">
              <h1>10+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box2">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box3">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>  
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Contact;
