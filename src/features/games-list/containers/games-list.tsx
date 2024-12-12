import { getIdleGames } from "@/entities/game/server";
import React from "react";
import { Layout } from "../ui/layout";
import { GameCard } from "../ui/game-card";
import { CreateButton } from "../ui/create-button";

export const GamesList = async () => {
  const games = await getIdleGames();
  return (
    <Layout actions={<CreateButton action={createGameAction} />}>
      {games.map((game) => (
        <GameCard
          key={game.id}
          login={game.creator.login}
          rating={game.creator.rating}
        />
      ))}
    </Layout>
  );
};
