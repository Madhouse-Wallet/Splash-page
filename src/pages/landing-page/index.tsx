import React from "react";
import Herosec from "./Herosec";
import SolutionSec from "./SolutionSec";
import Footer from "@/components/Footer/index";
import JoinUsSec from "./JoinUs";
import CardSection from "./CardSecstion";
import PartnerSEcSection from "./PartnerSec";
import FeatureSection from "./FeatureSec";
import NewFearureSection from "./NewFeature";
import VideoSec1 from "./VideoSec1";
import VideoSec2 from "./VideoSec2";
import wm from "@/Assets/Images/watermark.jpg";
import Image from "next/image";

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="relative z-[99]">
        <Image
          src={wm}
          alt=""
          height={10000}
          width={10000}
          className="max-w-full h-full w-full object-cover fixed top-0 left-0 z-[0]"
          style={{ opacity: 0.09 }}
        />
        <Herosec />
        <PartnerSEcSection />
        <CardSection />
        <VideoSec1 />
        <VideoSec2 />
        <NewFearureSection />
        <FeatureSection />
        <SolutionSec />
        <JoinUsSec />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
