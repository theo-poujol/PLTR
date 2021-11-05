import Cookies from "universal-cookie";
const cookies = new Cookies();

const { ServerSessionCookie } = require("./serverSessionCookie");

const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';

function initSession(user) {
  // boolean SECURE dans [options] quand on sera en https

  // Client side cookie
  cookies.set("session", user[0], {
    sameSite: "strict",
    path: "/",
    expires: new Date(new Date().getTime() * 365, 25),
    // httpOnly : true
  });

  // console.log("ici " + user);
  // const userToCookify = [user[0], user[1]];

  // console.log("UserToCookify : " + userToCookify);

  // const response = await fetch(`${server}/api/createSSC`, {
  //   method: "POST",
  //   body  : JSON.stringify(userToCookify),
  // });

  // window.location.assign("/");
  // return await response.json();
}

function endSession() {
  cookies.remove("session", {
    sameSite: "strict",
    path: "/",
  });
  refresh();
}

function refresh() {
  window.location.reload();
}

module.exports = { initSession, endSession, refresh }
