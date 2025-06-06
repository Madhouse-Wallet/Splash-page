import Image from "next/image";
import React from "react";
import bg from "@/Assets/Images/bg1.png";
import Link from "next/link";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterDiv className="siteFooter py-2 z-10 relative bg-[#1D1C25]">
        {/* <Image
          src={bg}
          alt="graphic"
          height={1000}
          width={1000}
          className="max-w-full max-h-full absolute w-100  bottom-0 left-0 h-auto  opacity-30 object-cover right-0 z-[-1]"
        /> */}
        <div className="container">
          <div className="grid gap-3 grid-cols-12">
            <div className="col-span-12">
              <Wrpper className="flex items-center justify-center gap-2 flex-wrap">
                {/* <p className="m-0 text-xs font-medium">
                  Copyright @MadHouse Wallet
                </p> */}
                <ul className="social list-none pl-0 mb-0 flex items-center gap-2">
                  <li className="py-1">
                    <Link
                      href={"https://www.youtube.com/@madhousewallet"}
                      target="_blank"
                      style={{ height: 30, width: 30 }}
                      className=" text-xs hover:bg-[#ff8735] bg-[#262626] rounded-circle flex items-center justify-center "
                    >
                      {youtube}
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      target="_blank"
                      href={"https://x.com/rogeroger120 "}
                      style={{ height: 30, width: 30 }}
                      className=" text-xs hover:bg-[#ff8735] bg-[#262626] rounded-circle flex items-center justify-center "
                    >
                      {twitter}
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      href={"https://github.com/Madhouse-Wallet"}
                      target="_blank"
                      style={{ height: 30, width: 30 }}
                      className=" text-xs hover:bg-[#ff8735] bg-[#262626] rounded-circle flex items-center justify-center "
                    >
                      {github}
                    </Link>
                  </li>
                </ul>
                {/* <ul className="list-none pl-0 mb-0 flex items-center gap-2">
                  <li className="">
                    <Link
                      href={""}
                      className="font-medium text-xs hover:text-[#ff8029]"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href={""}
                      className="font-medium text-xs hover:text-[#ff8029]"
                    >
                      Terms & Condition{" "}
                    </Link>
                  </li>
                </ul> */}
              </Wrpper>
            </div>
          </div>
        </div>
      </FooterDiv>
    </>
  );
};
const FooterDiv = styled.footer`
  font-family: "Funnel Display", serif;
  color: #8e8d92;
`;
const Wrpper = styled.div`
  @media (max-width: 575px) {
    > * {
      &.social {
        order: -1;
      }
      width: 100%;
      justify-content: center;
      text-align: center;
    }
  }
`;
export default Footer;

const phn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 21 20"
    fill="none"
  >
    <path
      d="M8.25487 2.95049C6.87179 1.56794 4.62947 1.56794 3.24637 2.95049C2.46957 3.72699 2.12927 4.77524 2.22464 5.78768C2.25015 8.50651 3.67052 11.6213 6.19266 14.1425C8.71482 16.6637 11.8308 18.0833 14.5504 18.1088C15.5631 18.2042 16.6116 17.8641 17.3883 17.0876C18.7716 15.7049 18.7716 13.4631 17.3883 12.0803C16.0052 10.6978 13.7629 10.6978 12.3798 12.0803C12.0531 12.407 11.8032 12.7822 11.6307 13.1828C10.7688 12.6476 9.92581 11.9836 9.13873 11.1968C8.35189 10.4103 7.68768 9.56776 7.15237 8.70635C7.55297 8.53393 7.92819 8.28428 8.25487 7.95772C9.63806 6.57504 9.63806 4.33317 8.25487 2.95049Z"
      fill="#FFDF56"
    />
  </svg>
);

