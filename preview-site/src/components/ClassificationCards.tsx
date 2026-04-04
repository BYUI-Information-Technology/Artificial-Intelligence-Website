import React from "react";

interface ClassificationCardsProps {
  children: React.ReactNode;
}

export default function ClassificationCards({ children }: ClassificationCardsProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        margin: "24px 0",
      }}
    >
      {children}
    </div>
  );
}
