import type { NextApiRequest, NextApiResponse } from "next";
const { ServerSessionCookie } = require("../../utils/serverSessionCookie");


import Cookies from "universal-cookie";

const cookies = new Cookies();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const userToCookify= JSON.parse(req.body);  

  const id = userToCookify[0];
  const email = userToCookify[1];

  var ssc = new ServerSessionCookie(id, email);

  cookies.set("_session", ssc, {
    sameSite: "strict",
    path: "/",
    expires: new Date(new Date().getTime() * 365, 25),
    httpOnly: true,
  });
  console.log(cookies.getAll());
  console.log(("Affichate bonne du contenu sur server side cookie"));
  console.log(cookies.get("_session")._sessionID);
  console.log(cookies.get("_session")._email);

  cookies.remove("_session");

if (ssc == undefined) res.json(null);
else res.json(ssc);
};