const email = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 21 20"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.399 6.59617C2.20898 7.33226 2.20898 8.28866 2.20898 10C2.20898 11.9397 2.20898 12.9095 2.48565 13.688C2.96849 15.0466 4.03743 16.1155 5.39602 16.5983C6.17448 16.875 7.14432 16.875 9.08398 16.875H11.584C13.5237 16.875 14.4935 16.875 15.272 16.5983C16.6306 16.1155 17.6995 15.0466 18.1823 13.688C18.459 12.9095 18.459 11.9397 18.459 10C18.459 8.28867 18.459 7.33228 18.269 6.59618L15.1541 8.8915L15.129 8.91C14.2008 9.59392 13.4694 10.1329 12.8357 10.5148C12.1863 10.9062 11.5961 11.1605 10.9412 11.2441C10.5383 11.2956 10.1304 11.2956 9.7274 11.2442C9.07265 11.1605 8.48233 10.9062 7.83301 10.5149C7.19926 10.1331 6.46778 9.59408 5.53958 8.91017L5.51455 8.89175L2.399 6.59617ZM2.91053 5.4204L6.25603 7.88539C7.21474 8.59175 7.89994 9.09583 8.47818 9.44433C9.04657 9.78683 9.46748 9.95083 9.88573 10.0042C10.1836 10.0423 10.4851 10.0423 10.7829 10.0042C11.2012 9.95075 11.6221 9.78675 12.1904 9.44425C12.7687 9.09575 13.4538 8.59167 14.4125 7.88521L17.7575 5.42041C17.1901 4.4908 16.3167 3.77295 15.272 3.40167C14.4935 3.125 13.5237 3.125 11.584 3.125H9.08398C7.14432 3.125 6.17448 3.125 5.39602 3.40167C4.35133 3.77295 3.47789 4.49079 2.91053 5.4204Z"
      fill="#FFDF56"
    />
  </svg>
);

const fb = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M11.812 21.0994H12.1854C12.8853 21.0994 13.2353 21.0994 13.4806 20.9211C13.5599 20.8636 13.6295 20.7939 13.6871 20.7147C13.8654 20.4693 13.8654 20.1193 13.8654 19.4194V13.5161H14.9854C15.6853 13.5161 16.0353 13.5161 16.2806 13.3378C16.3599 13.2802 16.4295 13.2106 16.4871 13.1314C16.6654 12.886 16.6654 12.536 16.6654 11.8361V11.6572C16.6654 10.9573 16.6654 10.6073 16.4871 10.3619C16.4295 10.2827 16.3599 10.213 16.2806 10.1554C16.0353 9.97719 15.6853 9.97719 14.9854 9.97719H13.8654V7.83831C13.8654 7.40343 13.8654 7.18598 13.9364 7.01446C14.0311 6.78578 14.2128 6.60408 14.4415 6.50935C14.6131 6.43831 14.8305 6.43831 15.2654 6.43831C15.7002 6.43831 15.9177 6.43831 16.0892 6.36726C16.3179 6.27253 16.4996 6.09084 16.5943 5.86214C16.6654 5.69062 16.6654 5.47318 16.6654 5.03831V4.35127C16.6654 3.86764 16.6654 3.62584 16.5779 3.4383C16.4851 3.23944 16.3254 3.07959 16.1265 2.98686C15.939 2.89941 15.6971 2.89941 15.2135 2.89941C13.5209 2.89941 12.6745 2.89941 12.0181 3.20547C11.3221 3.53005 10.7627 4.08948 10.4381 4.78553C10.132 5.44188 10.132 6.28822 10.132 7.9809V9.97719H9.01203C8.31208 9.97719 7.96211 9.97719 7.71676 10.1554C7.63753 10.213 7.56785 10.2827 7.51028 10.3619C7.33203 10.6073 7.33203 10.9573 7.33203 11.6572V11.8361C7.33203 12.536 7.33203 12.886 7.51028 13.1314C7.56785 13.2106 7.63753 13.2802 7.71676 13.3378C7.96211 13.5161 8.31208 13.5161 9.01203 13.5161H10.132V19.4194C10.132 20.1193 10.132 20.4693 10.3103 20.7147C10.3679 20.7939 10.4375 20.8636 10.5168 20.9211C10.7621 21.0994 11.1121 21.0994 11.812 21.0994Z"
      fill="#FFDF56"
    />
  </svg>
);

