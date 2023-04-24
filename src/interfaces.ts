export interface Quiz {
  id: string;
  name: string;
  questions: Question[];
}

export interface Question {
  id: number;
  text: string;
  answers: [];
  correctAnswer: number;
}
export interface PageProps {
  params: {
    pid: string;
  };
}

export interface QuizProps {
  quiz: Quiz;
}
