import React from "react";

interface ClassificationCardProps {
  title: string;
  description: string;
  examples: string[];
  actionText: string;
  color: "green" | "yellow" | "pink" | "red";
}

const colorMap = {
  green: {
    background: "#f0faf0",
    border: "#4caf50",
    actionBg: "#4caf50",
  },
  yellow: {
    background: "#fdf8e8",
    border: "#c8a415",
    actionBg: "#c8a415",
  },
  pink: {
    background: "#fdf0f0",
    border: "#d4768a",
    actionBg: "#d4768a",
  },
  red: {
    background: "#fbe8e8",
    border: "#c0392b",
    actionBg: "#c0392b",
  },
};

export default function ClassificationCard({
  title,
  description,
  examples,
  actionText,
  color,
}: ClassificationCardProps) {
  const colors = colorMap[color];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "8px",
        overflow: "hidden",
        border: `1px solid ${colors.border}`,
        background: colors.background,
        flex: "1 1 0",
        minWidth: "200px",
      }}
    >
      <div
        style={{
          padding: "20px 16px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <h4
          style={{
            margin: 0,
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "#1a1a2e",
          }}
        >
          {title}
        </h4>
        <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.5, color: "#333" }}>
          {description}
        </p>
        <div>
          <p
            style={{
              margin: "0 0 4px 0",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#444",
            }}
          >
            Examples:
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: "18px",
              fontSize: "0.85rem",
              lineHeight: 1.6,
              color: "#444",
            }}
          >
            {examples.map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        style={{
          background: colors.actionBg,
          color: "white",
          textAlign: "center",
          padding: "10px 12px",
          fontSize: "0.8rem",
          fontWeight: 700,
          letterSpacing: "0.03em",
          textTransform: "uppercase",
        }}
      >
        {actionText}
      </div>
    </div>
  );
}
