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

        {/* Primary Meta Tags - Optimized for Small Business & Target Markets */}
        <meta name="title" content="Payment App for Small Business | Accept International Payments in Kenya, Nigeria, India - Madhouse Wallet" />
        <meta name="description" content="Best payment and remittance app for small businesses in Kenya, Nigeria, and India. Accept international payments, receive remittances, and cash out to mobile money or bank accounts. Free digital wallet with low fees for cross-border payments." />
        <meta name="keywords" content="payment app for small business, remittance app Kenya, payment app Nigeria, remittance app India, send money to Kenya, send money to Nigeria, send money to India, accept international payments, business payment app, mobile money Kenya, mobile money Nigeria, international payment app, cross-border payments, receive money from abroad, merchant payment app, digital wallet for business, small business payment solution, M-Pesa integration, best remittance app, payment app for freelancers, receive payments internationally, cash out mobile money, alternative to PayPal Kenya, alternative to Wise Nigeria, remittance app for small business, accept payments from multiple countries, low-cost international payments, payment gateway for small business, cryptocurrency wallet, bitcoin wallet, passkey authentication" />
        <meta name="author" content="Madhouse Wallet" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />

        {/* Geo Tags - Target Markets */}
        <meta name="geo.region" content="KE;NG;IN" />
        <meta name="geo.placename" content="Kenya;Nigeria;India" />
        <meta name="geo.position" content="-1.286389;36.817223;9.081999;8.675277;20.593684;78.962880" />
        <meta name="ICBM" content="-1.286389, 36.817223" />

        {/* Target Audience */}
        <meta name="audience" content="Small Business Owners, Freelancers, Merchants, Entrepreneurs" />
        <meta name="target" content="Kenya, Nigeria, India" />

        {/* Open Graph / Facebook - Optimized for Target Markets */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://madhousewallet.com/" />
        <meta property="og:title" content="Payment App for Small Business in Kenya, Nigeria, India | Madhouse Wallet" />
        <meta property="og:description" content="Best payment and remittance app for small businesses. Accept international payments, receive remittances, cash out to mobile money. Free for businesses in Kenya, Nigeria, and India." />
        <meta property="og:image" content="https://madhousewallet.com/og-image.png" />
        <meta property="og:image:alt" content="Madhouse Wallet - Payment App for Small Business" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Madhouse Wallet" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_KE" />
        <meta property="og:locale:alternate" content="en_NG" />
        <meta property="og:locale:alternate" content="en_IN" />

        {/* Twitter - Optimized */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://madhousewallet.com/" />
        <meta name="twitter:title" content="Payment & Remittance App for Small Business | Kenya, Nigeria, India" />
        <meta name="twitter:description" content="Accept international payments, receive remittances, cash out to mobile money. Best payment app for small businesses in emerging markets." />
        <meta name="twitter:image" content="https://madhousewallet.com/twitter-image.png" />
        <meta name="twitter:image:alt" content="Madhouse Wallet Payment App Interface" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://madhousewallet.com/" />

        {/* Hreflang Tags - Geo-Targeting */}
        <link rel="alternate" href="https://madhousewallet.com/" hrefLang="x-default" />
        <link rel="alternate" href="https://madhousewallet.com/" hrefLang="en" />
        <link rel="alternate" href="https://madhousewallet.com/ke" hrefLang="en-ke" />
        <link rel="alternate" href="https://madhousewallet.com/ng" hrefLang="en-ng" />
        <link rel="alternate" href="https://madhousewallet.com/in" hrefLang="en-in" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Madhouse Wallet",
              "alternateName": "Madhouse Payment App",
              "description": "Leading payment and remittance app for small businesses in Kenya, Nigeria, and India. Accept international payments with low fees.",
              "url": "https://madhousewallet.com",
              "logo": "https://madhousewallet.com/logo.png",
              "contactPoint": [{
                "@type": "ContactPoint",
                "email": "info@madhousewallet.com",
                "contactType": "Customer Service",
                "areaServed": ["Kenya", "Nigeria", "India", "Worldwide"],
                "availableLanguage": ["English"]
              }],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": ["KE", "NG", "IN"]
              },
              "sameAs": [],
              "founder": {
                "@type": "Organization",
                "name": "Madhouse Wallet"
              },
              "foundingDate": "2023",
              "keywords": "payment app, remittance app, small business payments, international payments"
            })
          }}
        />

        {/* Structured Data - SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Madhouse Wallet - Payment & Remittance App",
              "applicationCategory": "FinanceApplication",
              "applicationSubCategory": "Payment App",
              "operatingSystem": "Web, iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2026-12-31",
                "availableAtOrFrom": {
                  "@type": "Place",
                  "name": "Kenya, Nigeria, India, and 45+ countries"
                }
              },
              "description": "Best payment and remittance app for small businesses in Kenya, Nigeria, and India. Accept international payments, receive remittances, and cash out to mobile money or bank accounts with low fees.",
              "featureList": [
                "Accept International Payments from 45+ Countries",
                "Send & Receive Remittances to Kenya, Nigeria, India",
                "Cash out to Mobile Money (M-Pesa, Airtel Money)",
                "Cash out to Bank Accounts",
                "Secure Passkey Authentication",
                "Low-Cost Cross-Border Transfers",
                "Invest in Bitcoin",
                "Earn Interest on Savings",
                "Business Payment Solutions for Small Businesses",
                "Multi-Currency Support"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [{
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Sarah K."
                },
                "datePublished": "2024-11-01",
                "reviewBody": "Best payment app for my small business in Kenya. I can accept payments from clients abroad and cash out to M-Pesa easily.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                }
              }],
              "countriesSupported": "Kenya, Nigeria, India, and 45+ countries worldwide"
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
              "name": "Madhouse Wallet Payment & Remittance Service",
              "description": "Leading payment and remittance service for small businesses in Kenya, Nigeria, and India. Accept international payments, receive remittances, cash out to mobile money with low fees.",
              "url": "https://madhousewallet.com",
              "serviceType": [
                "Digital Wallet",
                "Payment Service",
                "Remittance Service",
                "Business Payment Solution",
                "International Money Transfer",
                "Mobile Money Integration",
                "Cryptocurrency Wallet"
              ],
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Kenya"
                },
                {
                  "@type": "Country",
                  "name": "Nigeria"
                },
                {
                  "@type": "Country",
                  "name": "India"
                },
                {
                  "@type": "Place",
                  "name": "45+ Countries Worldwide"
                }
              ],
              "audience": {
                "@type": "Audience",
                "audienceType": "Small Business Owners, Freelancers, Merchants, Entrepreneurs"
              },
              "offers": {
                "@type": "AggregateOffer",
                "description": "Free digital wallet with low-cost international payment and remittance services for small businesses",
                "price": "0",
                "priceCurrency": "USD",
                "offerCount": "3",
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Kenya Payment & Remittance Service",
                    "description": "Accept international payments and receive remittances in Kenya with M-Pesa cashout",
                    "price": "0",
                    "priceCurrency": "KES"
                  },
                  {
                    "@type": "Offer",
                    "name": "Nigeria Payment & Remittance Service",
                    "description": "Accept international payments and receive remittances in Nigeria with bank and mobile money cashout",
                    "price": "0",
                    "priceCurrency": "NGN"
                  },
                  {
                    "@type": "Offer",
                    "name": "India Payment & Remittance Service",
                    "description": "Accept international payments and receive remittances in India with bank transfer",
                    "price": "0",
                    "priceCurrency": "INR"
                  }
                ]
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Payment & Remittance Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "International Payment Acceptance",
                      "description": "Accept payments from 45+ countries"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Remittance Service",
                      "description": "Send and receive remittances to Kenya, Nigeria, India"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mobile Money Cashout",
                      "description": "Cash out to M-Pesa, Airtel Money, and other mobile money platforms"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Structured Data - FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the best payment app for small businesses in Kenya?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Madhouse Wallet is the best payment app for small businesses in Kenya. It allows you to accept international payments from 45+ countries and cash out directly to M-Pesa or your bank account with low fees. Perfect for freelancers, merchants, and entrepreneurs receiving payments from abroad."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I receive international payments in Nigeria?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "With Madhouse Wallet, you can easily receive international payments in Nigeria. Simply create a free wallet, share your payment link with clients abroad, and cash out to your Nigerian bank account or mobile money. We support payments from 45+ countries with competitive rates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the best remittance app for India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Madhouse Wallet is the top remittance app for India, offering low-cost international money transfers. Receive remittances from family and friends abroad and cash out to your Indian bank account quickly and securely. Free to create an account with transparent fees."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I cash out to mobile money with Madhouse Wallet?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Madhouse Wallet supports mobile money cashouts including M-Pesa (Kenya), Airtel Money, and other local mobile money platforms. You can also cash out to bank accounts in Kenya, Nigeria, India, and other supported countries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does it cost to accept international payments?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Madhouse Wallet is free to use for small businesses. We charge low, transparent fees only for cross-border transactions and cashouts, making it more affordable than traditional payment processors like PayPal or Wise. No monthly fees or hidden charges."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Madhouse Wallet safe and secure?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Madhouse Wallet is built with security-first design. We use passkey authentication, device-backed security, and industry-leading encryption to protect your funds. All transactions are monitored for fraud, and your personal information is kept private."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which countries can send money to Kenya, Nigeria, or India through Madhouse Wallet?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Madhouse Wallet supports payments from 45+ countries worldwide including USA, UK, Canada, UAE, South Africa, and all major economies. You can receive international payments and remittances from clients, employers, or family members anywhere in the world."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to receive money in Madhouse Wallet?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most international payments arrive in your Madhouse Wallet within minutes to a few hours. Cashouts to mobile money (like M-Pesa) are instant, while bank transfers typically take 1-2 business days depending on your bank and country."
                  }
                }
              ]
            })
          }}
        />

        {/* Structured Data - HowTo Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Accept International Payments as a Small Business",
              "description": "Step-by-step guide to accepting international payments and remittances using Madhouse Wallet",
              "totalTime": "PT5M",
              "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": "0"
              },
              "step": [
                {
                  "@type": "HowToStep",
                  "position": 1,
                  "name": "Create Your Free Wallet",
                  "text": "Sign up for a free Madhouse Wallet account at app.madhousewallet.com/welcome. No credit card required.",
                  "url": "https://app.madhousewallet.com/welcome"
                },
                {
                  "@type": "HowToStep",
                  "position": 2,
                  "name": "Verify Your Business",
                  "text": "Complete the simple verification process with your business details and ID. This ensures secure transactions."
                },
                {
                  "@type": "HowToStep",
                  "position": 3,
                  "name": "Share Your Payment Link",
                  "text": "Get your unique payment link and share it with clients abroad. They can pay you from 45+ countries."
                },
                {
                  "@type": "HowToStep",
                  "position": 4,
                  "name": "Receive Payments",
                  "text": "Receive international payments directly into your Madhouse Wallet. Funds arrive within minutes to hours."
                },
                {
                  "@type": "HowToStep",
                  "position": 5,
                  "name": "Cash Out Locally",
                  "text": "Cash out to your local bank account or mobile money (M-Pesa, Airtel Money) instantly. Keep it simple and fast."
                }
              ]
            })
          }}
        />

        {/* Structured Data - LocalBusiness Kenya */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Madhouse Wallet Kenya",
              "description": "Payment and remittance app for small businesses in Kenya. Accept international payments and cash out to M-Pesa.",
              "url": "https://madhousewallet.com/ke",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "KE",
                "addressRegion": "Kenya"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Kenya"
              },
              "priceRange": "Free",
              "paymentAccepted": "M-Pesa, Bank Transfer, International Payment",
              "currenciesAccepted": "KES, USD, EUR, GBP"
            })
          }}
        />

        {/* Structured Data - LocalBusiness Nigeria */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Madhouse Wallet Nigeria",
              "description": "Payment and remittance app for small businesses in Nigeria. Accept international payments and cash out to Nigerian banks.",
              "url": "https://madhousewallet.com/ng",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NG",
                "addressRegion": "Nigeria"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Nigeria"
              },
              "priceRange": "Free",
              "paymentAccepted": "Bank Transfer, Mobile Money, International Payment",
              "currenciesAccepted": "NGN, USD, EUR, GBP"
            })
          }}
        />

        {/* Structured Data - LocalBusiness India */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Madhouse Wallet India",
              "description": "Payment and remittance app for small businesses in India. Accept international payments and receive remittances with bank transfer.",
              "url": "https://madhousewallet.com/in",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "India"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "priceRange": "Free",
              "paymentAccepted": "Bank Transfer, UPI, International Payment",
              "currenciesAccepted": "INR, USD, EUR, GBP"
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

        <title>Payment App for Small Business | Remittance App Kenya, Nigeria, India - Madhouse Wallet</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
