import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Character encoding */}
        <meta charSet="utf-8" />

        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Favicon */}
        <link rel="icon" href="/favicn.png" />
        <link rel="apple-touch-icon" href="/favicn.png" />

        {/* Primary Meta Tags */}
        <meta name="title" content="Madhouse Wallet - Secure Digital Wallet for International Payments & Remittances" />
        <meta name="description" content="Effortlessly receive international payments and remittances with Madhouse Wallet. Security-first digital wallet with passkey authentication, local cashout options, and seamless cross-border transfers. Cash out to bank accounts or mobile money." />
        <meta name="keywords" content="digital wallet, international payments, cross-border payments, remittances, money transfer, mobile money, cash out, cryptocurrency wallet, bitcoin wallet, secure payments, passkey authentication, merchant payments, small business payments, send money internationally, receive remittances, payment app, fintech wallet, emerging markets payments" />
        <meta name="author" content="Madhouse Wallet" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Geo Tags */}
        <meta name="geo.region" content="International" />
        <meta name="geo.placename" content="Global" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://madhousewallet.com/" />
        <meta property="og:title" content="Madhouse Wallet - Secure Digital Wallet for International Payments & Remittances" />
        <meta property="og:description" content="Effortlessly receive international payments and remittances with Madhouse Wallet. Security-first digital wallet with passkey authentication and local cashout options." />
        <meta property="og:image" content="https://madhousewallet.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Madhouse Wallet" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://madhousewallet.com/" />
        <meta name="twitter:title" content="Madhouse Wallet - Secure Digital Wallet for International Payments" />
        <meta name="twitter:description" content="Effortlessly receive international payments and remittances. Security-first digital wallet with passkey authentication and local cashout options." />
        <meta name="twitter:image" content="https://madhousewallet.com/twitter-image.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://madhousewallet.com/" />

        {/* Additional Links */}
        <link rel="alternate" href="https://madhousewallet.com/" hrefLang="en" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Madhouse Wallet",
              "description": "Modern, security-first digital wallet optimized for fast international payments and remittances",
              "url": "https://madhousewallet.com",
              "logo": "https://madhousewallet.com/logo.png",
              "contactPoint": [{
                "@type": "ContactPoint",
                "email": "info@madhousewallet.com",
                "contactType": "Customer Service",
                "areaServed": "Worldwide"
              }],
              "sameAs": []
            })
          }}
        />

        {/* Structured Data - Product/Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Madhouse Wallet",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web, iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Effortlessly receive international payments and remittances with Madhouse Wallet. Security-first digital wallet optimized for cross-border payments with local cashout options.",
              "featureList": [
                "Secure by Design with Passkey Authentication",
                "Accept International Payments",
                "Cash out to Bank Accounts or Mobile Money",
                "Invest in Bitcoin",
                "Earn Interest on Savings",
                "Low-Cost Cross-Border Transfers"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1000"
              }
            })
          }}
        />

        {/* Structured Data - WebSite with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Madhouse Wallet",
              "url": "https://madhousewallet.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://madhousewallet.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Structured Data - FinancialService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "Madhouse Wallet",
              "description": "Security-first digital wallet for cross-border payments, remittances, and international money transfers",
              "url": "https://madhousewallet.com",
              "serviceType": ["Digital Wallet", "Payment Service", "Remittance Service", "Cryptocurrency Wallet"],
              "areaServed": {
                "@type": "Place",
                "name": "Worldwide"
              },
              "offers": {
                "@type": "Offer",
                "description": "Free digital wallet with low-cost international payment and remittance services"
              }
            })
          }}
        />

        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://madhousewallet.com/"
              }]
            })
          }}
        />

        {/* Bootstrap */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />

        <title>Madhouse Wallet - Secure Digital Wallet for International Payments & Remittances</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
