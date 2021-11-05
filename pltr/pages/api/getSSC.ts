import type { NextApiRequest, NextApiResponse } from "next";
const { ServerSessionCookie } = require("../../utils/serverSessionCookie");


import Cookies from "universal-cookie";

const cookies = new Cookies();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
//   if (ssc != undefined) res.json(ssc);
  console.log("Je renvoie le ssc");
  
  res.json(cookies.get("_session"));
};
