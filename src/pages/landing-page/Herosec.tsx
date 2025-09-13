import Image from "next/image";
import React from "react";
import styled from "styled-components";
import wave from "@/Assets/Images/waveline.png";
import bg from "@/Assets/Images/landingBg2.webp";
import hero from "@/Assets/Images/hero.png";
import logo from "@/Assets/Images/logow.png";
import mobile from "@/Assets/Images/mobile.png";
import Link from "next/link";

const Herosec: React.FC = () => {
  return (
    <>
      <Herosection className="heroSec relative pt-24 z-10 bg-[#0a0915]">
        <Image
          src={bg}
          alt="graphic"
          height={2000}
          width={2000}
          className="max-w-full object-left opacity-40 absolute w-full top-0 left-0 h-full object-cover ml-auto right-0 z-[-1]"
        />
        <div className="container py-10">
          {/* <div className="grid gap-3 grid-cols-12">
            <div className="md:col-span-6 col-span-12">
              <h2
                className="m-0 font-medium text-4xl text-white"
                style={{ lineHeight: "50px" }}
              >
                Borrow Dollars Using Your{" "}
                <span className="text-gradient">Bitcoin at 0%</span> interest.
                Pay back when you want{" "}
              </h2>
            </div>
          </div> */}
          <div className="grid gap-3 grid-cols-12 items-center">
            <div className="md:col-span-7 col-span-12">
              <BannerContent
                className=" pb-24"
                // style={{ maxWidth: 645 }}
              >
                <h2
                  className="m-0 font-medium text-3xl text-white"
                  style={{ lineHeight: "40px" }}
                >
                  
                  <span className="themeClr"> Effortlessly </span>
                  accept international payments 
                </h2>
                <div className="btnWrpper mt-3 flex items-center gap-2 flex-wrap">
                  <Link
                    target="_blank"
                    href="https://app.madhousewallet.com/welcome"
                    className="flex font-normal items-center justify-between commonBtn btn rounded-pill"
                  >
                    Create Wallet
                    <span className="icn ms-1">{right}</span>
                  </Link>
                  <Link
                    href={"https://madhouse-wallet.gitbook.io/docs"}
                    target="_blank"
                    className="flex btn items-center justify-between btn border-0 font-normal rounded-pill text-white"
                  >
                    Get Started <span className="icn ms-1">{right}</span>
                  </Link>
                </div>
              </BannerContent>
              <CardCstm className="p-3 rounded-xl ">
                <p className="m-0 py-2 text-gray-400">
                  <b className="text-white float-left mr-2">
                    <Image
                      src={logo}
                      alt="logo"
                      height={10000}
                      width={100000}
                      className="max-w-full w-auto"
                      style={{ height: 15 }}
                    />
                  </b>{" "}
                  Accepting remittances should be easy.
                  Get paid fast with our international money transfer service.
                  Receive payments from over 45 different countries.
                  Cash out to a bank account or mobile money. 
                </p>
              </CardCstm>
            </div>
            <div className="md:col-span-5 col-span-12 text-center">
              <Image
                alt=""
                src={mobile}
                height={10000}
                width={10000}
                style={{ maxWidth: 300 }}
                className="max-w-full mx-auto h-auto w-auto"
              />
            </div>
          </div>
        </div>
      </Herosection>
    </>
  );
};

const Herosection = styled.section`
  font-family: "Funnel Display", serif;
`;

const BannerContent = styled.div`
  .btn {
    background: #252038;
    height: 40px !important;
    min-height: unset !important;
    min-width: 196px;
    font-size: 12px !important;
  }
  @media (max-width: 480px) {
    .btn {
      min-width: unset !important;
    }
  }
`;
const CardCstm = styled.div`
  max-width: 450px;
  background: rgba(255, 255, 255, 0.09);
`;

export default Herosec;

const right = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.793 7.49999H2.5C2.36739 7.49999 2.24021 7.55267 2.14645 7.64644C2.05268 7.74021 2 7.86738 2 7.99999C2 8.1326 2.05268 8.25978 2.14645 8.35354C2.24021 8.44731 2.36739 8.49999 2.5 8.49999H11.793L8.146 12.146C8.05211 12.2399 7.99937 12.3672 7.99937 12.5C7.99937 12.6328 8.05211 12.7601 8.146 12.854C8.23989 12.9479 8.36722 13.0006 8.5 13.0006C8.63278 13.0006 8.76011 12.9479 8.854 12.854L13.354 8.35399C13.4006 8.30754 13.4375 8.25237 13.4627 8.19162C13.4879 8.13088 13.5009 8.06576 13.5009 7.99999C13.5009 7.93422 13.4879 7.8691 13.4627 7.80836C13.4375 7.74761 13.4006 7.69244 13.354 7.64599L8.854 3.14599C8.76011 3.0521 8.63278 2.99936 8.5 2.99936C8.36722 2.99936 8.23989 3.0521 8.146 3.14599C8.05211 3.23988 7.99937 3.36721 7.99937 3.49999C7.99937 3.63277 8.05211 3.7601 8.146 3.85399L11.793 7.49999Z"
      fill="currentColor"
    />
  </svg>
);