const youtube = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 5.71C22.0495 4.27865 21.7364 2.85802 21.09 1.58C20.6514 1.0556 20.0427 0.701711 19.37 0.580001C16.5876 0.326837 13.7936 0.223354 11 0.270001C8.21667 0.222992 5.43279 0.323132 2.66001 0.570001C2.11183 0.669717 1.60453 0.926843 1.20001 1.31C0.300014 2.14 0.200014 3.56 0.100014 4.76C-0.0459521 6.91754 -0.0459521 9.08247 0.100014 11.24C0.129318 11.9154 0.229876 12.5858 0.400014 13.24C0.520589 13.7451 0.764537 14.2123 1.11001 14.6C1.51728 15.0035 2.0364 15.2752 2.60001 15.38C4.75588 15.6467 6.92822 15.757 9.10001 15.71C12.6 15.76 15.67 15.71 19.3 15.43C19.8771 15.3304 20.4105 15.0585 20.83 14.65C21.1097 14.3697 21.3187 14.0269 21.44 13.65C21.7973 12.5525 21.9729 11.4041 21.96 10.25C22 9.69 22 6.31 22 5.71ZM8.74001 10.85V4.66L14.66 7.77C13 8.69 10.81 9.73 8.74001 10.85Z"
      fill="#fff"
    />
  </svg>
);

const github = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 0C4.475 0 3.43657e-06 4.475 3.43657e-06 10C-0.00173744 12.0994 0.657975 14.146 1.88546 15.8492C3.11295 17.5524 4.84582 18.8256 6.838 19.488C7.338 19.575 7.525 19.275 7.525 19.012C7.525 18.775 7.512 17.988 7.512 17.15C5 17.613 4.35 16.538 4.15 15.975C4.037 15.687 3.55 14.8 3.125 14.562C2.775 14.375 2.275 13.912 3.112 13.9C3.9 13.887 4.462 14.625 4.65 14.925C5.55 16.437 6.988 16.012 7.562 15.75C7.65 15.1 7.912 14.663 8.2 14.413C5.975 14.163 3.65 13.3 3.65 9.475C3.65 8.387 4.037 7.488 4.675 6.788C4.575 6.538 4.225 5.513 4.775 4.138C4.775 4.138 5.612 3.875 7.525 5.162C8.33916 4.93664 9.18023 4.82327 10.025 4.825C10.875 4.825 11.725 4.937 12.525 5.162C14.437 3.862 15.275 4.138 15.275 4.138C15.825 5.513 15.475 6.538 15.375 6.788C16.012 7.488 16.4 8.375 16.4 9.475C16.4 13.313 14.063 14.163 11.838 14.413C12.2 14.725 12.513 15.325 12.513 16.263C12.513 17.6 12.5 18.675 12.5 19.013C12.5 19.275 12.688 19.587 13.188 19.487C15.1727 18.8163 16.8973 17.5403 18.1192 15.8386C19.3411 14.1369 19.9988 12.095 20 10C20 4.475 15.525 0 10 0Z"
      fill="#fff"
    />
  </svg>
);

