/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string;
  readonly VITE_SITE_NAME: string;
  readonly VITE_CONTACT_EMAIL: string;
  readonly VITE_GA_TRACKING_ID?: string;
  readonly VITE_ENABLE_BLOG: string;
  readonly VITE_ENABLE_ANALYTICS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}