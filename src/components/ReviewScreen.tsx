import { Question } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Home } from "lucide-react";

interface ReviewScreenProps {
  questions: Question[];
  userAnswers: (number | null)[];
  onExit: () => void;
}

export const ReviewScreen = ({ questions, userAnswers, onExit }: ReviewScreenProps) => {
  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 pb-16">
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Revisión de Respuestas
          </h1>
          <Button variant="outline" onClick={onExit} size="sm" className="w-full sm:w-auto">
            <Home className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </div>

        {/* Questions Review */}
        <div className="space-y-4 sm:space-y-6">
          {questions.map((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            return (
              <div
                key={question.id}
                className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-card border border-border space-y-3 sm:space-y-4"
              >
                {/* Question Number and Status */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className={`
                    flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold
                    ${isCorrect ? 'bg-success text-success-foreground' : 'bg-destructive text-destructive-foreground'}
                  `}>
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground break-words">
                      {question.question}
                    </h3>
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-2 sm:space-y-3 pl-0 sm:pl-11">
                  {question.options.map((option, optIndex) => {
                    const isUserAnswer = userAnswer === optIndex;
                    const isCorrectAnswer = optIndex === question.correctAnswer;
                    
                    let bgColor = "";
                    let icon = null;
                    
                    if (isCorrectAnswer) {
                      bgColor = "bg-success/20 border-success";
                      icon = <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-success flex-shrink-0" />;
                    } else if (isUserAnswer && !isCorrect) {
                      bgColor = "bg-destructive/20 border-destructive";
                      icon = <XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-destructive flex-shrink-0" />;
                    }
                    
                    return (
                      <div
                        key={optIndex}
                        className={`
                          p-3 sm:p-4 rounded-lg border-2 flex items-start gap-2 sm:gap-3
                          ${bgColor || 'bg-muted/30 border-border/50'}
                        `}
                      >
                        {icon}
                        <span className="text-sm sm:text-base text-foreground break-words flex-1">
                          {option}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* User Answer Summary */}
                <div className="pl-0 sm:pl-11 space-y-2 text-xs sm:text-sm">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-foreground">Tu respuesta:</span>
                    <span className={isCorrect ? 'text-success font-medium' : 'text-destructive font-medium'}>
                      {userAnswer !== null ? question.options[userAnswer] : 'Sin respuesta'}
                    </span>
                  </div>
                  {!isCorrect && (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-foreground">Respuesta correcta:</span>
                      <span className="text-success font-medium">
                        {question.options[question.correctAnswer]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Explanation */}
                {question.explanation && (
                  <div className="pl-0 sm:pl-11 p-3 sm:p-4 bg-muted/30 rounded-lg border border-border">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">💡 Explicación: </span>
                      {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