const twitter = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_31_4)">
      <mask
        id="mask0_31_4"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="14"
        height="14"
      >
        <path d="M0 0H14V14H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_31_4)">
        <path
          d="M11.025 0.656006H13.172L8.482 6.03001L14 13.344H9.68L6.294 8.90901L2.424 13.344H0.275L5.291 7.59401L0 0.657006H4.43L7.486 4.71001L11.025 0.656006ZM10.27 12.056H11.46L3.78 1.87701H2.504L10.27 12.056Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_31_4">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const yt = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.67751 7.15148C3.09675 7.97189 3.04674 8.85329 2.94672 10.6161C2.91926 11.1002 2.90234 11.5719 2.90234 11.9996C2.90234 12.4272 2.91926 12.8989 2.94672 13.3831C3.04674 15.1458 3.09675 16.0273 3.67751 16.8477C3.8432 17.0818 4.12281 17.3784 4.34669 17.5577C5.13134 18.1859 6.0088 18.2879 7.76375 18.4921C9.09458 18.6469 10.5813 18.7662 12.0023 18.7662C13.4233 18.7662 14.9101 18.6469 16.241 18.4921C17.9958 18.2879 18.8734 18.1859 19.658 17.5577C19.8819 17.3784 20.1615 17.0818 20.3272 16.8477C20.9079 16.0273 20.958 15.1458 21.058 13.3831C21.0855 12.8989 21.1023 12.4272 21.1023 11.9996C21.1023 11.5719 21.0855 11.1002 21.058 10.6161C20.958 8.85328 20.9079 7.97188 20.3272 7.15148C20.1615 6.9174 19.8819 6.62075 19.658 6.4415C18.8734 5.81328 17.9958 5.71121 16.241 5.50706C14.9101 5.35225 13.4233 5.23291 12.0023 5.23291C10.5813 5.23291 9.09458 5.35225 7.76375 5.50706C6.0088 5.71121 5.13134 5.81328 4.34669 6.4415C4.12281 6.62075 3.8432 6.9174 3.67751 7.15148ZM14.8336 11.4679C14.6342 10.9821 13.9367 10.6334 12.5415 9.93584C11.3806 9.35535 10.8 9.0651 10.3303 9.15819C9.99896 9.22382 9.70257 9.407 9.49571 9.67395C9.20234 10.0525 9.20234 10.7016 9.20234 11.9996C9.20234 13.2976 9.20234 13.9466 9.49571 14.3252C9.70257 14.5922 9.99896 14.7753 10.3303 14.8409C10.8 14.9341 11.3806 14.6438 12.5415 14.0633C13.9367 13.3658 14.6342 13.017 14.8336 12.5313C14.9735 12.1906 14.9735 11.8085 14.8336 11.4679Z"
      fill="#FFDF56"
    />
  </svg>
);

const linkedIn = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
      fill="white"
    />
  </svg>
);

const discord = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4C14.9736 4.00038 14.9485 4.01116 14.93 4.03C14.75 4.36 14.54 4.79 14.4 5.12C12.809 4.88015 11.191 4.88015 9.6 5.12C9.46 4.78 9.25 4.36 9.06 4.03C9.05 4.01 9.02 4 8.99 4C7.49 4.26 6.06 4.71 4.72 5.33C4.71 5.33 4.7 5.34 4.69 5.35C1.97 9.42 1.22 13.38 1.59 17.3C1.59 17.32 1.6 17.34 1.62 17.35C3.42 18.67 5.15 19.47 6.86 20C6.89 20.01 6.92 20 6.93 19.98C7.33 19.43 7.69 18.85 8 18.24C8.02 18.2 8 18.16 7.96 18.15C7.39 17.93 6.85 17.67 6.32 17.37C6.28 17.35 6.28 17.29 6.31 17.26C6.42 17.18 6.53 17.09 6.64 17.01C6.66 16.99 6.69 16.99 6.71 17C10.15 18.57 13.86 18.57 17.26 17C17.28 16.99 17.31 16.99 17.33 17.01C17.44 17.1 17.55 17.18 17.66 17.27C17.7 17.3 17.7 17.36 17.65 17.38C17.13 17.69 16.58 17.94 16.01 18.16C15.97 18.17 15.96 18.22 15.97 18.25C16.29 18.86 16.65 19.44 17.04 19.99C17.07 20 17.1 20.01 17.13 20C18.85 19.47 20.58 18.67 22.38 17.35C22.4 17.34 22.41 17.32 22.41 17.3C22.85 12.77 21.68 8.84 19.31 5.35C19.3 5.34 19.29 5.33 19.27 5.33ZM8.52 14.91C7.49 14.91 6.63 13.96 6.63 12.79C6.63 11.62 7.47 10.67 8.52 10.67C9.58 10.67 10.42 11.63 10.41 12.79C10.41 13.96 9.57 14.91 8.52 14.91ZM15.49 14.91C14.46 14.91 13.6 13.96 13.6 12.79C13.6 11.62 14.44 10.67 15.49 10.67C16.55 10.67 17.39 11.63 17.38 12.79C17.38 13.96 16.55 14.91 15.49 14.91Z"
      fill="white"
    />
  </svg>
);
