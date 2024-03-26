import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen justify-center items-center container">{children}</div>
  );
}
