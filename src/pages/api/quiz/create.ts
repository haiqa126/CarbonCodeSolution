import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { Question } from "../../../interfaces";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const quiz = req.body;
    const newQuiz = await prisma.quiz.create({
      data: {
        name: quiz.name,
        questions: {
          create: quiz.questions.map((q: Question) => ({
            text: q.text,
            answers: JSON.stringify(q.answers),
            correctAnswer: q.correctAnswer,
          })),
        },
      },
    });

    console.log("New quiz created:", newQuiz);
    res.status(200);
    res.json(newQuiz);
  } catch (e) {
    throw e;
  }
}
