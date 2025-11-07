import { Trophy, Zap, Target, Home, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResultsScreenProps {
  playerName: string;
  avatar: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  onRestart: () => void;
  onExit: () => void;
  onReview: () => void;
}

export const ResultsScreen = ({
  playerName,
  avatar,
  score,
  correctAnswers,
  totalQuestions,
  onRestart,
  onExit,
  onReview,
}: ResultsScreenProps) => {
  const percentage = (correctAnswers / totalQuestions) * 100;
  const level = Math.floor(score / 100) + 1;

  const getMessage = () => {
    if (percentage >= 90) return "¡Excelente! Dominas Física II 🏆";
    if (percentage >= 75) return "¡Muy bien! Gran desempeño ⚡";
    if (percentage >= 60) return "¡Buen trabajo! Sigue practicando 💡";
    if (percentage >= 40) return "Sigue intentando, vas mejorando 🎯";
    return "¡No te rindas! La práctica hace al maestro 🔋";
  };

  const getIcon = () => {
    if (percentage >= 90) return "🏆";
    if (percentage >= 75) return "⚡";
    if (percentage >= 60) return "💡";
    if (percentage >= 40) return "🎯";
    return "🔋";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-3 sm:p-4 md:p-6 relative overflow-hidden pb-16">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-5xl sm:text-8xl animate-pulse-glow">{getIcon()}</div>
        <div className="absolute bottom-10 right-10 text-5xl sm:text-8xl animate-pulse-glow delay-100">{getIcon()}</div>
        <div className="absolute top-1/2 left-1/4 text-4xl sm:text-6xl animate-pulse-glow delay-200">⚡</div>
        <div className="absolute top-1/3 right-1/4 text-4xl sm:text-6xl animate-pulse-glow delay-300">🧲</div>
      </div>

      <div className="max-w-3xl w-full space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-7xl md:text-8xl mb-3 sm:mb-4 animate-bounce-subtle">{avatar}</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground px-2">
            ¡Juego Completado!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground truncate px-2">{playerName}</p>
        </div>

        {/* Main Results Card */}
        <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-card border border-border space-y-4 sm:space-y-6">
          {/* Message */}
          <div className="text-center space-y-2">
            <div className="text-4xl sm:text-5xl md:text-6xl">{getIcon()}</div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground px-2 break-words">
              {getMessage()}
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 py-4 sm:py-6">
            <div className="text-center">
              <Zap className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-1 sm:mb-2 text-primary" />
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{score}</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Puntos totales</div>
            </div>

            <div className="text-center">
              <Trophy className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-1 sm:mb-2 text-secondary" />
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">{level}</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Nivel alcanzado</div>
            </div>

            <div className="text-center">
              <Target className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-1 sm:mb-2 text-accent" />
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">{correctAnswers}/{totalQuestions}</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Correctas</div>
            </div>
          </div>

          {/* Percentage Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="text-muted-foreground">Precisión</span>
              <span className="font-bold text-foreground">{percentage.toFixed(1)}%</span>
            </div>
            <div className="h-3 sm:h-4 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-success transition-all duration-1000"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Button
              onClick={onReview}
              size="lg"
              variant="outline"
              className="flex-1 h-12 sm:h-14 text-sm sm:text-base md:text-lg"
            >
              <Target className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Ver resumen
            </Button>
            <Button
              onClick={onRestart}
              size="lg"
              className="flex-1 h-12 sm:h-14 text-sm sm:text-base md:text-lg bg-gradient-primary hover:shadow-glow"
            >
              <RotateCcw className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Jugar de nuevo
            </Button>
            <Button
              onClick={onExit}
              variant="outline"
              size="lg"
              className="flex-1 h-12 sm:h-14 text-sm sm:text-base md:text-lg"
            >
              <Home className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Inicio
            </Button>
          </div>
        </div>

        {/* Fun fact */}
        <div className="bg-muted/30 rounded-lg p-3 sm:p-4 text-center text-xs sm:text-sm text-muted-foreground break-words">
          💡 Dato curioso: La velocidad de las ondas electromagnéticas en el vacío es de 299,792,458 m/s
        </div>
      </div>
    </div>
  );
};
