"use client";

import { mapLeft, right } from "@/shared/lib/either";
import { useActionState } from "@/shared/lib/react";
import { Button } from "@/shared/ui/button";
import { createGameAction } from "../actions/create-game";
import { startTransition } from "react";

export const CreateButton = () => {
  const [data, dispatch, isPending] = useActionState(
    createGameAction,
    right(undefined),
  );

  return (
    <Button
      disabled={isPending}
      onClick={() => startTransition(dispatch)}
      error={mapLeft(
        data,
        (e) =>
          ({
            ["can-create-only-one-game"]: "Нельзя создать больше одной игры",
            ["user-not-found"]: "Пользователь не найден",
          })[e],
      )}
    >
      Создать игру
    </Button>
  );
};
