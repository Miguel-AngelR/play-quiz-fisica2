import { Trophy, Zap } from "lucide-react";

interface ScoreBoardProps {
  score: number;
  level: number;
}

export const ScoreBoard = ({ score, level }: ScoreBoardProps) => {
  return (
    <div className="flex items-center gap-6 bg-card rounded-xl px-6 py-3 border border-border shadow-card">
      <div className="flex items-center gap-2">
        <Zap className="h-5 w-5 text-primary" />
        <div>
          <div className="text-xs text-muted-foreground">Puntos</div>
          <div className="text-2xl font-bold text-primary">{score}</div>
        </div>
      </div>
      
      <div className="h-10 w-px bg-border" />
      
      <div className="flex items-center gap-2">
        <Trophy className="h-5 w-5 text-secondary" />
        <div>
          <div className="text-xs text-muted-foreground">Nivel</div>
          <div className="text-2xl font-bold text-secondary">{level}</div>
        </div>
      </div>
    </div>
  );
};
