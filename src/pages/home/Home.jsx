import "./Home.css";
import orqafon from "./Rectangle1.png";
import btn from "./Group97.png";
import location from "./location.png";
import about1 from "./about-section1.png";
import comment from "./commentariya.png";
import face from "./facebook.png";
import globus from "./globus.png";
import bus from "./beach.png";
import ip1 from "./iphone1.png";
import ip2 from "./iphone2.png";
import placo from "./placo.png";
import foto1 from "./foto1.png";
import foto2 from "./foto2.png";
import foto3 from "./foto3.png";
import foto4 from "./foto4.png";
import foto5 from "./foto5.png";
import foto6 from "./foto6.png";
import foto7 from "./foto7.png";
import group from "./Group.png";

import ip3 from "./iphone3.png";
import kema from "./kema.png";
import kiyik from "./kiyik.png";
import koprik from "./koprik.png";
import nature from "./nature.png";
import oyna from "./oyna.png";
import place1 from "./pleace1.png";
import popular1 from "./popular1.png";
import busy from "./busy.png";
import resent1 from "./resent1.png";
import resent2 from "./resent2.png";
import resent3 from "./resent3.png";
import beach from "./beach.png";
import insta from "./instagram.png";
import twit from "./twitter.png";
import youtube from "./youtube.png";
import locat from "./locat.png";

