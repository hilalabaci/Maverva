// ─────────────────────────────────────────────────────────────
// All static landing-page data lives here.
// Components import only what they need — no data scattered in JSX.
// ─────────────────────────────────────────────────────────────

export type PillVariant = "todo" | "prog" | "done" | "rev";
export type LogoVariant = "s" | "m";
export type BtnVariant = "outline" | "accent";

// ──────────────── Nav ────────────────
export interface NavLinkData {
  label: string;
  href: string;
  hasDropdown?: boolean;
}
export const NAV_LINKS: NavLinkData[] = [
  { label: "Product", href: "#", hasDropdown: true },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Customers", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "Docs", href: "#" },
];

// ──────────────── Hero ────────────────
export interface HeroStat {
  value: string;
  suffix: string;
  label: string;
}
export const HERO_STATS: HeroStat[] = [
  { value: "12,400", suffix: "+", label: "Teams shipping with Maverva" },
  { value: "99.99", suffix: "%", label: "Uptime, measured externally" },
  { value: "41", suffix: "min", label: "Avg. meetings saved per week" },
];

// ──────────────── Product sidebar ────────────────
export type SidebarEntry =
  | { type: "group"; label: string }
  | { type: "item"; label: string; badge?: string; active?: boolean; color?: string };

export const SIDEBAR_ENTRIES: SidebarEntry[] = [
  { type: "item", label: "Inbox", badge: "3" },
  { type: "item", label: "My work" },
  { type: "item", label: "Starred" },
  { type: "group", label: "Projects" },
  { type: "item", label: "Core platform", color: "#1E40AF" },
  { type: "item", label: "MAV · Sprint 14", active: true },
  { type: "item", label: "Growth", color: "#0F766E" },
  { type: "item", label: "Design system", color: "#9F1239" },
  { type: "group", label: "Views" },
  { type: "item", label: "Roadmap" },
  { type: "item", label: "Timeline" },
];

// ──────────────── Board ────────────────
export type CardPriority = "warn" | "ok" | "med";

/** Avatar initials → colour mapping — single source of truth */
export const AVATAR_COLORS: Record<string, string> = {
  SW: "var(--lp-accent)",
  EJ: "#0F766E",
  AB: "#9F1239",
  MA: "#713F12",
  RK: "#1E40AF",
};

export interface BoardCardData {
  id: string;
  text: string;
  initials: string;
  priority: CardPriority;
  faded?: boolean;
}

export interface BoardColumnData {
  title: string;
  count: number;
  cards: BoardCardData[];
}

export const BOARD_COLUMNS: BoardColumnData[] = [
  {
    title: "To do",
    count: 5,
    cards: [
      { id: "MAV-412", text: "Migrate invoice PDF templates to new renderer", initials: "SW", priority: "med" },
      { id: "MAV-418", text: "Handle legacy webhook signatures during cutover", initials: "EJ", priority: "warn" },
      { id: "MAV-421", text: "Add audit log for plan changes", initials: "AB", priority: "ok" },
    ],
  },
  {
    title: "In progress",
    count: 4,
    cards: [
      { id: "MAV-407", text: "Dual-write subscription records to v2 store", initials: "SW", priority: "med" },
      { id: "MAV-414", text: "Reconcile proration edge cases across timezones", initials: "MA", priority: "warn" },
      { id: "MAV-420", text: "Update customer portal to read from v2", initials: "EJ", priority: "ok" },
    ],
  },
  {
    title: "In review",
    count: 2,
    cards: [
      { id: "MAV-403", text: "Feature flag for gradual rollout (10% → 100%)", initials: "AB", priority: "warn" },
      { id: "MAV-410", text: "Grafana dashboard: billing error rate", initials: "SW", priority: "med" },
    ],
  },
  {
    title: "Done",
    count: 7,
    cards: [
      { id: "MAV-388", text: "Schema for v2 subscription table", initials: "MA", priority: "ok", faded: true },
      { id: "MAV-394", text: "Shadow traffic from v1 API", initials: "EJ", priority: "ok", faded: true },
      { id: "MAV-399", text: "Backfill script for 2024 invoices", initials: "SW", priority: "ok", faded: true },
    ],
  },
];

// ──────────────── Logos ────────────────
export interface LogoData {
  text: string;
  variant?: LogoVariant;
  italic?: boolean;
}
export const LOGOS: LogoData[] = [
  { text: "Northwind", italic: true },
  { text: "ACUITY", variant: "s" },
  { text: "kinetic/os", variant: "m" },
  { text: "Harbor&Co." },
  { text: "MERIDIAN", variant: "s" },
  { text: "lumen.works", variant: "m" },
  { text: "Fjord Labs" },
];

