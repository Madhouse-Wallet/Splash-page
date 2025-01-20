import React from "react";
import Herosec from "./Herosec";
import SolutionSec from "./SolutionSec";
import Footer from "@/components/Footer/index";
import JoinUsSec from "./JoinUs";
import CardSection from "./CardSecstion";
import PartnerSEcSection from "./PartnerSec";
import FeatureSection from "./FeatureSec";
import NewFearureSection from "./NewFeature";

const LandingPage: React.FC = () => {
  return (
    <>
      <Herosec />
      <PartnerSEcSection />
      <CardSection />
      <NewFearureSection />
      <FeatureSection />
      <SolutionSec />
      <JoinUsSec />
      <Footer />
    </>
  );
};

export default LandingPage;
