import React from "react";
import "./Landing.css";
import ClearSpace from "../../components/clearSpace/ClearSpace";
import LandingFirstSection from "../../components/landingFirstSection/LandingFirstSection";
import FeaturesSection from "../../components/featuresSection/FeaturesSection";
import OurTeam from "../../components/ourTeam/OurTeam";
const Landing = () => {
  return (
    <div className="landing">
      <ClearSpace height="60px"></ClearSpace>
      <div className="first">
        <LandingFirstSection></LandingFirstSection>
      </div>
      <div className="second">
        <FeaturesSection></FeaturesSection>
      </div>
      <div className="third">
        <OurTeam></OurTeam>
      </div>
    </div>
  );
};

export default Landing;
