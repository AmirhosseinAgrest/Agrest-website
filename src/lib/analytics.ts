type EventCategory = 'engagement' | 'navigation' | 'conversion' | 'error';

interface AnalyticsEvent {
  category: EventCategory;
  action: string;
  label?: string;
  value?: number;
}

const isProduction = import.meta.env.PROD;
const isAnalyticsEnabled = import.meta.env.VITE_ENABLE_ANALYTICS === 'true';

export function trackEvent({ category, action, label, value }: AnalyticsEvent): void {
  if (!isProduction || !isAnalyticsEnabled) {
    console.debug('[Analytics]', { category, action, label, value });
    return;
  }

  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

export function trackPageView(path: string, title: string): void {
  if (!isProduction || !isAnalyticsEnabled) {
    console.debug('[Analytics] Page View:', { path, title });
    return;
  }

  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
      page_path: path,
      page_title: title,
    });
  }
}

export const events = {
  contactFormSubmit: () =>
    trackEvent({
      category: 'conversion',
      action: 'contact_form_submit',
      label: 'Contact Form',
    }),

  resumeDownload: () =>
    trackEvent({
      category: 'conversion',
      action: 'resume_download',
      label: 'Resume PDF',
    }),

  projectView: (projectName: string) =>
    trackEvent({
      category: 'engagement',
      action: 'project_view',
      label: projectName,
    }),

  blogPostRead: (postTitle: string) =>
    trackEvent({
      category: 'engagement',
      action: 'blog_post_read',
      label: postTitle,
    }),

  socialLinkClick: (platform: string) =>
    trackEvent({
      category: 'engagement',
      action: 'social_link_click',
      label: platform,
    }),

  languageChange: (language: string) =>
    trackEvent({
      category: 'engagement',
      action: 'language_change',
      label: language,
    }),

  externalLinkClick: (url: string) =>
    trackEvent({
      category: 'navigation',
      action: 'external_link_click',
      label: url,
    }),

  error: (errorMessage: string) =>
    trackEvent({
      category: 'error',
      action: 'javascript_error',
      label: errorMessage,
    }),
};