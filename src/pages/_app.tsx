import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/Assets/styles/globals.css";
import type { AppProps } from "next/app";
import { Providers } from "../lib/providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/Layout/index";
import { ThemeProvider } from "@/ContextApi/ThemeContext";
export default function App({ Component, pageProps, ...props }: AppProps) {
  return (
    <>
      <Providers>
        <ToastContainer />
        <ThemeProvider>
          <Layout Component={Component} pageProps={pageProps} {...props} />
        </ThemeProvider>
      </Providers>
      {/* <Component {...pageProps} />; */}
    </>
  );
}
