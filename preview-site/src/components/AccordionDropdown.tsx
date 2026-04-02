import React, { useState, useRef, useEffect } from "react";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";

interface NavItem {
  to: string;
  label: string;
}

interface Section {
  label: string;
  href: string;
  items: NavItem[];
}

interface AccordionDropdownProps {
  label: string;
  sections: Section[];
  position?: "left" | "right";
  mobile?: boolean;
}

export default function AccordionDropdown({
  label,
  sections,
  mobile,
}: AccordionDropdownProps) {
  const [open, setOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setOpen(false);
    setExpandedSection(null);
  }, [location.pathname]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setExpandedSection(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const isActive = sections.some(
    (s) =>
      location.pathname.includes(s.href) ||
      s.items.some((item) => location.pathname.includes(item.to))
  );

  const toggleSection = (sectionLabel: string) => {
    setExpandedSection((prev) =>
      prev === sectionLabel ? null : sectionLabel
    );
  };

  if (mobile) {
    return <MobileAccordion label={label} sections={sections} />;
  }

  return (
    <div ref={containerRef} className="navbar__item" style={{ position: "relative" }}>
      <button
        className={`navbar__link${isActive ? " navbar__link--active" : ""}`}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          font: "inherit",
          padding: "var(--ifm-navbar-item-padding-vertical) var(--ifm-navbar-item-padding-horizontal)",
        }}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          style={{
            marginLeft: "4px",
            verticalAlign: "middle",
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        >
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </button>
      {open && (
        <div style={styles.panel}>
          {sections.map((section) => {
            const isExpanded = expandedSection === section.label;
            return (
              <div key={section.label}>
                <button
                  onClick={() => toggleSection(section.label)}
                  style={styles.sectionHeader}
                  aria-expanded={isExpanded}
                >
                  <span>{section.label}</span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    style={{
                      transition: "transform 0.2s",
                      transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  >
                    <path d="M3 1.5L7 5L3 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </button>
                {isExpanded && (
                  <ul style={styles.itemList}>
                    {section.items.map((item) => (
                      <li key={item.to} style={styles.item}>
                        <Link
                          to={item.to}
                          className="dropdown__link"
                          style={{ display: "block", padding: "6px 16px 6px 24px" }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function MobileAccordion({
  label,
  sections,
}: {
  label: string;
  sections: Section[];
}) {
  const [open, setOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="menu__list-item">
      <button
        className="menu__link menu__link--sublist"
        onClick={() => setOpen((prev) => !prev)}
        style={{ background: "none", border: "none", cursor: "pointer", font: "inherit", width: "100%" }}
      >
        {label}
      </button>
      {open && (
        <ul className="menu__list">
          {sections.map((section) => {
            const isExpanded = expandedSection === section.label;
            return (
              <li key={section.label} className="menu__list-item">
                <button
                  className="menu__link menu__link--sublist"
                  onClick={() =>
                    setExpandedSection((prev) =>
                      prev === section.label ? null : section.label
                    )
                  }
                  style={{ background: "none", border: "none", cursor: "pointer", font: "inherit", width: "100%" }}
                >
                  {section.label}
                </button>
                {isExpanded && (
                  <ul className="menu__list">
                    {section.items.map((item) => (
                      <li key={item.to} className="menu__list-item">
                        <Link to={item.to} className="menu__link">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  panel: {
    position: "absolute",
    top: "100%",
    left: 0,
    minWidth: "220px",
    background: "var(--ifm-dropdown-background-color)",
    border: "1px solid var(--ifm-color-emphasis-200)",
    borderRadius: "var(--ifm-global-radius)",
    boxShadow: "var(--ifm-global-shadow-md)",
    padding: "4px 0",
    zIndex: 100,
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "8px 16px",
    background: "none",
    border: "none",
    borderTop: "1px solid var(--ifm-color-emphasis-200)",
    cursor: "pointer",
    font: "inherit",
    fontSize: "0.7rem",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    color: "var(--ifm-color-emphasis-700)",
  },
  itemList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  item: {
    margin: 0,
    padding: 0,
  },
};
