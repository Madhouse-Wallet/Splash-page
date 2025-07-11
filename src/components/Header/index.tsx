import React, { useState, useEffect, use } from "react";
import styled from "styled-components";
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";
import { useTheme } from "../../ContextApi/ThemeContext";
import { useRouter } from "next/router";
import Link from "next/link";
import logo from "@/Assets/Images/logow.png";
import logo2 from "@/Assets/Images/logow2.png";
import Image from "next/image";
import user from "@/Assets/Images/user.png";
import { createPortal } from "react-dom";
import LoginPop from "../Modals/LoginPop";
import { loginSet } from "../../lib/redux/slices/auth/authSlice";


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
      <header className="siteHeader absolute top-3 w-full  z-[999] ">
        <div className="container mx-auto py-1">
          <Nav className="flex items-center justify-between py-lg-3 py-2 px-lg-4 px-3 shadow rounded-full">
            <a
              href="#"
              className="text-[var(--textColor)] font-bold text-lg whitespace-nowrap"
            >
              <Image
                src={logo2}
                alt="logo"
                height={10000}
                width={10000}
                className="max-w-full object-contain w-auto smLogo"
              />
            </a>
            <Image
              src={logo}
              alt="logo"
              height={10000}
              width={10000}
              className="max-w-full logo object-contain w-auto"
            />
            <Link
              target="_blank"
              href={"https://app.madhousewallet.com/"}
              // onClick={loginTry}
              className="btn flex items-center justify-center text-white commonBtn rounded-full"
              style={{ minWidth: "unset" }}
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
  background: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(12.8px);
  .logo {
    height: 25px;
  }
  .smLogo {
    height: 35px;
  }
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    .menu {
      padding-top: 20px;
    }
  }
  @media (max-width: 575px) {
    a.btn {
      height: 31px !important;
      padding: 0 10px;
    }
    .smLogo {
      height: 25px;
    }
    .logo {
      height: 15px;
    }
  }
  @media (max-width: 380px) {
    .smLogo {
      height: 20px;
    }
    .logo {
      height: 10px;
    }
    button {
    }
  }
`;

export default Header;
