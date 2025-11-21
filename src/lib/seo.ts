export const PRIMARY_DOMAIN = "albaloshi.tech";
export const SECONDARY_DOMAIN = "nasirnawaz.com";
const FALLBACK_SITE_URL = `https://${PRIMARY_DOMAIN}`;

const BASE_NAME = "Al Baloshi Nawaz";
const ALT_NAME = "Nasir Nawaz";
const FALLBACK_BRAND_ALT = "AlBaloshiTech lockup with speed-of-ideas tagline";

export const DEFAULT_TITLE = `${BASE_NAME} | Certified Bubble.io Developer`;
export const ALT_DEFAULT_TITLE = `${ALT_NAME} | Certified Bubble.io Developer`;
export const DEFAULT_DESCRIPTION =
  "Certified Bubble.io developer, Google IT Support Specialist, and AWS-certified builder delivering business-ready SaaS platforms, MVPs, and automation systems as a solo partner.";
export const DEFAULT_TAGLINE =
  "Building products at the speed of ideas with No-Code, Vibe Coding, and Automation.";
export const DEFAULT_OG_IMAGE = "/Hero_circle_pic.jpeg";
export const CERTIFICATION_OG_IMAGE = "/certificaiton/01_bubble_certificaiton.jpeg";
export const BRAND_OG_IMAGE = "/og-default.png";
export const DEFAULT_OG_IMAGE_ALT = "Portrait of Nasir Nawaz with the speed-of-ideas tagline";
export const CERTIFICATION_OG_IMAGE_ALT = "Bubble.io certified developer credential";
export const BRAND_OG_IMAGE_ALT = FALLBACK_BRAND_ALT;
export const ALT_OG_IMAGE_ALT = "Nasir Nawaz portrait with the speed-of-ideas tagline";
export const DEFAULT_OG_IMAGES = [
  DEFAULT_OG_IMAGE,
  CERTIFICATION_OG_IMAGE,
  BRAND_OG_IMAGE,
];
export const SITE_NAME = BASE_NAME;
export const ALT_SITE_NAME = ALT_NAME;
export const TWITTER_HANDLE = "@BaloShi69";

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const getEnvSiteUrl = () => {
  const envUrl =
    process.env.VITE_SITE_URL ??
    process.env.SITE_URL ??
    process.env.DEPLOY_URL ??
    FALLBACK_SITE_URL;
  return trimTrailingSlash(envUrl);
};

export const getSiteUrl = () => {
  if (typeof window !== "undefined" && window.location) {
    const { protocol, host } = window.location;
    return trimTrailingSlash(`${protocol}//${host}`);
  }
  return getEnvSiteUrl();
};

export const SITE_URL = getSiteUrl();

export const buildCanonicalUrl = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
};

export const toAbsoluteUrl = (path: string | undefined) => {
  const targetPath = path ?? DEFAULT_OG_IMAGE;

  if (/^https?:\/\//i.test(targetPath)) {
    return encodeURI(targetPath);
  }

  const normalizedPath = targetPath.startsWith("/")
    ? targetPath
    : `/${targetPath}`;

  return encodeURI(`${getSiteUrl()}${normalizedPath}`);
};
