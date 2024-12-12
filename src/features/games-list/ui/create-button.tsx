import { Button } from "@/shared/ui/button";
import React from "react";

export const CreateButton = ({ action }: { action: () => Promise<void> }) => {
  return <Button onClick={action}>Создать игру</Button>;
};
