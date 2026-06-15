// ============================================================================
// VidyaX Feedback Portal — Secure Configuration
// ============================================================================

// ⚠️ Yaha par Google Apps Script wali Web App URL paste karein ⚠️
export const FEEDBACK_ENDPOINT = "https://script.google.com/macros/s/AKfycbzrsVpjHNxlpFD6ZTGPDqVCzMxstrg39bwXZkaCuCbXLdE-tYXDhKi1nklZN6I2rpfX/exec"; 

export const PORTAL_OPEN_DAY = 7;
export const PORTAL_DURATION_DAYS = 15;

export type PortalStatus = {
  isOpen: boolean;
  monthLabel: string;
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
