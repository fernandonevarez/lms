export function useCookies() {
  const cookies = {
    necessary_cookies: true,
    analytics_cookies: false,
    marketing_cookies: false,
  };

  type CookiesProps = {
    necessary_cookies: boolean;
    updated_analytics_cookies?: boolean;
    updated_marketing_cookies?: boolean;
  };

  const updateCookies = (values: CookiesProps) => {
    console.log('values 1:', values);

    cookies.necessary_cookies = values.necessary_cookies;
    cookies.analytics_cookies = values.updated_analytics_cookies ?? false;
    cookies.marketing_cookies = values.updated_marketing_cookies ?? false;

    console.log('cookies:', cookies);

    // call the function consentMarketing() or consentAnalytics() from google-analytics.tsx based on the values

    if (cookies.analytics_cookies) {
      // consentAnalytics();
      // call the function consentAnalytics() from google-analytics.tsx
    }

    if (cookies.marketing_cookies) {
      // consentMarketing();
      // call the function consentMarketing() from google-analytics.tsx, the id is 'google-analytics-consent-functions' in google-analytics.tsx
    }
  };

  return {
    cookies,
    updateCookies,
  };
}