const Home = () => {
  return (
    <div className="home">
      {/* home section start */}
      <div className="home-section">
        <img src={orqafon} className="orqafon" alt="photo" />
        <h1>
          THE COUNTER <span>70</span> Countries <span>1036</span> Cities
        </h1>
        <h2>
          Leave your mark on all <br />
          over the world{" "}
        </h2>
        <button className="mor">Read More</button>

        <p>Scroll Down to Continue</p>
        <div className="imog">
          <img className="btn" src={btn} alt="" />

          <img className="locat" src={location} alt="" />
        </div>
      </div>
      {/* home section end */}

      {/* about section start */}
      <div className="about-section">
        {/* categories  start */}

        <div className="categories">
          <div className="read">
            <h4>About Me</h4>
            <img src={about1} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in
              vel massa donec sit. Mi ut risus sem malesuada ornare. Ac eu erat
              eget et lorem est arcu. Gravida hendrerit sit blandit semper
              lacus. Nulla amet suscipit sit lectus tortor. Dolor non eget
              suspendisse leo scelerisque sed d.
            </p>
            <button className="more">Read More</button>
          </div>

          <div className="popular">
            <button className="pop">Popular Post</button>
            <div className="inter">
              <img className="beach" src={beach} alt="" />
            </div>
          </div>

          <div className="resent">
            <button className="rec">Recent Post</button>
            <div className="im1">
              <img className="rec1" src={resent1} alt="" />
              <div className="infoo">
                <h5>September 17, 2018 - Tips & Tricks</h5>
                <h6>
                  Finding Love & home in Tbilisi,
                  <br /> Georgia
                </h6>
              </div>
            </div>

            <div className="im2">
              <img className="rec2" src={resent2} alt="" />
              <div className="infooo">
                <h5>September 17, 2018 - Tips & Tricks</h5>
                <h6>
                  Finding Love & home in Tbilisi, <br /> Georgia
                </h6>
              </div>
            </div>

            <div className="im3">
              <img className="rec3" src={resent3} alt="" />
              <div className="infoooo">
                <h5>September 17, 2018 - Tips & Tricks</h5>
                <h6>
                  Finding Love & home in Tbilisi, <br /> Georgia
                </h6>
              </div>
            </div>
          </div>

          <div className="view">
            <h4>Gear I Use</h4>
            <h5>What’s in My Bag??</h5>
            <p>
              Unfortunately, there is no <br /> “one-size-fits-all” when it
              comes <br /> to travel packing lists.
            </p>
            <button className="vie">View Details</button>
          </div>

          <div className="iphone">
            <button className="pro">Product That I Have</button>

            <div className="ip1">
              <img className="ipair" src={ip1} alt="" />
              <div className="air">
                <h6>
                  Apple MacBook Air <br /> MJV2ELL/A 13-inch Laptop{" "}
                </h6>
                <h5>$514</h5>
              </div>
            </div>

            <div className="ip2">
              <img className="ipair" src={ip2} alt="" />
              <div className="air">
                <h6>
                  Iphone Xs case, Iphone X <br /> case, SUPCASE
                </h6>
                <h5>$267</h5>
              </div>
            </div>

            <div className="ip3">
              <img className="ipair" src={ip3} alt="" />
              <div className="air">
                <h6>
                  Master Sport band for Apple <br /> wrist watch
                </h6>
                <h5>$378</h5>
              </div>
            </div>
          </div>

          <div className="iconca">
            <button className="get">Get In Touch</button>
            <div className="icon">
              <div className="facebook">
                <img src={face} alt="" />
                <div className="inco">
                  <p>
                    65.5K <br />
                    Likes
                  </p>
                </div>
              </div>
              <div className="twitter">
                <img src={twit} alt="" />
                <div className="inco">
                  <p>
                    105k <br />
                    Followers
                  </p>
                </div>
              </div>
            </div>

            <div className="icona">
              <div className="youtube">
                <img src={youtube} alt="" />
                <div className="inco">
                  <p>
                    1.5 M <br />
                    Subscribers
                  </p>
                </div>
              </div>
              <div className="instagram">
                <img src={insta} alt="" />
                <div className="inco">
                  <p>
                    85 k <br />
                    Followers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* categories  end */}

        {/* nature  start */}
        <div className="nature">
          <div className="travel">
            <img src={busy} alt="" />
            <h5>July, 15, 2021 - Tips and Tricks </h5>
            <h4>
              A traveler’s guide to Penang, Malaysia - Where to <br />
              Eat, Drink, Sleep and Explore
            </h4>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra{" "}
              <br />
              pharetra ac erat commodo non leo eget gravida viverra. Pharetra{" "}
              <br />
              pharetra.
            </h3>
            <div className="com">
              <div className="penang">
                <img src={locat} alt="" />
                <h6>Penang, Malaysia </h6>
              </div>
              <div className="comment">
                <img src={comment} alt="" />
                <h6 className="hi">Comment (52)</h6>
              </div>
            </div>
          </div>

          <div className="septem">
            <div className="sep1">
              <img src={beach} alt="" />
              <h5>September 17, 2021 - Tips & Tricks</h5>
              <h4>
                Have you read The Beach <br /> by Alex?
              </h4>
              <div className="geor">
                <div className="geor1">
                  <img src={locat} alt="" />
                  <h5>Georgia</h5>
                </div>
                <div className="geor2">
                  <img src={comment} alt="" />
                  <h5>Comment (52)</h5>
                </div>
              </div>
            </div>

            <div className="sep2">
              <img src={kema} alt="" />
              <h5>September 17, 2021 - Tips & Tricks</h5>
              <h4>
                The writer actually live in <br /> Philippines
              </h4>
              <div className="geor">
                <div className="geor1">
                  <img src={locat} alt="" />
                  <h5>Georgia</h5>
                </div>
                <div className="geor2">
                  <img src={comment} alt="" />
                  <h5>Comment (52)</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="into">
            <img src={nature} alt="" />
            <h5>September 17, 2021 - Tips & Tricks</h5>
            <h4>Finding Love & home in Tbilisi, Georgia</h4>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra{" "}
              <br />
              pharetra ac erat commodo non leo eget gravida viverra. Pharetra{" "}
              <br />
              pharetra.
            </h6>
            <div className="malaysia">
              <div className="malas">
                <img className="location" src={locat} alt="" />
                <h5>Penang, Malaysia </h5>
              </div>
              <div className="ment">
                <img className="commenti" src={comment} alt="" />
                <h5>Comment (52)</h5>
              </div>
            </div>
          </div>

          <div className="place">
            <img className="plac" src={placo} alt="" />
          </div>

          <div className="boxlar">
            <div className="box1">
              <div className="sep2">
                <img src={globus} alt="" />
                <h5>September 17, 2021 - Tips & Tricks</h5>
                <h4>
                  The writer actually live in <br /> Philippines
                </h4>
                <div className="geor">
                  <div className="geor1">
                    <img src={locat} alt="" />
                    <h5>Georgia</h5>
                  </div>
                  <div className="geor2">
                    <img src={comment} alt="" />
                    <h5>Comment (52)</h5>
                  </div>
                </div>
              </div>

              <div className="sep2">
                <img src={oyna} alt="" />
                <h5>September 17, 2021 - Tips & Tricks</h5>
                <h4>
                  The writer actually live in <br /> Philippines
                </h4>
                <div className="geor">
                  <div className="geor1">
                    <img src={locat} alt="" />
                    <h5>Georgia</h5>
                  </div>
                  <div className="geor2">
                    <img src={comment} alt="" />
                    <h5>Comment (52)</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="box2">
              <div className="sep2">
                <img src={koprik} alt="" />
                <h5>September 17, 2021 - Tips & Tricks</h5>
                <h4>
                  The writer actually live in <br /> Philippines
                </h4>
                <div className="geor">
                  <div className="geor1">
                    <img src={locat} alt="" />
                    <h5>Georgia</h5>
                  </div>
                  <div className="geor2">
                    <img src={comment} alt="" />
                    <h5>Comment (52)</h5>
                  </div>
                </div>
              </div>

              <div className="sep2">
                <img src={kiyik} alt="" />
                <h5>September 17, 2021 - Tips & Tricks</h5>
                <h4>
                  The writer actually live in <br /> Philippines
                </h4>
                <div className="geor">
                  <div className="geor1">
                    <img src={locat} alt="" />
                    <h5>Georgia</h5>
                  </div>
                  <div className="geor2">
                    <img src={comment} alt="" />
                    <h5>Comment (52)</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="into">
            <img src={nature} alt="" />
            <h5>September 17, 2021 - Tips & Tricks</h5>
            <h4>Finding Love & home in Tbilisi, Georgia</h4>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra{" "}
              <br />
              pharetra ac erat commodo non leo eget gravida viverra. Pharetra{" "}
              <br />
              pharetra.
            </h6>
            <div className="malaysia">
              <div className="malas">
                <img className="location" src={locat} alt="" />
                <h5>Penang, Malaysia </h5>
              </div>
              <div className="ment">
                <img className="commenti" src={comment} alt="" />
                <h5>Comment (52)</h5>
              </div>
            </div>
          </div>

          <div className="septem">
            <div className="sep1">
              <img src={beach} alt="" />
              <h5>September 17, 2021 - Tips & Tricks</h5>
              <h4>
                Have you read The Beach <br /> by Alex?
              </h4>
              <div className="geor">
                <div className="geor1">
                  <img src={locat} alt="" />
                  <h5>Georgia</h5>
                </div>
                <div className="geor2">
                  <img src={comment} alt="" />
                  <h5>Comment (52)</h5>
                </div>
              </div>
            </div>

            <div className="sep2">
              <img src={kema} alt="" />
              <h5>September 17, 2021 - Tips & Tricks</h5>
              <h4>
                The writer actually live in <br /> Philippines
              </h4>
              <div className="geor">
                <div className="geor1">
                  <img src={locat} alt="" />
                  <h5>Georgia</h5>
                </div>
                <div className="geor2">
                  <img src={comment} alt="" />
                  <h5>Comment (52)</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* nature  end */}
      </div>
      {/* about section end */}

      {/* foot section start */}

      <div className="foot-section">
        <div className="img-section">
          <img className="foto1" src={foto1} alt="" />
          <img className="foto2" src={foto2} alt="" />
          <img className="foto3" src={foto3} alt="" />
          <img className="foto4" src={foto4} alt="" />
          <img className="foto5" src={foto5} alt="" />
          <img className="foto6" src={foto6} alt="" />
          <img className="foto7" src={foto7} alt="" />
        </div>
      </div>
      <div className="inr-section">
        <div className="inf-section">
          <h1>
            Join <span>98,641</span> Monthly Readers. <br /> Subscribe Today!
          </h1>
        </div>

        <div className="int-section">
          <input type="text" placeholder="Email Adress" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* foot section end */}
    </div>
  );
};

export default Home;
