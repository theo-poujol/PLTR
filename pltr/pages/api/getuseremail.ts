import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const user = JSON.parse(req.body);

  const findUser = await prisma.user.findFirst({
    where: {
      id: user[0],
    },
  });

  res.json([findUser.id, findUser.email]);
};
