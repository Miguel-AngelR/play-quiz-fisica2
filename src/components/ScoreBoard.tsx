import { Trophy, Zap } from "lucide-react";

interface ScoreBoardProps {
  score: number;
  level: number;
}

export const ScoreBoard = ({ score, level }: ScoreBoardProps) => {
  return (
    <div className="flex items-center gap-3 sm:gap-4 md:gap-6 bg-card rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 border border-border shadow-card">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
        <div>
          <div className="text-[9px] sm:text-xs text-muted-foreground">Puntos</div>
          <div className="text-base sm:text-xl md:text-2xl font-bold text-primary">{score}</div>
        </div>
      </div>
      
      <div className="h-8 sm:h-10 w-px bg-border" />
      
      <div className="flex items-center gap-1.5 sm:gap-2">
        <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-secondary shrink-0" />
        <div>
          <div className="text-[9px] sm:text-xs text-muted-foreground">Nivel</div>
          <div className="text-base sm:text-xl md:text-2xl font-bold text-secondary">{level}</div>
        </div>
      </div>
    </div>
  );
};
