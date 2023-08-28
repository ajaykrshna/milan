import { useRef, useState, useEffect } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Navbar from "../components/Navbar";
const Team = () => {
  // FOR WINDOW SIZE
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
      {windowSize[0] > 1200 ? (
        <div className="team-page">
          <OCsection />
          <DomainsDesktop />
          <DomainsDesktop />
          <DomainsDesktop />
          <DomainsDesktop />
        </div>
      ) : (
        <div className="team-page">
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
          <OCsection />
          <DomainsMobile />
          <DomainsMobile />
          <DomainsMobile />
          <DomainsMobile />
        </div>
      )}
    </>
  );
};

const OCsection = () => {
  return (
    <section className="tp-oc">
      <div className="tp-logo">
        <img src="./assets/logos/red logo.png" />
      </div>
      <div className="tp-oc-head">OVERALL COORDINATOR</div>
      <div className="tp-oc-img">
        <div className="tp-oc-img-f" />
      </div>
      <div className="tp-oc-name">HARISH M</div>
    </section>
  );
};

const DomainsDesktop = () => {
  // FRAMER MOTION
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 0.7, 1], ["0%", "0%", "-47%"]);

  return (
    <div className="tp-domain-space" ref={targetRef}>
      <section className="tp-domain">
        <motion.div style={{ x }} className="tp-domain-warp">
          <div className="tp-domain-head">
            <div className="tp-domain-name">CREATIVES</div>
            <div className="tp-domain-head-h">HEAD</div>
            <div className="tp-domain-head-i">
              <div className="tp-domain-head-f"></div>
              <div className="tp-domain-head-name">ADHEENA S</div>
            </div>
          </div>
          <div className="tp-domain-core">
            <div className="tp-domain-name">CREATIVES</div>
            <div className="tp-domain-core-h">CORES</div>
            <div className="tp-domain-core-i">
              <div className="tp-domain-core-i-c">
                <img src="./assets/team/AdhithT.jpg" className="tp-domain-core-i-c-f"></img>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

const DomainsMobile = () => {
  return (
    <div className="tp-domain-space">
      <section className="tp-domain">
        <div className="tp-domain-warp">
          <div className="tp-domain-head">
            <div className="tp-domain-name">CREATIVES</div>
            <div className="tp-domain-head-h">HEAD</div>
            <div className="tp-domain-head-i">
              <div className="tp-domain-head-f"></div>
              <div className="tp-domain-head-name">ADHEENA S</div>
            </div>
          </div>
          <div className="tp-domain-core">
            <div className="tp-domain-name">CREATIVES</div>
            <div className="tp-domain-core-h">CORES</div>
            <div className="tp-domain-core-i">
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
              <div className="tp-domain-core-i-c">
                <div className="tp-domain-core-i-c-f"></div>
                <div className="tp-domain-core-i-c-name">SHRI</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
