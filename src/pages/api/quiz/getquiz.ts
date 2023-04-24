import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const quizId = parseInt(req.query.id as string);

    const quiz = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
      include: {
        questions: true,
      },
    });

    if (!quiz) {
      res.status(404);
      res.json({ error: "Quiz not found" });
    } else {
      res.status(200);
      res.json({ quiz });
    }
  } catch (e) {
    res.status(500);
    res.json({ error: "Unable to fetch quiz data" });
  } finally {
    await prisma.$disconnect();
  }
}
