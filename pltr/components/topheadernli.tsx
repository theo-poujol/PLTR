import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function TopHeaderNli() {
  const [isClosed, setClosed] = React.useState(true);

  const router = useRouter();

  function handleConnexionOrProfile() {
    if (cookies.get("session") == undefined) {
      router.push("/connexion");
    } else router.push("/profile");
  }

  return (
    <div className="top-menu text-white top-left">
      <Transition
        show={!isClosed}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="-mt-14 -mx-14 w-screen h-screen bg-bggray p-10">
          <button
            onClick={() => {
              setClosed(true);
              enableBodyScroll(document);
            }}
            className="text-palegray hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className=" mx-40">
            <h1 className="text-6xl font-rox text-center">
              If you're broke<br />
              <span className="italic text-9xl">sell me.</span>
            </h1>
            <div className="w-1/3 p-4 mt-40">
              <div className="">
                <p className="text-palegray font-rox text-lg">00.01</p>
              </div>
              <div className="mt-10">
                <h3 className="text-xl font-semibold">
                  Devenez membre du club © Prolétaire
                </h3>
              </div>
              <div className="mt-5">
                <p className="text-palegray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. <br /> <br />
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex">
            <div className="w-1/4 p-4">
              <div className="">
                <p className="text-palegray font-rox text-lg">00.01</p>
              </div>
              <div className="mt-10">
                <h3 className="text-xl font-semibold">
                  Tout est dans l'attitude
                </h3>
              </div>
              <div className="mt-5">
                <p className="text-palegray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. <br /> <br />
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="w-3/4 p-4 mt-10 text-center text-8xl font-rox">
              <h1 className="italic"> © Prolétaire.</h1>
            </div>
          </div>

          <div className="p-4 w-1/4 text-right mx-96">
            <div className="">
              <p className="text-palegray font-rox text-lg">00.02</p>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-semibold">Le style vestimentaire</h3>
            </div>
            <div className="mt-5">
              <p className="text-palegray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. <br /> <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div> */}

          <div className="">
            <div className="absolute bottom-0 right-0 mx-20 mb-10 ">
              <ul className="text-palegray text-7xl">
                <a href="">
                  <li className="hover:text-white hover:font-rox transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
                    T-shirt
                  </li>
                </a>

                <a href="">
                  <li className="hover:text-white hover:font-rox transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
                    Pull & Sweat
                  </li>
                </a>
                <a href="">
                  <li className="hover:text-white hover:font-rox transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
                    Accessoires
                  </li>
                </a>
                <a href="">
                  <li className="hover:text-white hover:font-rox transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
                    Qui sommes-nous?
                  </li>
                </a>
                <a href="">
                  <li className="hover:text-white hover:font-rox transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
                    Prochain drop
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </Transition>

      <div className="top-menu-container flex flex-wrap justify-between">
        <div className="top-menu-ham">
          <button className="menu-button" onClick={() => {
            setClosed(false);
            disableBodyScroll(document);
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="top-menu-title text-center">
          <button type="button" onClick={() => router.push("/")}>
            <span className="text-lg">© Prolétaire</span>
          </button>
        </div>
        <div className="top-menu-icons text-right flex flex-wrap space-x-4">
          <div className="select">
            <select className="bg-black appearance-none text-sm font-black tracking-widest">
              <option>FR</option>
              <option>ENG</option>
            </select>
          </div>
          <div className="user">
            <button type="button" onClick={() => handleConnexionOrProfile()}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
          <div className="cart">
            {" "}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900 text-center"
                          }  rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          Votre panier est vide :-(
                        </button>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <div className="flex flex-wrap">
                          <div
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            Prix
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-violet-500 text-white" : "text-white"
                          } w-full px-2 py-2 text-sm bg-black`}
                        >
                          Payer
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
