// ============================================================================
// VidyaX Feedback Portal — Configuration
// ============================================================================
// NO BACKEND / NO LOVABLE CLOUD required.
// We use a free Google Apps Script Web App as a tiny endpoint that writes
// submissions to a Google Sheet you own. You read submissions from the same
// endpoint on the on-site admin page (/feedback/admin).
//
// One-time setup (5 minutes):
// 1. Create a new Google Sheet. First row headers (exactly):
//      timestamp | name | email | rating | category | message | month | userAgent
// 2. Extensions → Apps Script → paste this code:
//
//      const SECRET = "CHANGE_ME_TO_A_LONG_RANDOM_STRING";
//      function doPost(e){
//        const sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
//        const d = JSON.parse(e.postData.contents);
//        sh.appendRow([new Date(), d.name||"", d.email||"", d.rating||"",
//          d.category||"", d.message||"", d.month||"", d.userAgent||""]);
//        return ContentService.createTextOutput(JSON.stringify({ok:true}))
//          .setMimeType(ContentService.MimeType.JSON);
//      }
//      function doGet(e){
//        if((e.parameter.key||"")!==SECRET)
//          return ContentService.createTextOutput(JSON.stringify({ok:false}))
//            .setMimeType(ContentService.MimeType.JSON);
//        const sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
//        const rows = sh.getDataRange().getValues();
//        return ContentService.createTextOutput(JSON.stringify({ok:true,rows}))
//          .setMimeType(ContentService.MimeType.JSON);
//      }
//
// 3. Deploy → New deployment → Type: Web app → Execute as: Me →
//    Who has access: Anyone → Deploy. Copy the /exec URL.
// 4. Paste the URL below as FEEDBACK_ENDPOINT and your SECRET as ADMIN_KEY.
// ============================================================================

export const FEEDBACK_ENDPOINT = "https://script.google.com/macros/s/AKfycbwvEEgpNqyJ9-1oNNf4LK6xX1dJ5fe1GexGc9i4523euvmO1eBM1YssMI0oH-7B9Abi/exec"
export const ADMIN_KEY = "@7368932901N"; // must match SECRET in Apps Script

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
