import { useState, useEffect } from "react";
import { questions, Question } from "@/data/questions";
import { QuestionCard } from "./QuestionCard";
import { ScoreBoard } from "./ScoreBoard";
import { Timer } from "./Timer";
import { Button } from "@/components/ui/button";
import { Home, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface QuizGameProps {
  playerName: string;
  avatar: string;
  onExit: () => void;
  onFinish: (score: number, correctAnswers: number, totalQuestions: number) => void;
}

interface QuestionState {
  question: Question;
  answered: boolean;
  correct?: boolean;
}

export const QuizGame = ({ playerName, avatar, onExit, onFinish }: QuizGameProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [consecutiveFails, setConsecutiveFails] = useState(0);
  const [blessingActive, setBlessingActive] = useState(false);
  const [incorrectQuestions, setIncorrectQuestions] = useState<Question[]>([]);
  const [questionStates, setQuestionStates] = useState<QuestionState[]>(
    questions.map((q) => ({ question: q, answered: false }))
  );
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRetryPhase, setIsRetryPhase] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const currentQuestion = questionStates[currentIndex]?.question;
  const totalQuestions = questionStates.length;

  useEffect(() => {
    if (!currentQuestion) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeout();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, currentQuestion]);

  const handleTimeout = () => {
    toast.error("¡Tiempo agotado!", {
      description: "Se resta 10 puntos",
    });
    
    setScore((prev) => Math.max(0, prev - 10));
    setConsecutiveFails((prev) => prev + 1);
    
    if (!isRetryPhase) {
      setIncorrectQuestions((prev) => [...prev, currentQuestion]);
    }
    
    moveToNextQuestion();
  };

  const handleAnswer = (selectedIndex: number) => {
    if (questionStates[currentIndex].answered) return;

    const isCorrect = selectedIndex === currentQuestion.correctAnswer;
    const timeBonus = Math.floor((timeLeft / 30) * 50);
    const pointsEarned = isCorrect ? 50 + timeBonus : 0;

    setQuestionStates((prev) => {
      const newStates = [...prev];
      newStates[currentIndex] = {
        ...newStates[currentIndex],
        answered: true,
        correct: isCorrect,
      };
      return newStates;
    });

    if (isCorrect) {
      setScore((prev) => prev + pointsEarned);
      setConsecutiveFails(0);
      setCorrectCount((prev) => prev + 1);
      setBlessingActive(false);
      toast.success("¡Correcto! ⚡", {
        description: `+${pointsEarned} puntos`,
      });
    } else {
      const newFails = consecutiveFails + 1;
      setConsecutiveFails(newFails);
      setScore((prev) => Math.max(0, prev - 20));
      
      if (!isRetryPhase) {
        setIncorrectQuestions((prev) => [...prev, currentQuestion]);
      }

      if (newFails >= 3) {
        setBlessingActive(true);
        toast("🌟 ¡Bendición activada!", {
          description: "La próxima pregunta tendrá menos opciones",
        });
      } else {
        toast.error("Incorrecto", {
          description: "-20 puntos",
        });
      }
    }

    setTimeout(() => moveToNextQuestion(), 2000);
  };

  const moveToNextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setTimeLeft(30);
    } else {
      // Primera fase completada
      if (!isRetryPhase && incorrectQuestions.length > 0) {
        toast("🔄 Ronda de recuperación", {
          description: "Intenta de nuevo las preguntas incorrectas",
        });
        
        setIsRetryPhase(true);
        setQuestionStates(
          incorrectQuestions.map((q) => ({ question: q, answered: false }))
        );
        setCurrentIndex(0);
        setTimeLeft(30);
      } else {
        // Juego terminado
        onFinish(score, correctCount, questions.length);
      }
    }
  };

  const handleExit = () => {
    if (window.confirm("¿Seguro que quieres abandonar? Se perderá tu progreso.")) {
      onExit();
    }
  };

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{avatar}</span>
            <div>
              <div className="font-bold text-lg">{playerName}</div>
              <div className="text-sm text-muted-foreground">
                Pregunta {currentIndex + 1} de {totalQuestions}
              </div>
            </div>
          </div>

          <ScoreBoard score={score} level={Math.floor(score / 100) + 1} />

          <Button variant="outline" onClick={handleExit} size="sm">
            <Home className="mr-2 h-4 w-4" />
            Salir
          </Button>
        </div>
      </div>

      {/* Blessing Notification */}
      {blessingActive && (
        <div className="max-w-4xl mx-auto mb-4 animate-slide-up">
          <div className="bg-gradient-success rounded-lg p-4 flex items-center justify-center gap-2 shadow-glow">
            <Sparkles className="h-6 w-6 text-success-foreground" />
            <span className="font-bold text-success-foreground">
              ¡Bendición activada! Esta pregunta tiene menos opciones
            </span>
            <Sparkles className="h-6 w-6 text-success-foreground" />
          </div>
        </div>
      )}

      {/* Timer */}
      <div className="max-w-4xl mx-auto mb-6">
        <Timer timeLeft={timeLeft} totalTime={30} />
      </div>

      {/* Question */}
      <div className="max-w-4xl mx-auto">
        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          answered={questionStates[currentIndex].answered}
          correctAnswer={currentQuestion.correctAnswer}
          blessingActive={blessingActive}
        />
      </div>
    </div>
  );
};
