import { useRouter } from "next/router";
import { Question, PageProps, QuizProps } from "../../interfaces";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export async function getStaticProps({ params }: PageProps) {
  const id = parseInt(params.pid as string);
  //  const name = query.name as string;

  const res = await fetch(`http://localhost:3000/api/quiz/getquiz?id=${id}`);
  const newresponse = await res.json();

  return {
    props: {
      quiz: newresponse.quiz,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking", //indicates the type of fallback
  };
}

const QuizPage = ({ quiz }: QuizProps) => {
  const router = useRouter();
  console.log(quiz);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <div className="bg-white rounded-lg shadow-lg p-6 bg-gradient-to-r from-violet-200 to-pink-200">
        <p className="font-bold text-lg mb-4">Quiz ID: {quiz.id}</p>
        <p className="mb-4">Name: {quiz.name}</p>
        <div>
          {quiz.questions.map((question: Question) => (
            <div className="border-t border-gray-200 py-4" key={question.id}>
              <p className="font-bold mb-2">Question: {question.text}</p>
              <div className="ml-4">
                {JSON.parse(question.answers).map((answer, index) => (
                  <p className="mb-1" key={index}>
                    {answer}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QuizPage;
