import Image from "next/image";
import React from "react";
import styled from "styled-components";
import graphic1 from "@/Assets/Images/graphic1.png";
import img1 from "@/Assets/Images/sphere.png";
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
                <h2 className="m-0 font-medium text-3xl py-2" style={{ color: "var(--textPrimary)" }}>
                  Intuitive invoicing for your customers
                </h2>
                <p className="m-0" style={{ color: "var(--textSecondary)" }}>
                  so you can focus on growing your business
                </p>
              </div>
            </div>
            <div className="col-span-12">
              <div className="mx-auto" style={{ maxWidth: 1000 }}>
                <div className="py-3">
                  <FeatureCard className="grid gap-3 grid-cols-12 z-[9] relative px-3 rounded-4">
                    <Image
                      src={graphic1}
                      alt=""
                      className="max-w-full bottom-0 left-0 absolute z-[-1] h-auto w-auto object-contain"
                      height={10000}
                      width={10000}
                    />
                    <div className="md:col-span-6 col-span-12 p-lg-5 self-center relative">
                      <h2 className="m-0 font-medium text-3xl py-2" style={{ color: "var(--textPrimary)" }}>

                        Receive payments fast
                      </h2>
                      <p className="m-0" style={{ color: "var(--textSecondary)" }}>
                        Get paid with our international money transfer service.
                        <br /> <br />
                        

                        Cash out to a bank account or mobile money.
                        Withdraw remittances to countries like the USA, Nigeria,
                        Kenya, and Ghana.
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
                  <FeatureCard className="grid gap-3 grid-cols-12 z-[9] relative px-3 rounded-4">
                    <div className="md:col-span-6 col-span-12 p-lg-5 self-center relative">
                      <Image
                        src={loc}
                        alt=""
                        className="max-w-full h-auto w-auto object-contain"
                        height={10000}
                        width={10000}
                      />
                      <h2 className="m-0 font-medium text-3xl py-2" style={{ color: "var(--textPrimary)" }}>
                        Refer and Get Paid!
                      </h2>
                      <p className="m-0" style={{ color: "var(--textSecondary)" }}>
                        We offer a commission program for those 
                        who want to refer gig workers to Madhouse Wallet.
                        Start earning now!
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
  background-color: var(--backgroundColor);
  transition: background-color 0.3s ease;
`;

const FeatureCard = styled.div`
  background-color: var(--backgroundCard);
  border: 1px solid var(--borderColor);
  transition: all 0.3s ease;
  padding: 1.5rem;
  border-radius: 1rem;

  img {
    filter: drop-shadow(0 4px 12px var(--shadowColor));
  }
`;

export default NewFearureSection;