// ──────────────── Features ────────────────
export interface FeatureData {
  num: string;
  title: string;
  desc: string;
  linkText: string;
}
export const FEATURES: FeatureData[] = [
  {
    num: "01 — PLAN",
    title: "Roadmaps that survive the quarter.",
    desc: "Drag-and-drop planning with dependencies, capacity hints and a timeline that re-flows when reality hits.",
    linkText: "Explore planning →",
  },
  {
    num: "02 — DOCUMENT",
    title: "Docs that link to the work, not away from it.",
    desc: "Write specs, RFCs and retros inline with issues. Every link backreferences automatically; context doesn't rot.",
    linkText: "Explore docs →",
  },
  {
    num: "03 — AUTOMATE",
    title: "Automations without a scripting team.",
    desc: "If-this-then-that rules for everyone. Route bugs, nudge stale reviews, mirror status to Slack — in minutes.",
    linkText: "Explore automations →",
  },
];

// ──────────────── Band KV ────────────────
export interface KvData {
  k: string;
  v: string;
}
export const BAND_KV: KvData[] = [
  { k: "Sprint velocity", v: "41 pts" },
  { k: "Cycle time", v: "2.3 days" },
  { k: "On-time delivery", v: "94%" },
  { k: "Flow efficiency", v: "68%" },
];

// ──────────────── Portfolio ────────────────
export interface PortfolioRow {
  project: string;
  initials: string;
  lead: string;
  pct: number;
  progressColor?: string;
  status: PillVariant;
  statusLabel: string;
  ship: string;
}
export const PORTFOLIO_ROWS: PortfolioRow[] = [
  { project: "Billing v2",      initials: "SW", lead: "Sarah W.",   pct: 64,  status: "prog", statusLabel: "On track", ship: "Apr 27" },
  { project: "Onboarding 2.0", initials: "EJ", lead: "Emily J.",   pct: 88,  status: "rev",  statusLabel: "At risk",  ship: "May 04" },
  { project: "Mobile beta",    initials: "AB", lead: "Aarti B.",   pct: 100, progressColor: "var(--lp-ok)", status: "done", statusLabel: "Shipped",  ship: "Apr 10" },
  { project: "Search rewrite", initials: "MA", lead: "Mahinur A.", pct: 22,  status: "todo", statusLabel: "Planning", ship: "Jun 30" },
  { project: "SOC 2 Type II",  initials: "RK", lead: "Ravi K.",    pct: 50,  status: "prog", statusLabel: "On track", ship: "Jul 15" },
];

// ──────────────── Pricing ────────────────
export interface PricingPlan {
  slug: string;
  tagline: string;
  name: string;
  sub: string;
  price: string;
  priceSuffix: string;
  features: string[];
  ctaLabel: string;
  ctaVariant: BtnVariant;
  featured?: boolean;
}
export const PRICING_PLANS: PricingPlan[] = [
  {
    slug: "starter",
    tagline: "— Starter",
    name: "Solo & small teams",
    sub: "For teams up to 10 getting the basics in place.",
    price: "Free",
    priceSuffix: "forever",
    features: ["Unlimited projects & issues", "Board, list and timeline views", "2 GB file storage", "Community support"],
    ctaLabel: "Start free",
    ctaVariant: "outline",
  },
  {
    slug: "business",
    tagline: "— Business",
    name: "Growing product teams",
    sub: "For teams shipping weekly with real stakes.",
    price: "$12",
    priceSuffix: "/ active user / mo",
    features: ["Everything in Starter", "Automations & SLAs", "Portfolio views & reports", "SSO (Google, Okta, Entra)", "Priority email + chat support"],
    ctaLabel: "Start 14-day trial",
    ctaVariant: "accent",
    featured: true,
  },
  {
    slug: "enterprise",
    tagline: "— Enterprise",
    name: "Scaled orgs & regulated",
    sub: "For companies with audit, compliance & procurement.",
    price: "Custom",
    priceSuffix: "annual",
    features: ["Everything in Business", "SAML & SCIM, audit log export", "Data residency (EU / US / APAC)", "Dedicated CSM & 99.99% SLA", "SOC 2 Type II, ISO 27001, HIPAA"],
    ctaLabel: "Contact sales",
    ctaVariant: "outline",
  },
];

// ──────────────── Footer ────────────────
export interface FooterCol {
  heading: string;
  links: string[];
}
export const FOOTER_COLS: FooterCol[] = [
  { heading: "Product",   links: ["Board", "Timeline", "Docs", "Automations", "Changelog"] },
  { heading: "Solutions", links: ["Engineering", "Product", "Design", "IT & Ops"] },
  { heading: "Company",   links: ["About", "Customers", "Careers", "Press"] },
  { heading: "Resources", links: ["Docs", "API", "Security", "Status"] },
];
