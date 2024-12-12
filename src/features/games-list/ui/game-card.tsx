import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

type Props = {
  login: string;
  rating: number;
};

export const GameCard = ({ login, rating }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle> Игра с {login}</CardTitle>
      </CardHeader>
      <CardContent>Рейтинг: {rating}</CardContent>
    </Card>
  );
};
