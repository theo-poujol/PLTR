import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const userToVerify = JSON.parse(req.body);

  const usn = userToVerify;
  console.log("ici regarde : " + usn);

  const findUser = await prisma.user.findUnique({
    where: {
      username: usn,
    },
  });

  if (findUser != null) {
    console.log("Il existe bien : " + findUser.username);

    const profile = await prisma.profile.findUnique({
      where: {
        userId: findUser.id,
      },
    });
    const p = new Array();
    console.log("bio : " + profile);
    return res.json([
      findUser.id,
      findUser.username,
      findUser.avatar,
      [
        profile.id,                 // 0
        profile.bio,                // 1
        profile.isSharded,          // 2
        profile.nb_nft,             // 3
        profile.nb_post,            // 4
        profile.followers.length,   // 5
        profile.following.length    // 6
      ],
    ]);
  } else {
    console.log("Il existe pas");
    return res.json([findUser]);
  }
};
