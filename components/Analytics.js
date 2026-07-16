import Script from 'next/script';

// IDs de rastreamento (edite aqui se mudarem)
const GA_ID = 'G-S45LFVW09L';
const META_PIXEL_ID = '867909417446170';
const RD_LOADER = 'https://d335luupugsy2.cloudfront.net/js/loader-scripts/eaca4f2d-0f2f-49cc-a5ef-42ef07d4bae1-loader.js';

export default function Analytics() {
  return (
    <>
      {/* Google Analytics 4 (gtag.js) */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>

      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* RD Station */}
      <Script src={RD_LOADER} strategy="afterInteractive" />

      {/* Meta Pixel: fallback sem JavaScript */}
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} alt="" />
      </noscript>
    </>
  );
}
