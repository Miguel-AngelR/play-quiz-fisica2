import { Clock } from "lucide-react";

interface TimerProps {
  timeLeft: number;
  totalTime: number;
}

export const Timer = ({ timeLeft, totalTime }: TimerProps) => {
  const percentage = (timeLeft / totalTime) * 100;
  const isLow = timeLeft <= 10;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <Clock className={`h-5 w-5 ${isLow ? "text-destructive" : "text-muted-foreground"}`} />
          <span className={`font-bold ${isLow ? "text-destructive" : "text-foreground"}`}>
            {timeLeft}s
          </span>
        </div>
        <span className="text-muted-foreground">30s</span>
      </div>
      
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ease-linear ${
            isLow ? "bg-destructive" : "bg-gradient-primary"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
