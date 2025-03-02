import "./Contact.css";
import foto1 from "./foto1.png";
import foto2 from "./foto2.png";
import foto3 from "./foto3.png";
import foto4 from "./foto4.png";
import foto5 from "./foto5.png";
import foto6 from "./foto6.png";
import foto7 from "./foto7.png";
import foto8 from "./foto8.png";

const Contact = () => {
  return (
    <div className="contact">
      {/*  desticontactnation section start */}

      <div className="contact-section">
        <div className="section1">
          <img className="foto1" src={foto1} alt="" />
          <h1>Contact</h1>
        </div>
        <div className="info">
          <h6>PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM</h6>
        </div>
        <div className="inp-section">
          <div className="inp-one">
            <div className="inp1">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="inp2">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="inp-two">
            <div className="inp1">
              <input type="text" placeholder="Email" />
            </div>
            <div className="inp2">
              <input type="text" placeholder="Subject" />
            </div>
          </div>
          <div className="inp-three">
            <input type="text" placeholder="Message" />
          </div>
          <button className="submit">Submit</button>
        </div>

        {/* foot section start */}

        <div className="foot-section">
          <div className="iml-section">
            <img className="foto2" src={foto2} alt="" />
            <img className="foto3" src={foto3} alt="" />
            <img className="foto4" src={foto4} alt="" />
            <img className="foto5" src={foto5} alt="" />
            <img className="foto6" src={foto6} alt="" />
            <img className="foto7" src={foto7} alt="" />
            <img className="foto8" src={foto8} alt="" />
          </div>
        </div>
        <div className="inr-section">
          <div className="inf-section">
            <h1>
              Join <span>98,641</span> Monthly Readers. <br /> Subscribe Today!
            </h1>
          </div>

          <div className="int-section">
            <input className="inpp" type="text" placeholder="Email Adress" />
            <button className="sub">Subscribe</button>
          </div>
        </div>

        {/* foot section end */}
      </div>
      {/*  contact section end */}
    </div>
  );
};

export default Contact;
