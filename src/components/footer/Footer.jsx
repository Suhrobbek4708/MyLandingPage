import "./Footer.css";
import logof from "./logof.png";
import google from "./google.png";
import twitter from "./twitter.png";
import linkedin from "./linkedin.png";
import facebook from "./facebook.png";

import side from "./side.png";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="red">
        <img src={logof} alt="" />

        <nav>
          <ul>
            <li>
              <a href="#">Body</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="info">
        <div className="box1">
          <p>
            We are location independent bloggers, digital <br /> influencers,
            small group tour organizers and <br /> world travelers with a
            serious passion for the <br /> sun, the sea and adventure. <br />{" "}
            <br /> Eight years and 60-something countries later <br /> and we
            are still on the road.
          </p>
        </div>
        <div className="box2">
          <p>
            Add: 221B John hope <br />
            Street, Lekki, Lagos,
            <br />
            Nigeria. <br />
            T: +234 706 507 8544 <br />
            E: info@redexplorers.com <br />
            W: www. redexplorers.com
          </p>
        </div>
        <div className="box3">
          <p>
            My List <br />
            My Requests <br />
            My Credits <br />
            My Info <br />
            Contact
          </p>
        </div>
        <div className="box4">
          <p>
            Travel <br />
            Why Travel <br />
            Become a Traveler <br />
            How Its Works <br />
            Traveling FAQ <br />
          </p>
        </div>
      </div>
      <hr />
      <div className="side">
        <a href="#">
        <img src={side} alt="" />
        </a>
        
        <div className="icon">
          <a href="#">
          <img className="facebook" src={facebook} alt="" />

          </a>
          <a href="#">
          <img className="facebook"  src={twitter} alt="" />

          </a>
          <a href="#">

          <img className="facebook"  src={google} alt="" />
          </a>
          <a href="#">
          <img className="facebook"  src={linkedin} alt="" />

          </a>
         

        </div>
        © 2021 RedExplorers. All rights reserved | Terms | Privacy | Site Map
      </div>
    </footer>
  );
};

export default Footer;
