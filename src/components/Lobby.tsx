import { useState } from "react";
import { Zap, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AvatarSelector } from "./AvatarSelector";

interface LobbyProps {
  onStart: (playerName: string, avatar: string) => void;
}

export const Lobby = ({ onStart }: LobbyProps) => {
  const [playerName, setPlayerName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("⚡");

  const handleStart = () => {
    if (playerName.trim()) {
      onStart(playerName.trim(), selectedAvatar);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-3 sm:p-4 md:p-6 relative overflow-hidden pb-16">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-4xl sm:text-6xl animate-pulse-glow">⚛️</div>
        <div className="absolute top-20 right-20 text-3xl sm:text-4xl animate-pulse-glow delay-100">⚡</div>
        <div className="absolute bottom-20 left-1/4 text-4xl sm:text-5xl animate-pulse-glow delay-200">🔋</div>
        <div className="absolute bottom-32 right-1/3 text-4xl sm:text-6xl animate-pulse-glow delay-300">🧲</div>
        <div className="absolute top-1/3 right-10 text-3xl sm:text-4xl animate-pulse-glow">∿</div>
        <div className="absolute bottom-10 left-1/2 text-4xl sm:text-5xl animate-pulse-glow delay-100">⚙️</div>
      </div>

      <div className="max-w-2xl w-full space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in relative z-10">
        {/* Logo and Title */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <Zap className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary animate-bounce-subtle" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent px-2">
            Play Quiz Física II
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Pon a prueba tus conocimientos de electromagnetismo y circuitos
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-card border border-border space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <label className="block text-sm font-medium text-foreground">
              Tu nombre
            </label>
            <Input
              type="text"
              placeholder="Ingresa tu nombre..."
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleStart()}
              className="text-base sm:text-lg h-12 sm:h-14"
            />
          </div>

          <AvatarSelector
            selectedAvatar={selectedAvatar}
            onSelectAvatar={setSelectedAvatar}
          />

          <Button
            onClick={handleStart}
            disabled={!playerName.trim()}
            size="lg"
            className="w-full h-14 sm:h-16 text-lg sm:text-xl font-bold bg-gradient-primary hover:shadow-glow transition-all"
          >
            <Play className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
            Iniciar Cuestionario
          </Button>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">20</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Preguntas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-secondary">30s</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Por pregunta</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent">+100</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Puntos máx.</div>
            </div>
          </div>
        </div>

        {/* Info box */}
        <div className="bg-muted/30 rounded-lg p-3 sm:p-4 text-center text-xs sm:text-sm text-muted-foreground break-words">
          💡 Responde rápido para obtener más puntos • 🎯 3 fallos seguidos = Bendición
        </div>
      </div>
    </div>
  );
};
