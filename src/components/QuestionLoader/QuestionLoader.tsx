import { Question } from "~/api/exam";
import { ModelProps } from "./templates";
import { Model2 } from "./templates/Model2";

type QuestionLoaderProps = ModelProps;

export function QuestionLoader({ question, onAnswer }: QuestionLoaderProps) {
  const commonProps = {
    question,
    onAnswer,
  };

  switch (question.model) {
    case "MODEL2":
      return <Model2 {...commonProps} />;
    case "MODEL4":
      return <h1>Question MODEL4</h1>;
    default:
      return <h1>Question NULL</h1>;
  }
}
