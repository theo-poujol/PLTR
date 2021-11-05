import Head from "next/head";
import "tailwindcss/tailwind.css";

import React, { useState } from "react";
import TopHeaderNli from "./../components/topheadernli";
import Footer from "./../components/footer";
import Login from "./../components/login";
import SignUp from "./../components/signup";

import Cookies from "universal-cookie";

const cookies = new Cookies();

const { encrypt } = require("../utils/crypto");
const { initSession } = require("../utils/session");

// Vérifier les informations de connexion de l'utilisateur
async function verifyUser(data) {
  console.log(data);
  const stringifyUSer = JSON.stringify(data);
  var parsedUser = JSON.parse(stringifyUSer);

  const email = parsedUser["email"];
  const password = encrypt(parsedUser["password"]);

  const userToVerify = [email, password];
  const response = await fetch("/api/userlogin", {
    method: "POST",
    body: JSON.stringify(userToVerify),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

// Sauvegarder un utilisateur dans la base de données
async function saveUser(data) {
  const stringifyUSer = JSON.stringify(data);
  var parsedUser = JSON.parse(stringifyUSer);
  parsedUser["password"] = encrypt(parsedUser["password"]);

  const email = parsedUser["email"];
  const password = parsedUser["password"];

  const userToCreate = [email, password];
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(userToCreate),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

class Connexion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      mainUser: [],
      loginError: "",
      signUpError: "",
    };
  }

  render() {
    return (
      <html className="p-7 bg-black">
        <header>
          <Head>
            <title>Connexion - Prolétaire</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </header>
        <body>
          <TopHeaderNli />

          <div className="connexion mt-20">
            <div className="">
              <div className="login-wrapper w-1/2 mx-auto">
                <Login
                  onSubmit={async (data, e) => {
                    try {
                      const loginUser = await verifyUser(data);
                      this.setState({ auth: true });
                      this.setState({ mainUser: loginUser });
                      initSession(loginUser);
                    } catch (err) {
                      console.log(err);
                      
                      this.setState({
                        loginError:
                          "Les informations de connexion sont incorrectes.",
                      });
                      // console.log(err);
                    }
                  }}
                />
                <p className="text-red-500 px-10 text-center text-sm tracking-widest">
                  {this.state.loginError}
                </p>
              </div>
              <div className="separator flex flex-wrap">
                <span className="text-white mx-auto text-2xl mt-10">
                  {" "}
                  - OU -
                </span>
              </div>
              <div className="signup-wrapper w-1/2 mt-10 mx-auto">
                <SignUp
                  onSubmit={async (data, e) => {
                    try {
                      const signUpUser = await saveUser(data);
                      this.setState({ auth: true });
                      this.setState({ mainUser: signUpUser });
                      // e.target.reset();
                      initSession(signUpUser);
                    } catch (err) {
                      this.setState({
                        signUpError:
                          "Cette adresse email est déjà liée à un compte existant.",
                      });
                      // console.log(err);
                    }
                  }}
                />
                <p className="text-red-500 px-10 text-center text-sm tracking-widest">
                  {this.state.signUpError}
                </p>
              </div>
            </div>
          </div>

          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    );
  }
}

export default Connexion;
