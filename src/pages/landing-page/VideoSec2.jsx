import React from "react";

const VideoSec2 = () => {
  return (
    <>
      <section className="videoSec relative py-5">
        <div className="container">
          <div
            className="grid  max-w-[800px] mx-auto gap-3 grid-cols-12 items-center p-5 rounded-4 bg-[#0b0914] "
            style={{ border: "1px solid #303030" }}
          >
            <div className="sm:col-span-6 col-span-12 my-2 imgWrpper">
              <video
                className="max-w-full mx-auto max-h-[500px] object-contain rounded"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
              >
                <source src="./appvid2.mp4" />
              </video>
            </div>
            <div className="sm:col-span-6 col-span-12 my-2">
              <div className="sectionHeader">
                <h2 className="m-0 font-bold text-3xl text-white py-2 uppercase ">
                  Pay with bitcoin on{" "}
                  <span className="text-green-500">cash app</span>
                </h2>
                <p className="m-0 text-gray-500">
                  Customers can now pay with Bitcoin via Cash App—no Cash App
                  account required on your end
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSec2;
