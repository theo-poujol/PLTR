import Head from "next/head";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

// import "tailwindcss/tailwind.css";


import TopHeaderNli from "./../components/topheadernli";
import Hero from "./../components/hero";
import Footer from "./../components/footer";
import Newco from "./../components/newco";
import PltrSpirit from "./../components/pltrSpirit";
import PltrAbout from "./../components/pltrAbout";

import { Clothes } from "../utils/clothes";
import { CartObject } from "../utils/cartObject";

import Cookies from "universal-cookie";

const cookies = new Cookies();

class Index extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    const css = `
    .glitch {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
        0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    
      animation: glitch 500ms infinite;
    }
    
    .glitch span {
      position: absolute;
      top: 0;
      left: 0;
    }
    
    .glitch span:first-child {
      animation: glitch 650ms infinite;
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
      transform: translate(-0.025em, -0.0125em);
      /* color: green; */
      opacity: 0.8;
    }
    
    .glitch span:last-child {
      animation: glitch 375ms infinite;
      clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
      transform: translate(0.0125em, 0.025em);
      /* color: red; */
      opacity: 0.8;
    }
    
    /* https://web.dev/prefers-reduced-motion/#(bonus)-forcing-reduced-motion-on-all-websites */
    
    @keyframes glitch {
      0% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
          -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
          -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
      }
      14% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
          -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
          -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
      }
      15% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
          0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
          -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      49% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
          0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
          -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      50% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
          0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      99% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
          0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      100% {
        text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
          -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
          -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
    }
    
    @media (prefers-reduced-motion: reduce) {
      *,
      ::before,
      ::after {
        animation-delay: -1ms !important;
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        background-attachment: initial !important;
        scroll-behavior: auto !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
    }
    
    `;
    return (
      <html className="p-7 bg-black">
        
        <header>
          <Head>
            <title>PLTR - Prolétaire</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </header>
        <body>
          <div className="">
            <style>{css}</style>

            <TopHeaderNli/>
            <Hero />
            <PltrSpirit />
            <PltrAbout />

          </div>
        </body>
        <footer className="mt-96">
          <Footer />
        </footer>
      </html>
    );
  }
}

export default Index;
