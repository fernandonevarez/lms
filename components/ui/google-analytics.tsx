'use client';
import Script from 'next/script';
// import { useCookies } from '@/hooks/use-cookies';
// import { useEffect } from 'react';

const GoogleAnalytics = ({
  GA_MEASUREMENT_ID,
}: {
  GA_MEASUREMENT_ID: string;
}) => {
  // const { cookies } = useCookies();

  // const { analytics_cookies, marketing_cookies } = cookies;

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id='ga-script'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied',
                    'analytics_storage': 'denied',
                    'functionality_storage': 'denied',
                    'personalization_storage': 'denied',
                    'security_storage': 'denied',
                });

                gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
      <Script
        id='ga-consent-functions'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
                function consentMarketing() {
                    gtag('consent', 'update', {
                        'ad_storage': 'granted',
                        'ad_user_data': 'granted',
                        'ad_personalization': 'granted',
                    });
                }
                
                function consentAnalytics() {
                    gtag('consent', 'update', {
                        'analytics_storage': 'granted'
                    });
                }
                `,
        }}
      />
    </>
  );
};

export { GoogleAnalytics };
