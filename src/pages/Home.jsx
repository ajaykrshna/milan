import { useState } from "react";
import CoverflowGallery from "../components/Swiper";
import Navbar from "../components/Navbar";
import BlockRace from "../components/BlockRace";
import Footer from "../components/Footer";
import Hamburger from "../components/Hamburger";

const Home = () => {
  const [raceGraph, setRaceGraph] = useState(true);
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      {showNav ? (
        <>
          <div className="close-btn" onClick={() => setShowNav(false)}>
            <div className="close-line-1"></div>
            <div className="close-line-2"></div>
          </div>
          <Navbar />
        </>
      ) : (
        <div className="hamburger" onClick={() => setShowNav(true)}>
          <div className="ham-rec1"></div>
          <div className="ham-rec1"></div>
          <div className="ham-rec1"></div>
        </div>
      )}
      <div className="main">
        <div className="main-bg">
          <div className="main-bg-vector">
            <section className="main-top">
              <div className="main-head">
                <div className="main-head-img">
                  <img src="./assets/logos/logocream.png" />
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
                <img src="./assets/events/image_2.jpeg" />
              </div>
            </section>
            <section className="main-ovr">
              <div className="main-ovr-head">
                <p>Overall LeaderBoard</p>
              </div>
              <div className="main-ovr-subhead">
                <div
                  className="main-ovr-subhead1"
                  onClick={() => {
                    setRaceGraph(true);
                  }}
                >
                  <p>LeaderBoard</p>
                </div>
                <div
                  className="main-ovr-subhead1"
                  onClick={() => {
                    setRaceGraph(false);
                  }}
                >
                  <p>Blocks Race</p>
                </div>
              </div>
              <div className="main-ovr-stat">
                {raceGraph ? <LeaderBoard /> : <BlockRace />}
              </div>
            </section>
            <section className="main-pic">
              <CoverflowGallery />
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;

const LeaderBoard = () => {
  return <div className="leaderboard">leaderboard</div>;
};