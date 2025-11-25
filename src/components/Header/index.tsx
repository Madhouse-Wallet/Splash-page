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
            <div className="flex items-center gap-3">
              <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
                {theme === "light" ? moon : sun}
              </ThemeToggle>
              <Link
                target="_blank"
                href={"https://app.madhousewallet.com/"}
                className="btn flex items-center justify-center text-white commonBtn rounded-full"
                style={{ minWidth: "unset" }}
              >
                Open App
              </Link>
            </div>
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
  background: var(--headerBg);
  backdrop-filter: blur(12.8px);
  border: 1px solid var(--borderColor);
  box-shadow: 0 2px 8px var(--shadowColor);
  transition: all 0.3s ease;

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

const ThemeToggle = styled.button`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--headerText);

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: var(--primaryColor);
    border-color: var(--primaryColor);
    color: white;
    transform: rotate(15deg);
  }

  @media (max-width: 575px) {
    width: 31px;
    height: 31px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const sun = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const moon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export default Header;
