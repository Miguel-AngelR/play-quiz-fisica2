import { Clock } from "lucide-react";

interface TimerProps {
  timeLeft: number;
  totalTime: number;
}

export const Timer = ({ timeLeft, totalTime }: TimerProps) => {
  const percentage = (timeLeft / totalTime) * 100;
  const isLow = timeLeft <= 10;

  return (
    <div className="space-y-1.5 sm:space-y-2">
      <div className="flex items-center justify-between text-xs sm:text-sm">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Clock className={`h-4 w-4 sm:h-5 sm:w-5 ${isLow ? "text-destructive" : "text-muted-foreground"}`} />
          <span className={`font-bold ${isLow ? "text-destructive" : "text-foreground"}`}>
            {timeLeft}s
          </span>
        </div>
        <span className="text-muted-foreground">30s</span>
      </div>
      
      <div className="h-2.5 sm:h-3 bg-muted rounded-full overflow-hidden">
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
