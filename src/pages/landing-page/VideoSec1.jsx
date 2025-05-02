import React from "react";

const VideoSec1 = () => {
  return (
    <>
      <section className="videoSec relative py-5">
        <div className="container">
          <div
            className="grid gap-3 max-w-[800px] mx-auto grid-cols-12 items-center p-5 rounded-4 bg-[#0b0914] "
            style={{ border: "1px solid #303030" }}
          >
            <div className="col-span-6 my-2">
              <div className="sectionHeader">
                <h2 className="m-0 font-bold text-3xl uppercase text-white py-2">
                  Checkout our{" "}
                  <span className="themeClr block">POS system</span>
                </h2>
                <p className="m-0 text-gray-500">
                  Streamline your billing with our POS system—easily generate
                  invoices and let customers pay with Bitcoin
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
