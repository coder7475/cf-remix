import type { AppLoadContext } from "@remix-run/cloudflare";

export interface AppEnv {
  ENVIRONMENT: "development" | "preview" | "production";
  SITE_URL: string;
  CONTACT_EMAIL: string;
  RESEND_API_KEY?: string;
  isProduction: boolean;
  isDevelopment: boolean;
  isPreview: boolean;
}

const DEFAULT_PROD_SITE_URL = "https://robiulhossain.com";
const DEFAULT_DEV_SITE_URL = "http://localhost:5173";
const DEFAULT_CONTACT_EMAIL = "contact@robiulhossain.com";

export function getAppEnv(context?: AppLoadContext): AppEnv {
  const cloudflareEnv = context?.cloudflare?.env as Partial<Env> | undefined;

  const rawEnv =
    cloudflareEnv?.ENVIRONMENT ||
    (typeof process !== "undefined" && process.env?.NODE_ENV === "production"
      ? "production"
      : "development");

  const environment: "development" | "preview" | "production" =
    rawEnv === "preview"
      ? "preview"
      : rawEnv === "production"
      ? "production"
      : "development";

  const isProduction = environment === "production";
  const isDevelopment = environment === "development";
  const isPreview = environment === "preview";

  const siteUrl =
    cloudflareEnv?.SITE_URL ||
    (isProduction ? DEFAULT_PROD_SITE_URL : DEFAULT_DEV_SITE_URL);

  const contactEmail = cloudflareEnv?.CONTACT_EMAIL || DEFAULT_CONTACT_EMAIL;
  const resendApiKey = cloudflareEnv?.RESEND_API_KEY;

  return {
    ENVIRONMENT: environment,
    SITE_URL: siteUrl,
    CONTACT_EMAIL: contactEmail,
    RESEND_API_KEY: resendApiKey,
    isProduction,
    isDevelopment,
    isPreview,
  };
}

export function getPublicEnv(env: AppEnv) {
  return {
    ENVIRONMENT: env.ENVIRONMENT,
    SITE_URL: env.SITE_URL,
    CONTACT_EMAIL: env.CONTACT_EMAIL,
  };
}
