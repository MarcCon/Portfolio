import React from "react";
import Header from "../components/Header";
import About from "../components/About";

import Portfolio from "../components/Portfolio";
import Kontakt from "../components/Kontakt";
import LegalFooter from "../components/LegalFooter";

function Homepage() {
  return (
    <>
      <div className="bg-darkblue">
        <div className="">
          <Header />
          <About />
          <Portfolio />
        </div>
        <div className="bg-zinc-900">
          <LegalFooter />
        </div>
      </div>
    </>
  );
}

export default Homepage;
