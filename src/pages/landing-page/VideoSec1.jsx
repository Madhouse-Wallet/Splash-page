import React from "react";

const VideoSec1 = () => {
  return (
    <>
      <section className="videoSec relative py-5">
        <div className="container">
          <div className="grid gap-3 max-w-[800px] mx-auto grid-cols-12 items-center">
            <div className="col-span-6 my-2">
              <div className="sectionHeader">
                <h2 className="m-0 font-medium text-3xl text-white py-2">
                  Powerful new features for solving challenges
                </h2>
                <p className="m-0 text-gray-500">
                  Secury leverages powerful encryption and blockchain technology
                  to provide industry-leading protection for your sensitive data
                </p>
              </div>
            </div>
            <div className="col-span-6 my-2 imgWrpper">
              <video
                className="max-w-full mx-auto max-h-[500px] object-contain rounded"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
              >
                <source src="./appvid.mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSec1;
