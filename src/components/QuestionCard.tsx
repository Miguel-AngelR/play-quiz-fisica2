import { Question } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  onAnswer: (index: number) => void;
  answered: boolean;
  correctAnswer: number;
  blessingActive: boolean;
}

export const QuestionCard = ({
  question,
  onAnswer,
  answered,
  correctAnswer,
  blessingActive,
}: QuestionCardProps) => {
  // Si blessing está activo, mostrar solo 2 opciones (la correcta y otra aleatoria)
  const displayOptions = blessingActive
    ? question.options
        .map((opt, idx) => ({ opt, idx }))
        .filter((item) => item.idx === correctAnswer || Math.random() > 0.5)
        .slice(0, 2)
    : question.options.map((opt, idx) => ({ opt, idx }));

  return (
    <div className="bg-card rounded-2xl p-8 shadow-card border border-border space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-foreground leading-relaxed">
        {question.question}
      </h2>

      <div className="grid gap-4">
        {displayOptions.map(({ opt, idx }) => {
          const isCorrect = idx === correctAnswer;
          const isSelected = answered;
          
          let buttonVariant: "default" | "outline" = "outline";
          let extraClasses = "";

          if (answered) {
            if (isCorrect) {
              extraClasses = "bg-success hover:bg-success text-success-foreground border-success";
            } else {
              extraClasses = "bg-destructive/20 border-destructive/50";
            }
          }

          return (
            <Button
              key={idx}
              variant={buttonVariant}
              size="lg"
              onClick={() => onAnswer(idx)}
              disabled={answered}
              className={`
                h-auto py-4 px-6 text-left justify-start text-lg
                transition-all hover:scale-105 hover:shadow-card
                ${extraClasses}
              `}
            >
              <span className="flex items-center gap-3 w-full">
                {answered && isCorrect && (
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                )}
                {answered && !isCorrect && idx === correctAnswer && (
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                )}
                {answered && !isCorrect && idx !== correctAnswer && (
                  <XCircle className="h-6 w-6 flex-shrink-0" />
                )}
                <span className="flex-1">{opt}</span>
              </span>
            </Button>
          );
        })}
      </div>

      {answered && question.explanation && (
        <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border animate-slide-up">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">💡 Explicación: </span>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};
