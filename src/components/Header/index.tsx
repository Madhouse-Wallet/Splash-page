import React, { useState, useEffect, use } from "react";
import styled from "styled-components";
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";
import { useTheme } from "../../ContextApi/ThemeContext";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import user from "@/Assets/Images/user.png";
import { createPortal } from "react-dom";
import LoginPop from "../Modals/LoginPop";
import { ethers } from "ethers";
import { loginSet } from "../../lib/redux/slices/auth/authSlice";
import {
  CHAIN_NAMESPACES,
  IAdapter,
  IProvider,
  WEB3AUTH_NETWORK,
} from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { getDefaultExternalAdapters } from "@web3auth/default-evm-adapter";
import { Web3Auth, Web3AuthOptions } from "@web3auth/modal";
import RPC from "../../lib/ethersRPC";

const clientId =
  "BPi5PB_UiIZ-cPz1GtV5i1I2iOSOHuimiXBI0e-Oe_u6X3oVAbCiAZOTEBtTXw4tsluTITPqA8zMsfxIKMjiqNQ";

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0xaa36a7",
  rpcTarget: "https://rpc.ankr.com/eth_sepolia",
  displayName: "Ethereum Sepolia Testnet",
  blockExplorerUrl: "https://sepolia.etherscan.io",
  ticker: "ETH",
  tickerName: "Ethereum",
  logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig },
});

const web3AuthOptions: Web3AuthOptions = {
  clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
  privateKeyProvider,
};
const web3auth = new Web3Auth(web3AuthOptions);

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [login, setLogin] = useState<boolean>(false);

  const isChecked = theme === "light";

  return (
    <>
      {login &&
        createPortal(
          <LoginPop login={login} setLogin={setLogin} />,
          document.body
        )}
      <header className="siteHeader sticky top-0 py-2 w-full shadow z-[999] bg-[var(--backgroundColor)]">
        <div className="container mx-auto">
          <Nav className="flex items-center justify-between ">
            <a
              href="#"
              className="text-[var(--textColor)] font-bold text-lg whitespace-nowrap"
            >
              {logo}
            </a>
            <Link
              target="_blank"
              href={"https://staging.madhousewallet.com/"}
              // onClick={loginTry}
              className="btn flex items-center justify-center commonBtn"
            >
              Open App
            </Link>
          </Nav>
        </div>
      </header>
    </>
  );
};

const GradientHandleSwitch = styled(Switch)`
  .react-switch-handle {
    background-image: linear-gradient(90deg, #ffdf56, #ff8735 50%) !important;
  }
`;

const Nav = styled.nav`
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    .menu {
      padding-top: 20px;
    }
  }
`;

export default Header;

const logo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    viewBox="0 0 100 70"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21 20H29V30L21 30V20ZM21 38H10V30H21V38ZM29 38V49H21V38L29 38ZM29 38H40V30H29V38Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M71.2143 54.4276H66.3571V60.4857H60.2857V54.4276H58.7011V54.4143H53V48.3429H58.7011V21.1429H53V15.0714H60.2857V9H66.3571V15.0714H71.2143V9H77.2857V15.0714H75.8286C83.2211 15.0714 87.8573 18.8624 87.8573 24.8901C87.8573 29.1996 84.6394 32.8 80.4659 33.4266V33.6451C85.8112 34.0544 89.7394 37.9546 89.7394 43.1639C89.7394 49.8668 84.8616 54.1447 76.9336 54.4143H77.2857V60.4857H71.2143V54.4276ZM66.9388 21.2084V31.4364H72.8572C77.2481 31.4364 79.7568 29.4996 79.7568 26.1724C79.7568 23.008 77.5468 21.2084 73.7024 21.2084H66.9388ZM66.9388 48.2906H74.0302C78.7756 48.2906 81.339 46.2725 81.339 42.5094C81.339 38.8265 78.6931 36.863 73.8384 36.863H66.94L66.9388 48.2906Z"
      fill="currentColor"
    />
  </svg>
);
