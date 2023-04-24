import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Quiz } from "../interfaces";

//defining the fetchquizrequest function
async function fetchQuizesRequest() {
  const response = await fetch("/api/quiz");

  const data = await response.json();

  const { quiz } = data;

  return quiz;
}

export default function Home() {
  const { data: quizes } = useQuery(["quizes"], fetchQuizesRequest);
  const router = useRouter();

  return (
    <>
      <Navbar />
      <Head>
        <title>Haiqa Ashraf Tech Test</title>
      </Head>
      <main>
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-violet-200 to-pink-200 pt-4">
          <div className="w-64 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <Link href="/create">Create Quiz</Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-evenly bg-gradient-to-r from-violet-200 to-pink-200">
          {quizes &&
            quizes.map((quiz: Quiz) => (
              <>
                <div className="w-full max-w-sm bg-white border border-black-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-7">
                  <a href="#">
                    <Image
                      src="/images/quiztime.jpg"
                      alt="My Image"
                      width={500}
                      height={500}
                    />
                  </a>

                  <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      Title:
                    </h5>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {quiz.name}
                      </span>

                      <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => {
                          router.push({
                            pathname: `/quizes/${quiz.id}`,
                          });
                        }}
                      >
                        View Quiz
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
        <Footer />
      </main>
    </>
  );
}
