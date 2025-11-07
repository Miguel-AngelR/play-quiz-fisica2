import { useState } from "react";
import { Lobby } from "@/components/Lobby";
import { QuizGame } from "@/components/QuizGame";
import { ResultsScreen } from "@/components/ResultsScreen";
import { ReviewScreen } from "@/components/ReviewScreen";
import { Credits } from "@/components/Credits";
import { questions } from "@/data/questions";

type GameState = "lobby" | "playing" | "results" | "review";

interface GameData {
  playerName: string;
  avatar: string;
  finalScore: number;
  correctAnswers: number;
  totalQuestions: number;
  userAnswers: (number | null)[];
}

const Index = () => {
  const [gameState, setGameState] = useState<GameState>("lobby");
  const [gameData, setGameData] = useState<GameData>({
    playerName: "",
    avatar: "⚡",
    finalScore: 0,
    correctAnswers: 0,
    totalQuestions: 0,
    userAnswers: [],
  });

  const handleStartGame = (playerName: string, avatar: string) => {
    setGameData((prev) => ({ ...prev, playerName, avatar }));
    setGameState("playing");
  };

  const handleFinishGame = (
    score: number,
    correctAnswers: number,
    totalQuestions: number,
    userAnswers: (number | null)[]
  ) => {
    setGameData((prev) => ({
      ...prev,
      finalScore: score,
      correctAnswers,
      totalQuestions,
      userAnswers,
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
      userAnswers: [],
    });
  };

  const handleReview = () => {
    setGameState("review");
  };

  return (
    <>
      {gameState === "lobby" && (
        <>
          <Lobby onStart={handleStartGame} />
          <Credits />
        </>
      )}
      
      {gameState === "playing" && (
        <>
          <QuizGame
            playerName={gameData.playerName}
            avatar={gameData.avatar}
            onExit={handleExit}
            onFinish={handleFinishGame}
          />
          <Credits />
        </>
      )}
      
      {gameState === "results" && (
        <>
          <ResultsScreen
            playerName={gameData.playerName}
            avatar={gameData.avatar}
            score={gameData.finalScore}
            correctAnswers={gameData.correctAnswers}
            totalQuestions={gameData.totalQuestions}
            onRestart={handleRestart}
            onExit={handleExit}
            onReview={handleReview}
          />
          <Credits />
        </>
      )}

      {gameState === "review" && (
        <>
          <ReviewScreen
            questions={questions}
            userAnswers={gameData.userAnswers}
            onExit={handleExit}
          />
          <Credits />
        </>
      )}
    </>
  );
};

export default Index;
