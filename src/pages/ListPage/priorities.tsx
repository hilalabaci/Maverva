export type PriorityInfo = { label: string; color: string; icon: JSX.Element };

export const PRIORITIES: Record<number, PriorityInfo> = {
  5: {
    label: "Highest",
    color: "#ca3521",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="#ca3521">
        <path d="M8 3L3 9h3v4h4V9h3z" />
        <path d="M8 1L2 8h3v4h6V8h3z" opacity="0.4" />
      </svg>
    ),
  },
  4: {
    label: "High",
    color: "#e2483d",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="#e2483d">
        <path d="M8 2L3 9h3v5h4V9h3z" />
      </svg>
    ),
  },
  3: {
    label: "Medium",
    color: "#e97f33",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="#e97f33">
        <rect x="2" y="5" width="12" height="2.5" rx="1" />
        <rect x="2" y="8.5" width="12" height="2.5" rx="1" />
      </svg>
    ),
  },
  2: {
    label: "Low",
    color: "#2d8a4e",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="#2d8a4e">
        <path d="M8 14L13 7h-3V2H6v5H3z" />
      </svg>
    ),
  },
  1: {
    label: "Lowest",
    color: "#2d8a4e",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="#2d8a4e">
        <path d="M8 13L3 7h3V3h4v4h3z" />
        <path d="M8 15L2 8h3V4h6v4h3z" opacity="0.4" />
      </svg>
    ),
  },
};
