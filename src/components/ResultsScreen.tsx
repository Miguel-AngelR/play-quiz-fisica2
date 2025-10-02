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
}

export const ResultsScreen = ({
  playerName,
  avatar,
  score,
  correctAnswers,
  totalQuestions,
  onRestart,
  onExit,
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
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl animate-pulse-glow">{getIcon()}</div>
        <div className="absolute bottom-10 right-10 text-8xl animate-pulse-glow delay-100">{getIcon()}</div>
        <div className="absolute top-1/2 left-1/4 text-6xl animate-pulse-glow delay-200">⚡</div>
        <div className="absolute top-1/3 right-1/4 text-6xl animate-pulse-glow delay-300">🧲</div>
      </div>

      <div className="max-w-3xl w-full space-y-8 animate-fade-in relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-8xl mb-4 animate-bounce-subtle">{avatar}</div>
          <h1 className="text-5xl font-bold text-foreground">
            ¡Juego Completado!
          </h1>
          <p className="text-2xl text-muted-foreground">{playerName}</p>
        </div>

        {/* Main Results Card */}
        <div className="bg-card rounded-2xl p-8 shadow-card border border-border space-y-6">
          {/* Message */}
          <div className="text-center space-y-2">
            <div className="text-6xl">{getIcon()}</div>
            <h2 className="text-3xl font-bold text-foreground">
              {getMessage()}
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 py-6">
            <div className="text-center">
              <Zap className="h-12 w-12 mx-auto mb-2 text-primary" />
              <div className="text-4xl font-bold text-primary">{score}</div>
              <div className="text-sm text-muted-foreground">Puntos totales</div>
            </div>

            <div className="text-center">
              <Trophy className="h-12 w-12 mx-auto mb-2 text-secondary" />
              <div className="text-4xl font-bold text-secondary">{level}</div>
              <div className="text-sm text-muted-foreground">Nivel alcanzado</div>
            </div>

            <div className="text-center">
              <Target className="h-12 w-12 mx-auto mb-2 text-accent" />
              <div className="text-4xl font-bold text-accent">{correctAnswers}/{totalQuestions}</div>
              <div className="text-sm text-muted-foreground">Correctas</div>
            </div>
          </div>

          {/* Percentage Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Precisión</span>
              <span className="font-bold text-foreground">{percentage.toFixed(1)}%</span>
            </div>
            <div className="h-4 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-success transition-all duration-1000"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              onClick={onRestart}
              size="lg"
              className="flex-1 h-14 text-lg bg-gradient-primary hover:shadow-glow"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Jugar de nuevo
            </Button>
            <Button
              onClick={onExit}
              variant="outline"
              size="lg"
              className="flex-1 h-14 text-lg"
            >
              <Home className="mr-2 h-5 w-5" />
              Volver al inicio
            </Button>
          </div>
        </div>

        {/* Fun fact */}
        <div className="bg-muted/30 rounded-lg p-4 text-center text-sm text-muted-foreground">
          💡 Dato curioso: La velocidad de las ondas electromagnéticas en el vacío es de 299,792,458 m/s
        </div>
      </div>
    </div>
  );
};
