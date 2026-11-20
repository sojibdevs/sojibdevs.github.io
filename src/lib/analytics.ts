// Lightweight event tracking. Works with GoatCounter if its script is present in index.html;
// otherwise it silently does nothing, so the site never breaks without analytics.
type GoatCounter = { count: (opts: { path: string; title?: string; event?: boolean }) => void };

export const CV_FILE = "Md_Sojib_Miya_CV.pdf";
export const CV_URL = `${import.meta.env.BASE_URL}${CV_FILE}`;

export function trackCvDownload(source: "hero" | "nav" | "nav-mobile") {
  try {
    const gc = (window as unknown as { goatcounter?: GoatCounter }).goatcounter;
    gc?.count({ path: `cv-download-${source}`, title: "CV download", event: true });
  } catch {
    /* ignore */
  }
}
