import Image from "next/image";
import React from "react";
import styled from "styled-components";
import graphic1 from "@/Assets/Images/graphic1.png";
import img1 from "@/Assets/Images/nf1.png";
import loc from "@/Assets/Images/loc.png";
import img2 from "@/Assets/Images/nf2.png";

const NewFearureSection: React.FC = () => {
  return (
    <>
      <FeatureSec className=" relative py-14 z-10 ">
        <div className="container">
          <div className="grid gap-3 grid-cols-12 itmes-center">
            <div className="col-span-12">
              <div
                className="sectionHeader text-center mx-auto"
                style={{ maxWidth: 400 }}
              >
                <h2 className="m-0 font-medium text-3xl text-white py-2">
                  Powerful new features for solving challenges
                </h2>
                <p className="m-0 text-gray-500">
                  Secury leverages powerful encryption and blockchain technology
                  to provide industry-leading protection for your sensitive data
                </p>
              </div>
            </div>
            <div className="col-span-12">
              <div className="mx-auto" style={{ maxWidth: 1000 }}>
                <div className="py-3">
                  <div className="grid gap-3 grid-cols-12 z-[9] relative px-3 rounded-4 bg-[#050003]">
                    <Image
                      src={graphic1}
                      alt=""
                      className="max-w-full bottom-0 left-0 absolute z-[-1] h-auto w-auto object-contain"
                      height={10000}
                      width={10000}
                    />
                    <div className="md:col-span-6 col-span-12 p-lg-5 self-center relative">
                      <h2 className="m-0 font-medium text-3xl text-white py-2">
                        Bitcoin Merchant Kit
                      </h2>
                      <p className="m-0 text-gray-500">
                        Earn passive sats by onboarding merchants to receive
                        Bitcoin payments through Madhouse Wallet for life!
                        <br /> <br />
                        We are offer a full onboarding merchant kit and
                        comission program for those who want to refer businesses
                        to Madhouse Wallet
                      </p>
                    </div>
                    <div className="md:col-span-5 col-span-12 pt-lg-5 px-lg-5 relative">
                      <Image
                        src={img1}
                        alt=""
                        className="max-w-full h-auto w-auto object-contain"
                        height={10000}
                        width={10000}
                      />
                    </div>
                  </div>
                </div>
                <div className="py-3">
                  <div className="grid gap-3 grid-cols-12 z-[9] relative px-3 rounded-4 bg-[#050003]">
                    <div className="md:col-span-6 col-span-12 p-lg-5 self-center relative">
                      <Image
                        src={loc}
                        alt=""
                        className="max-w-full h-auto w-auto object-contain"
                        height={10000}
                        width={10000}
                      />
                      <h2 className="m-0 font-medium text-3xl text-white py-2">
                        Enable the future of payments worldwide
                      </h2>
                      <p className="m-0 text-gray-500">
                        Your keys, your crypto Cash out payments in over 100
                        different countries which include the USA, Kenya,
                        Nigeria and South Africa
                      </p>
                    </div>
                    <div className="md:col-span-6 col-span-12 relative self-end">
                      <Image
                        src={img2}
                        alt=""
                        className="max-w-full h-auto w-full object-contain"
                        height={10000}
                        width={10000}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FeatureSec>
    </>
  );
};

const FeatureSec = styled.section`
  font-family: "Funnel Display", serif;
`;

export default NewFearureSection;
