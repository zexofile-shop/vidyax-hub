// ============================================================================
// VidyaX Feedback Portal — Configuration (Telegram Bot)
// ============================================================================

export const TELEGRAM_BOT_TOKEN = "8716876737:AAFEOf645VMisyzvs7qvPdZW1xEUs3Oti-c";
export const TELEGRAM_CHAT_ID = "7652204324"; 

// Portal opens on day 7 of every month for 15 days (days 7..21 inclusive).
export const PORTAL_OPEN_DAY = 7;
export const PORTAL_DURATION_DAYS = 15;

export type PortalStatus = {
  isOpen: boolean;
  monthLabel: string; // e.g. "June 2026"
  opensAt: Date;
  closesAt: Date;
  nextOpensAt: Date;
};

export function getPortalStatus(now: Date = new Date()): PortalStatus {
  const y = now.getFullYear();
  const m = now.getMonth();
  const opensAt = new Date(y, m, PORTAL_OPEN_DAY, 0, 0, 0);
  const closesAt = new Date(y, m, PORTAL_OPEN_DAY + PORTAL_DURATION_DAYS, 0, 0, 0);
  const isOpen = now >= opensAt && now < closesAt;
  let nextOpensAt: Date;
  if (now < opensAt) nextOpensAt = opensAt;
  else nextOpensAt = new Date(y, m + 1, PORTAL_OPEN_DAY, 0, 0, 0);
  const monthLabel = (isOpen ? opensAt : (now < opensAt ? opensAt : nextOpensAt))
    .toLocaleDateString("en-IN", { month: "long", year: "numeric" });
  return { isOpen, monthLabel, opensAt, closesAt, nextOpensAt };
}

export function formatDate(d: Date) {
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}
