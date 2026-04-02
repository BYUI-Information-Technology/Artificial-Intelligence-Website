import React from "react";
import Link from "@docusaurus/Link";

interface ImageCardProps {
  src: string;
  alt?: string;
  label: string;
  href?: string;
  buttonLabel?: string;
}

export default function ImageCard({
  src,
  alt,
  label,
  href,
  buttonLabel,
}: ImageCardProps) {
  const card = (
    <div style={styles.card}>
      <img src={src} alt={alt ?? label} style={styles.image} />
      <div style={styles.body}>
        <span style={styles.label}>{label}</span>
        {buttonLabel && (
          <div style={styles.button}>
            <span style={styles.arrowCircle}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span style={styles.buttonLabel}>{buttonLabel}</span>
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} style={styles.link} target="_blank" rel="noopener noreferrer">
          {card}
        </a>
      );
    }
    return (
      <Link to={href} style={styles.link}>
        {card}
      </Link>
    );
  }

  return card;
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    overflow: "hidden",
    border: "1px solid var(--ifm-color-emphasis-200)",
    background: "var(--ifm-color-emphasis-100)",
    transition: "box-shadow 0.2s ease",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    aspectRatio: "16 / 9",
    objectFit: "cover",
    display: "block",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
    padding: "24px",
    gap: "24px",
  },
  label: {
    fontWeight: 700,
    fontSize: "1.35rem",
    lineHeight: 1.3,
    color: "var(--ifm-font-color-base)",
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  arrowCircle: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "var(--ifm-font-color-base)",
    flexShrink: 0,
  },
  buttonLabel: {
    fontSize: "0.95rem",
    fontWeight: 500,
    color: "var(--ifm-font-color-base)",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
};
