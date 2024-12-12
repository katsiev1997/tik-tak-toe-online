import React from "react";

type Props = { children: React.ReactNode; actions: React.ReactNode };

export const Layout = ({ children, actions }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-row gap-4">{actions}</div>
      <div>{children}</div>
    </div>
  );
};
