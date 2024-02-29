import React from "react";
import Header from "../components/Header";
import About from "../components/About";

import Portfolio from "../components/Portfolio";

function Homepage() {
  return (
    <>
      <div className="bg-darkblue">
        <div className="w-[1000px] mx-auto">
          <Header />
          <About />
          <Portfolio />
        </div>
      </div>
    </>
  );
}

export default Homepage;
