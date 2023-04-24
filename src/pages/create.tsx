import Link from "next/link";
import path from "path";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Quiz, Question } from "../interfaces";

type Props = {
  onSubmit: (questions: Question[]) => void;
};

const QuizForm = ({ onSubmit }: Props) => {
  const router = useRouter();
  const [quiz, setQuiz] = useState<Quiz[]>({
    name: "Quiz 1",
    questions: [{ id: 1, text: "", answers: ["", ""], correctAnswer: 0 }],
  });

  const addQuestion = (event) => {
    event.preventDefault();
    setQuiz({
      ...quiz,
      questions: [
        ...quiz.questions,
        {
          id: quiz.questions.length + 1,
          text: "",
          answers: ["", ""],
          correctAnswer: 0,
        },
      ],
    });
  };

  const handleQuizNameChange = (name: string) => {
    setQuiz((prevState) => ({
      ...prevState,
      name: name,
    }));
  };

  const handleQuestionChange = (id: number, question: string) => {
    // find the question you want to update by its ID
    const questionToUpdate = quiz.questions.find((q) => q.id === id);

    if (questionToUpdate) {
      // create a new question object with the updated value
      const updatedQuestion = {
        ...questionToUpdate,
        text: question,
      };

      // create a new questions array with the updated question object
      const updatedQuestions = quiz.questions.map((q) =>
        q.id === id ? updatedQuestion : q
      );

      // create a new quiz object with the updated questions array
      const updatedQuiz = {
        ...quiz,
        questions: updatedQuestions,
      };

      // update the state with the new quiz object
      setQuiz(updatedQuiz);
    }
  };

  const handleAnswerChange = (
    id: number,
    answerIndex: number,
    answer: string
  ) => {
    // find the question you want to update by its ID
    const questionToUpdate = quiz.questions.find((q) => q.id === id);

    if (questionToUpdate) {
      // create a new answers array with the updated answer at the desired index
      const updatedAnswers = [...questionToUpdate.answers];
      updatedAnswers[answerIndex] = answer;

      // create a new question object with the updated answers array
      const updatedQuestion = {
        ...questionToUpdate,
        answers: updatedAnswers,
      };

      // create a new questions array with the updated question object
      const updatedQuestions = quiz.questions.map((q) =>
        q.id === id ? updatedQuestion : q
      );

      // create a new quiz object with the updated questions array
      const updatedQuiz = {
        ...quiz,
        questions: updatedQuestions,
      };

      // update the state with the new quiz object
      setQuiz(updatedQuiz);
    }
  };

  const handleCorrectAnswerChange = (id: number, correctAnswer: number) => {
    // find the question you want to update by its ID
    const questionToUpdate = quiz.questions.find((q) => q.id === id);

    if (questionToUpdate) {
      // create a new question object with the updated value
      const updatedQuestion = {
        ...questionToUpdate,
        correctAnswer: correctAnswer,
      };

      // create a new questions array with the updated question object
      const updatedQuestions = quiz.questions.map((q) =>
        q.id === id ? updatedQuestion : q
      );

      // create a new quiz object with the updated questions array
      const updatedQuiz = {
        ...quiz,
        questions: updatedQuestions,
      };

      // update the state with the new quiz object
      setQuiz(updatedQuiz);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(quiz);
    try {
      const response = await fetch("/api/quiz/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quiz),
      });
      const data = await response.json();
      console.log("Quiz added to the database:", data);
      router.push("/");
    } catch (e) {
      console.error("Error adding quiz to the database:", e);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container flex mx-auto justify-center my-5">
        <div class="flex flex-col w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="w-full mb-6 md:mb-0 pb-5">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="title"
              >
                Quiz Title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="title"
                type="text"
                onChange={(event) => handleQuizNameChange(event.target.value)}
                placeholder="type here"
              />
            </div>

            <div className="w-full flex flex-wrap flex-col mb-6">
              <div className="flex flex-row mb-5 pb-5 border-b-2 border-black-500 justify-between">
                <h2 className="text-xl">Questions </h2>
                <button
                  onClick={addQuestion}
                  className="px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-700 text-white"
                >
                  Add question
                </button>
              </div>
              {quiz.questions.map((question, index) => (
                <>
                  <div
                    className="border-b-4 pt-5 border-dotted"
                    key={question.id}
                  >
                    <div className="w-full mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="question-1"
                      >
                        Question {index + 1}
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="question-1"
                        type="text"
                        value={question.text}
                        onChange={(event) =>
                          handleQuestionChange(question.id, event.target.value)
                        }
                        placeholder="type here"
                      />
                    </div>
                    <div className="w-full mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="question-1-answer"
                      >
                        Answer 1
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="question-1-answer"
                        type="text"
                        value={question.answers[0]}
                        onChange={(event) =>
                          handleAnswerChange(question.id, 0, event.target.value)
                        }
                        placeholder="type here"
                      />
                    </div>

                    <div className="w-full mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="question-1-answer"
                      >
                        Answer 2
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="question-1-answer"
                        type="text"
                        value={question.answers[1]}
                        onChange={(event) =>
                          handleAnswerChange(question.id, 1, event.target.value)
                        }
                        placeholder="type here"
                      />
                    </div>

                    <div className="w-full mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="question-1-answer"
                      >
                        Correct Answer
                      </label>
                      <select
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="question-1-answer"
                        value={question.correctAnswer}
                        onChange={(event) =>
                          handleCorrectAnswerChange(
                            question.id,
                            Number(event.target.value)
                          )
                        }
                      >
                        <option value="0">Answer 1</option>
                        <option value="1">Answer 2</option>
                      </select>
                    </div>
                  </div>
                </>
              ))}
            </div>

            <button className="justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
                
      </div>
      <Footer />
    </>
  );
};

export default QuizForm;
