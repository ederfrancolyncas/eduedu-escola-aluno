import { Button, Loader, Stack } from "@mantine/core";
import { exam } from "./mocks/exam";
import { useState } from "react";
import { produce } from "immer";
import { Question } from "~/api/exam";
import { QuestionLoader } from "~/components/QuestionLoader/QuestionLoader";

type Answers = {
  [key: string]: {
    answer: string;
    isCorrect: boolean;
  };
};

export function ExamPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswer] = useState<Answers>({});

  const isLoading = false;

  function getQuestion(): Question {
    return exam.questions[currentIndex] as Question;
  }

  function nextQuestion() {
    setCurrentIndex((prev) => prev + 1);
  }

  function onAnswer(answer: string, isCorrect: boolean) {
    setAnswer(
      produce((draft) => {
        draft[currentIndex] = {
          answer,
          isCorrect,
        };
      })
    );
  }

  return (
    <Stack>
      {isLoading && <Loader />}
      <QuestionLoader question={getQuestion()} onAnswer={onAnswer} />
      <Button onClick={nextQuestion}>Next</Button>
    </Stack>
  );
}
