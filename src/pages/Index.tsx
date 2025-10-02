import { useState } from "react";
import { Lobby } from "@/components/Lobby";
import { QuizGame } from "@/components/QuizGame";
import { ResultsScreen } from "@/components/ResultsScreen";

type GameState = "lobby" | "playing" | "results";

interface GameData {
  playerName: string;
  avatar: string;
  finalScore: number;
  correctAnswers: number;
  totalQuestions: number;
}

const Index = () => {
  const [gameState, setGameState] = useState<GameState>("lobby");
  const [gameData, setGameData] = useState<GameData>({
    playerName: "",
    avatar: "⚡",
    finalScore: 0,
    correctAnswers: 0,
    totalQuestions: 0,
  });

  const handleStartGame = (playerName: string, avatar: string) => {
    setGameData((prev) => ({ ...prev, playerName, avatar }));
    setGameState("playing");
  };

  const handleFinishGame = (score: number, correctAnswers: number, totalQuestions: number) => {
    setGameData((prev) => ({
      ...prev,
      finalScore: score,
      correctAnswers,
      totalQuestions,
    }));
    setGameState("results");
  };

  const handleRestart = () => {
    setGameState("playing");
  };

  const handleExit = () => {
    setGameState("lobby");
    setGameData({
      playerName: "",
      avatar: "⚡",
      finalScore: 0,
      correctAnswers: 0,
      totalQuestions: 0,
    });
  };

  return (
    <>
      {gameState === "lobby" && <Lobby onStart={handleStartGame} />}
      
      {gameState === "playing" && (
        <QuizGame
          playerName={gameData.playerName}
          avatar={gameData.avatar}
          onExit={handleExit}
          onFinish={handleFinishGame}
        />
      )}
      
      {gameState === "results" && (
        <ResultsScreen
          playerName={gameData.playerName}
          avatar={gameData.avatar}
          score={gameData.finalScore}
          correctAnswers={gameData.correctAnswers}
          totalQuestions={gameData.totalQuestions}
          onRestart={handleRestart}
          onExit={handleExit}
        />
      )}
    </>
  );
};

export default Index;
