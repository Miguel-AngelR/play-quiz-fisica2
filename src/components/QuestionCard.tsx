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
    <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-card border border-border space-y-4 sm:space-y-6 animate-fade-in">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-relaxed break-words">
        {question.question}
      </h2>

      <div className="grid gap-3 sm:gap-4">
        {displayOptions.map(({ opt, idx }) => {
          const isCorrect = idx === correctAnswer;
          const isSelected = answered;
          
          let buttonVariant: "default" | "outline" = "outline";
          let extraClasses = "";

          if (answered) {
            if (isCorrect) {
              extraClasses = "bg-success hover:bg-success text-success-foreground border-success";
            } else {
              extraClasses = "bg-destructive/20 border-destructive/50 hover:bg-destructive/20";
            }
          }

          return (
            <Button
              key={idx}
              variant={buttonVariant}
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                e.currentTarget.blur();
                onAnswer(idx);
              }}
              disabled={answered}
              className={`
                answer-button
                h-auto py-3 sm:py-4 px-4 sm:px-6 text-left justify-start text-sm sm:text-base md:text-lg
                transition-all active:scale-95 sm:hover:scale-105 hover:shadow-card
                focus:outline-none active:outline-none focus:ring-0 active:ring-0
                ${extraClasses}
                ${answered ? 'cursor-default' : 'cursor-pointer'}
              `}
            >
              <span className="flex items-center gap-2 sm:gap-3 w-full">
                {answered && isCorrect && (
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                )}
                {answered && !isCorrect && idx === correctAnswer && (
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                )}
                {answered && !isCorrect && idx !== correctAnswer && (
                  <XCircle className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                )}
                <span className="flex-1 break-words">{opt}</span>
              </span>
            </Button>
          );
        })}
      </div>

      {answered && question.explanation && (
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-muted/30 rounded-lg border border-border animate-slide-up">
          <p className="text-xs sm:text-sm text-muted-foreground break-words">
            <span className="font-semibold text-foreground">💡 Explicación: </span>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};
