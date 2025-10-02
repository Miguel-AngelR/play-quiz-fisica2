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
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-pulse-glow">⚛️</div>
        <div className="absolute top-20 right-20 text-4xl animate-pulse-glow delay-100">⚡</div>
        <div className="absolute bottom-20 left-1/4 text-5xl animate-pulse-glow delay-200">🔋</div>
        <div className="absolute bottom-32 right-1/3 text-6xl animate-pulse-glow delay-300">🧲</div>
        <div className="absolute top-1/3 right-10 text-4xl animate-pulse-glow">∿</div>
        <div className="absolute bottom-10 left-1/2 text-5xl animate-pulse-glow delay-100">⚙️</div>
      </div>

      <div className="max-w-2xl w-full space-y-8 animate-fade-in relative z-10">
        {/* Logo and Title */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-16 h-16 text-primary animate-bounce-subtle" />
          </div>
          <h1 className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Play Quiz Física II
          </h1>
          <p className="text-xl text-muted-foreground">
            Pon a prueba tus conocimientos de electromagnetismo y circuitos
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-card rounded-2xl p-8 shadow-card border border-border space-y-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-foreground">
              Tu nombre
            </label>
            <Input
              type="text"
              placeholder="Ingresa tu nombre..."
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleStart()}
              className="text-lg h-14"
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
            className="w-full h-16 text-xl font-bold bg-gradient-primary hover:shadow-glow transition-all"
          >
            <Play className="mr-2 h-6 w-6" />
            Iniciar Cuestionario
          </Button>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">20</div>
              <div className="text-sm text-muted-foreground">Preguntas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">30s</div>
              <div className="text-sm text-muted-foreground">Por pregunta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">+100</div>
              <div className="text-sm text-muted-foreground">Puntos máx.</div>
            </div>
          </div>
        </div>

        {/* Info box */}
        <div className="bg-muted/30 rounded-lg p-4 text-center text-sm text-muted-foreground">
          💡 Responde rápido para obtener más puntos • 🎯 3 fallos seguidos = Bendición
        </div>
      </div>
    </div>
  );
};
