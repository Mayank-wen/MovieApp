import React from "react";
import "../css/Hero.css";

const Hero = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h2>Mavka</h2>
        <p className="hero-genre">Drama | Fantasy</p>
        <p className="mv">
          The already tumultuous and difficult lives of ordinary people in
          Ukraine's countryside are turned upside down by war and revolution.
        </p>
        <div className="buttons">
          <button className="watch-now">Watch Now</button>
          <button className="download">Download</button>
        </div>
      </div>
      <video
        className="hero-video"
        src="https://imdb-video.media-imdb.com/vi3494298905/1434659607842-pgv4ql-1676535573518.mp4?Expires=1734808374&Signature=Hh1G6RrsZJoJvTXhWC~pXFUsqVNhp5hgZs8B47WvGz02Jn2lMv3Euw4cAwWPFX5qUrSTvH29PkpxAlzSdoYUHBNH2eR9e7jNvzakLUfrqz6H3pPBlLjKtUwPO-dmV4E-7YQ5Z4cTZb7pnRX9Q7-7WucIZsaYHrTAt78FviTXSuX9qKVZXXaQCXEQ0c8uTNn3C41gLy48qtTHLCIYWoPEq8jrWqELkt1dP40BPp-3dflTXQazMSPpAx8Ka8zeXn8wWaZ~Re-9nFfwIsa4ZQ6zZ86Jdmp-kC3hIAbmENeqigp5YQ0rQGcnR244iAMXJDPEI139TdWrSqmPB0Aj5z3MAQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default Hero;
