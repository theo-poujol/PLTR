import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient, Prisma } from "@prisma/client";
// import { saveUser } from "../../utils/db";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log("Avant parse ");
  console.log(req.body);
  const userToCreate = JSON.parse(req.body);

  console.log("Après parse ");
  console.log(userToCreate);

  const mail = userToCreate[0];
  const hashedpwd = userToCreate[1];
  console.log(mail);
  console.log(hashedpwd);

  try {
    const savedUser = await prisma.user.create({
      data: {
        email: mail,
        password: hashedpwd,
      },
    });

    const signUpUser = [savedUser.id, savedUser.email];
    res.json(signUpUser);
  } catch (e: any) {
    return res.json(null);
  }
};
