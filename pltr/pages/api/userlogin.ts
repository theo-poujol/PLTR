const { encrypt } = require("../../utils/crypto");

import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const userToCreate = JSON.parse(req.body);
  console.log(userToCreate);
  

  const em = userToCreate[0];
  const hashedpwd = userToCreate[1];

  const findUser = await prisma.user.findFirst({
    where: {
      email: em,
      password: hashedpwd,
    },
  });

  if (findUser != null) {
    return res.json([findUser.id, findUser.email]);
  }
  else {
    return res.json(null);
  }
};
