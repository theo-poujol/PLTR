import Input from "./Input";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { handleChangeEmail } from "../utils/handleChange";

interface AddSignFormProps {
  onSubmit: any;
}

export default function Login(props: AddSignFormProps) {
  const { register, handleSubmit } = useForm();

  const [login_error, setlogin_error] = useState("");

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
    <div className="text-white p-4 ">
      <style>{css}</style>

      <div className="pt-10 pb-10 tracking-widest p-4">
        <h2 className="text-left uppercase glitch text-2xl">
          Connexion à votre compte
        </h2>
        <div className="border-b-2 border-gray-100 mt-2"></div>
        <form className="" onSubmit={handleSubmit(props.onSubmit)}>
          <label htmlFor="email" className="mt-10 block text-lg ">
            Email
          </label>
          <input
            className="block w-full p-3 mt-2 bg-gray-100 bg-opacity-20 appearance-none focus:outline-none focus:shadow-inner placeholder-current"
            {...register("email")}
            type="email"
            placeholder="Entrer votre adresse email"
            autoComplete="email"
            onChange={handleChangeEmail}
          ></input>
          <label htmlFor="password" className="mt-10 block text-lg ">
            Mot de passe
          </label>
          <input
            className="block w-full p-3 mt-2 bg-gray-100 bg-opacity-20 appearance-none focus:outline-none focus:shadow-inner placeholder-current"
            {...register("password")}
            type="password"
            placeholder="Entrer votre mot de passe"
            autoComplete="password"
          ></input>

          <button
            type="submit"
            className="border-2 border-white mt-2 w-full py-3 mt-12 font-medium tracking-widest text-white bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
          >
            Se connecter →
          </button>
          <button type="button" className="mx-auto mt-4">
            <span className="underline text-gray-500 text-sm text-center">
              Mot de passe oublié?
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
