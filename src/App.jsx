import CoverflowGallery from "./Swiper";
import Navbar from "./Navbar";

function App() {
  const images = [
    "./assets/black_og.png",
    "./assets/image_2.jpeg",
    "./assets/logocream.png",
  ];
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="main-bg">
          <div className="main-bg-vector">
            <section className="main-top">
              <div className="main-head">
                <div className="main-head-img">
                  <img src="./assets/logocream.png" />
                </div>
                <div className="main-head-text">
                  <h1>MILAN</h1>
                  <h3>THE GENERAL CHAMPIONSHIP OF IITH</h3>
                </div>
              </div>
            </section>
            <section className="main-mid">
              <div className="main-mid-text">
                <div className="main-mid-text-head">
                  <h2>WELCOME TO MILAN</h2>
                  <h2>IIT HYDERABAD</h2>
                </div>
                <div className="main-mid-text-desc">
                  <p>
                    "Milan" is the annual techno-cultural-sports General
                    Championship of IIT Hyderabad. It consists of 19 Sports, 18
                    Cultural and 11 technical events conducted between all the
                    hostel blocks. In this second edition of Milan,presented by
                    SBI YONO, the sports, cultural, and technical events will
                    start from 9th September and will conclude on 18th September
                  </p>
                </div>
              </div>
              <div className="main-mid-carousel">
                <img src="./assets/image_2.jpeg" />
              </div>
            </section>
            <section className="main-ovr">
              <div className="main-ovr-head">
                <p>Overall LeaderBoard</p>
              </div>
              <div className="main-ovr-subhead">
                <div className="main-ovr-subhead1">
                  <p>LeaderBoard</p>
                </div>
                <div className="main-ovr-subhead1">
                  <p>Blocks Race</p>
                </div>
              </div>
              <div className="main-ovr-stat">
                <p>Stats</p>
              </div>
            </section>
            <section className="main-pic">
              <CoverflowGallery images={images} />
            </section>
          </div>
        </div>
        <footer>
          <div className="footer-img">
            <img src="./assets/red logo.png" />
          </div>
          <div className="footer-links">
            <div className="footer-links-location">
              <h3>LOCATED AT</h3>
              <p>Indian Institute of technology Hyderabad</p>
              <p>Near NH-65, Sangareddy, Kandi</p>
              <p>Telangana 502285</p>
            </div>
            <div className="footer-links-contact">
              <h3>CONTACT US</h3>
              <p>Phone:</p>
              <a href="tel:+919946525172">(+91) 9946525172</a>
              <p>Email us at:</p>
              <a href="mailto:milan.oc@gymkhana.iith.ac.in">milan.oc@gymkhana.iith.ac.in</a>
            </div>
            <div className="footer-links-follow">
              <h3>FOLLOW US</h3>
              <div className="footer-links-follow-icons">
                <a href="#">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
