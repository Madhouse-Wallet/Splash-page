import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Character encoding */}
        <meta charSet="utf-8" />

        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Favicon & Icons */}
        <link rel="icon" href="/favicn.png" />
        <link rel="apple-touch-icon" href="/favicn.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicn.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicn.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicn.png" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#0a0915" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0a0915" />
        <meta name="msapplication-TileColor" content="#0a0915" />

        {/* Resource Hints for Performance */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://media.madhousewallet.com" />
        <link rel="dns-prefetch" href="https://docs.madhousewallet.com" />
        <link rel="dns-prefetch" href="https://business.madhousewallet.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Primary Meta Tags */}
        <meta name="title" content="Madhouse Wallet — Virtual USD Account, Direct Debit & Global Payouts for International Businesses" />
        <meta name="description" content="Madhouse Wallet gives international businesses a virtual USD bank account with routing and account numbers, US bank direct debit (ACH) to collect payments from US customers, payment links, invoicing, and payouts to 43+ currencies including KES, NGN, INR, and CNY. FinCEN registered." />
        <meta name="keywords" content="virtual USD account for business, US bank account for international business, ACH direct debit, US bank pull payments, recurring bank payments from US customers, international business payments, global payouts Kenya Nigeria India China, send money to Kenya business, send money to Nigeria business, KES payout, NGN payout, INR payout, CNY payout, subscription billing ACH, invoice ACH payment, payment links US bank, B2B cross-border payments, virtual US bank account non-resident, USD account routing number, USD account without US entity, international payroll, vendor payments abroad, direct debit subscription billing, standing order US, ACH subscription, business payment platform, developer payments API, FinCEN registered payment service" />
        <meta name="author" content="Madhouse Wallet" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />

        {/* Geo Tags — Target Markets */}
        <meta name="geo.region" content="KE;NG;IN;CN" />
        <meta name="geo.placename" content="Kenya;Nigeria;India;China" />
        <meta name="geo.position" content="-1.286389;36.817223;9.081999;8.675277;20.593684;78.962880;35.861660;104.195397" />
        <meta name="ICBM" content="-1.286389, 36.817223" />

        {/* Target Audience */}
        <meta name="audience" content="International Business Owners, B2B Companies, SMEs with US customers, Cross-Border Businesses, Companies Paying Global Teams" />
        <meta name="target" content="Kenya, Nigeria, India, China, Philippines, Global" />

        {/* AI-Specific Meta Tags — plain-language entity description for LLM crawlers */}
        <meta name="summary" content="Madhouse Wallet is a business payments platform. It provides international businesses with a virtual USD bank account (routing number + account number), the ability to collect direct debit and recurring bank payments from US customers (called ACH in the United States), payment links for one-off bank payments, invoice management, and outbound payouts to 43+ currencies. It serves SMEs, B2B companies, and any business that collects from US customers or pays teams globally." />
        <meta name="category" content="Business Payments, Virtual USD Account, International Payouts, ACH Direct Debit, Cross-Border B2B Payments" />
        <meta name="use-cases" content="collect recurring bank payments from US customers, issue payment links to US clients, receive wire transfers and ACH into a US account, pay employees in Kenya Nigeria India China Philippines, send international vendor payments, manage B2B invoices with bank payment, set up subscription billing without a card, pay out to M-Pesa Kenya, pay out to NGN bank accounts Nigeria" />
        <meta name="primary-features" content="virtual USD account with routing and account numbers, ACH direct debit (US bank pull payments), recurring subscription billing, payment links, invoice management with bank payment, international payouts to 43+ currencies, developer API with webhooks, passkey authentication, KYC compliance" />
        <meta name="target-problems" content="no US bank account as a foreign company, can't collect recurring payments from US customers, no way to send payouts to Kenya or Nigeria in local currency, expensive wire fees for international payroll, need a US routing number without incorporating in the US" />
        <meta name="entity-type" content="Business Payment Platform, Virtual USD Bank Account Provider, ACH Direct Debit Service, International Payout Service, B2B Cross-Border Payments" />
        <meta name="not-related-to" content="NOT a consumer remittance app, NOT a cryptocurrency wallet, NOT Madhouse.ag DEX, NOT the MAD memetoken, NOT for personal money transfers" />
        <meta name="disambiguation" content="Madhouse Wallet (madhousewallet.com) is a B2B international payments platform — not a crypto wallet, not a consumer remittance service, not Madhouse.ag. It is a FinCEN-registered money services business (#31000303426052) that gives international companies a virtual USD bank account and tools to collect, hold, and send money globally." />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://madhousewallet.com/" />
        <meta property="og:title" content="Madhouse Wallet — Virtual USD Account & Global Payments for International Businesses" />
        <meta property="og:description" content="Get a US bank account with routing and account numbers. Collect direct debit and recurring bank payments from US customers. Send payouts to Kenya, Nigeria, India, China, and 43+ currencies. Built for international businesses." />
        <meta property="og:image" content="https://media.madhousewallet.com/og-image.png" />
        <meta property="og:image:alt" content="Madhouse Wallet — Business Payments Dashboard" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Madhouse Wallet" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_KE" />
        <meta property="og:locale:alternate" content="en_NG" />
        <meta property="og:locale:alternate" content="en_IN" />
        <meta property="og:updated_time" content="2026-03-22T12:00:00Z" />
        <meta property="og:see_also" content="https://docs.madhousewallet.com" />
        <meta property="article:publisher" content="https://madhousewallet.com" />
        <meta property="article:author" content="Madhouse Wallet" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://madhousewallet.com/" />
        <meta name="twitter:title" content="Madhouse Wallet — Virtual USD Account & Global Payments for International Businesses" />
        <meta name="twitter:description" content="Get a US bank account with routing and account numbers. Collect recurring bank payments from US customers. Pay out to Kenya, Nigeria, India, China and 43+ currencies." />
        <meta name="twitter:image" content="https://media.madhousewallet.com/twitter-image.png" />
        <meta name="twitter:image:alt" content="Madhouse Wallet Business Payments Dashboard" />

        {/* App Links */}
        <meta property="al:web:url" content="https://docs.madhousewallet.com" />
        <meta property="al:web:should_fallback" content="true" />
        <meta property="al:ios:app_name" content="Madhouse Wallet" />
        <meta property="al:ios:url" content="madhousewallet://open" />
        <meta property="al:android:app_name" content="Madhouse Wallet" />
        <meta property="al:android:package" content="com.madhousewallet.app" />
        <meta property="al:android:url" content="madhousewallet://open" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://madhousewallet.com/" />

        {/* Hreflang Tags */}
        <link rel="alternate" href="https://madhousewallet.com/" hrefLang="x-default" />
        <link rel="alternate" href="https://madhousewallet.com/" hrefLang="en" />
        <link rel="alternate" href="https://madhousewallet.com/" hrefLang="en-ke" />
        <link rel="alternate" href="https://madhousewallet.com/" hrefLang="en-ng" />
        <link rel="alternate" href="https://madhousewallet.com/" hrefLang="en-in" />
        <link rel="alternate" href="https://madhousewallet.com/" hrefLang="en-cn" />

        {/* Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Madhouse Wallet",
              "legalName": "Madhouse Wallet",
              "alternateName": ["Madhouse Business Payments", "Madhouse USD Account"],
              "description": "Madhouse Wallet is a business payments platform that provides international companies with a virtual USD bank account (routing number and account number), US bank direct debit to collect payments from US customers, payment links, invoice management, and payouts to 43+ currencies including KES, NGN, INR, and CNY.",
              "disambiguatingDescription": "Madhouse Wallet (madhousewallet.com) is a B2B international payments platform — not a cryptocurrency wallet, not a consumer remittance service, and not Madhouse.ag (a crypto DEX). It is a FinCEN-registered money services business (#31000303426052) that helps international companies hold USD, collect payments from US customers via direct debit and ACH, and send payouts to global bank accounts and mobile wallets.",
              "url": "https://madhousewallet.com",
              "logo": "https://media.madhousewallet.com/logo.png",
              "contactPoint": [{
                "@type": "ContactPoint",
                "email": "info@madhousewallet.com",
                "contactType": "Customer Service",
                "areaServed": ["Kenya", "Nigeria", "India", "China", "Philippines", "Worldwide"],
                "availableLanguage": ["English"]
              }],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1001 S. Main St. STE 500",
                "addressLocality": "Kalispell",
                "addressRegion": "MT",
                "postalCode": "59901",
                "addressCountry": "US"
              },
              "sameAs": ["https://docs.madhousewallet.com"],
              "foundingDate": "2023",
              "slogan": "Your US Dollar Account. Pay Out Globally.",
              "knowsAbout": [
                "Virtual USD Bank Accounts",
                "ACH Direct Debit",
                "Recurring Bank Payment Billing",
                "International Business Payouts",
                "Cross-Border B2B Payments",
                "Payment Links",
                "Invoice Management",
                "Developer Payments API"
              ],
              "memberOf": {
                "@type": "Organization",
                "name": "FinCEN Registered Money Services Business",
                "identifier": "31000303426052"
              }
            })
          }}
        />

        {/* Structured Data — SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Madhouse Wallet — Business Payment Platform",
              "applicationCategory": "FinanceApplication",
              "applicationSubCategory": "Business Payment Processing",
              "disambiguatingDescription": "Madhouse Wallet is a business payment platform for international companies — not a cryptocurrency wallet, not a consumer app, and not Madhouse.ag. It provides a virtual USD bank account, ACH direct debit, recurring billing, payment links, and global payouts.",
              "operatingSystem": "Web, iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2027-12-31"
              },
              "description": "A business payments platform giving international companies a virtual USD bank account, the ability to collect direct debit payments from US customers, and the ability to send payouts to 43+ currencies worldwide.",
              "featureList": [
                "Virtual USD bank account with routing and account numbers",
                "ACH direct debit — collect US bank pull payments from customers",
                "Recurring subscription billing on weekly, monthly, or yearly cycles",
                "Payment links — shareable URLs for one-off US bank payments",
                "Invoice management with built-in bank payment collection",
                "International payouts to 43+ currencies including KES, NGN, INR, CNY",
                "Local delivery via M-Pesa (Kenya) and bank transfer (Nigeria, India, China)",
                "Developer REST API with webhooks and API key management",
                "WebAuthn passkey authentication — no passwords",
                "KYC compliance and account statements",
                "FinCEN registered money services business #31000303426052"
              ],
              "countriesSupported": "Kenya, Nigeria, India, China, Philippines, and 43+ currencies worldwide"
            })
          }}
        />

        {/* Structured Data — WebSite with SearchAction */}
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
                "target": "https://madhousewallet.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Structured Data — FinancialService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "Madhouse Wallet — International Business Payment Platform",
              "legalName": "Madhouse Wallet",
              "description": "Madhouse Wallet provides international businesses with a virtual USD bank account, US bank direct debit (ACH) payment collection, recurring subscription billing, payment links, invoicing, and outbound payouts to 43+ currencies. FinCEN registered #31000303426052.",
              "disambiguatingDescription": "FinCEN-registered money services business (#31000303426052) providing B2B cross-border payment infrastructure. NOT a cryptocurrency service, NOT a consumer remittance app, NOT Madhouse.ag.",
              "url": "https://madhousewallet.com",
              "serviceType": [
                "Virtual USD Bank Account",
                "ACH Direct Debit Payment Collection",
                "Recurring Subscription Bank Billing",
                "Payment Links",
                "Business Invoice Management",
                "International Payout Service",
                "Cross-Border B2B Payment Platform",
                "Developer Payments API"
              ],
              "areaServed": [
                { "@type": "Country", "name": "Kenya" },
                { "@type": "Country", "name": "Nigeria" },
                { "@type": "Country", "name": "India" },
                { "@type": "Country", "name": "China" },
                { "@type": "Country", "name": "Philippines" },
                { "@type": "Place", "name": "43+ Currencies Worldwide" }
              ],
              "audience": {
                "@type": "Audience",
                "audienceType": "International Business Owners, B2B Companies, SMEs with US Customers, Companies Paying Global Teams"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Business Payment Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Virtual USD Account",
                      "description": "A US bank account with routing and account numbers for international businesses. Receive ACH credits, wire transfers, and direct deposits without a US entity or address."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "ACH Direct Debit — US Bank Pull Payments",
                      "description": "Collect one-time or recurring payments directly from US customers' bank accounts. Functions like a direct debit or standing order — initiated by the business, authorized by the customer. Processed via the ACH network."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Payment Links",
                      "description": "Generate shareable payment URLs. Send to any US customer by email or message — they pay directly from their bank account with no card or login required."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Subscription Billing",
                      "description": "Set up recurring bank transfer billing on weekly, monthly, or yearly cycles. Customers authorize once — the business collects automatically."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "International Payouts",
                      "description": "Send payments to bank accounts and mobile money wallets in 43+ currencies. Local delivery via M-Pesa in Kenya, bank transfer in Nigeria, IMPS/UPI in India, and local bank in China."
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Structured Data — FAQPage (AI and rich-result optimized) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Madhouse Wallet?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Madhouse Wallet is a business payments platform for international companies. It provides a virtual USD bank account with routing and account numbers, the ability to collect direct debit and recurring bank payments from US customers (ACH), payment links, invoice management, and outbound payouts to 43+ currencies including KES, NGN, INR, and CNY. It is FinCEN registered (#31000303426052) and designed for SMEs, B2B companies, and any business that collects from US customers or pays teams globally."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can an international business get a US bank account?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Madhouse Wallet provides international businesses with a virtual USD bank account that includes a US routing number and account number. You do not need a US address, a US entity, or a US Social Security Number. You can receive ACH credits, wire transfers, and direct deposits from US partners, clients, and platforms into this account."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is ACH direct debit and how does it work for international businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ACH direct debit is the US equivalent of a direct debit or standing order. It allows a business to pull payments directly from a customer's US bank account — the customer authorizes once and the business initiates each charge. Madhouse Wallet provides ACH direct debit so that international businesses can collect one-time and recurring payments from US customers without requiring a credit card. Funds are deposited into the business's virtual USD account within 1–3 business days."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I collect recurring payments from US customers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Madhouse Wallet supports subscription billing via ACH direct debit. You set a billing amount and cycle (weekly, monthly, or yearly), your US customer authorizes the bank debit once, and Madhouse Wallet automatically collects each payment on schedule. This works like a direct debit or standing order — no credit card required from the customer."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are payment links and when should I use them?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Payment links are shareable URLs you generate from your Madhouse Wallet dashboard and send to any US customer by email or message. The customer opens the link and pays directly from their US bank account — no card, no login, and no additional software required. Use payment links for one-off charges, quotes, or any situation where setting up a full direct debit mandate is more than you need."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which countries and currencies can I send payouts to?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Madhouse Wallet supports outbound payouts to 43+ currencies. Key markets include Kenya (KES, via M-Pesa or bank transfer), Nigeria (NGN, via local bank transfer), India (INR, via IMPS/UPI or bank transfer), China (CNY, via local bank), and Philippines (PHP). Payouts are funded from your virtual USD account or collected balance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I pay employees or vendors in Kenya, Nigeria, or India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "From your Madhouse Wallet dashboard, add the recipient's local bank account or mobile money details and initiate a payout. Madhouse Wallet converts from USD and delivers to the recipient's local account. For Kenya, this includes M-Pesa mobile money delivery. For Nigeria, funds arrive at the recipient's Nigerian bank account. For India, delivery is via IMPS, UPI, or bank transfer."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Madhouse Wallet have a developer API?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Madhouse Wallet provides a REST API with API key management, rate-limited endpoints, webhook support for real-time payment events, and interactive API documentation at docs.madhousewallet.com. Developers can manage payment collection, payouts, recipients, and invoices programmatically."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Madhouse Wallet compliant and regulated?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Madhouse Wallet is a FinCEN-registered Money Services Business (registration #31000303426052). The platform includes built-in KYC onboarding, transaction monitoring, and account statements for compliance purposes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is Madhouse Wallet different from a traditional bank?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unlike a traditional bank, Madhouse Wallet is designed specifically for international businesses that need a US dollar account without a US presence. It combines a virtual USD account with active payment collection tools (direct debit, payment links, invoicing) and outbound international payouts — all in one platform. Setup takes minutes, not weeks."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who is Madhouse Wallet built for?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Madhouse Wallet is built for international SMEs, B2B companies, and any business that collects payments from US customers or pays employees and vendors in emerging markets. Typical users include software companies serving US clients, staffing agencies paying teams in Africa and Asia, and any business that needs a US dollar account without incorporating in the United States."
                  }
                }
              ]
            })
          }}
        />

        {/* Structured Data — WebPage with SpeakableSpecification */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Madhouse Wallet — Virtual USD Account & Global Payments for International Businesses",
              "description": "Virtual USD bank account with routing and account numbers. Collect direct debit and recurring bank payments from US customers. Send payouts to Kenya, Nigeria, India, China, and 43+ currencies.",
              "url": "https://madhousewallet.com/",
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", ".hero-description", ".feature-list"]
              },
              "inLanguage": "en",
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "url": "https://media.madhousewallet.com/og-image.png",
                "width": 1200,
                "height": 630
              },
              "dateModified": "2026-03-22T12:00:00Z"
            })
          }}
        />

        {/* Structured Data — BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://madhousewallet.com/" },
                { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://madhousewallet.com/#features" },
                { "@type": "ListItem", "position": 3, "name": "FAQ", "item": "https://madhousewallet.com/#faq" }
              ]
            })
          }}
        />

        {/* Structured Data — Site Navigation (Google Sitelinks) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Madhouse Wallet Navigation",
              "description": "Main navigation links for Madhouse Wallet documentation and account access",
              "itemListElement": [
                {
                  "@type": "SiteNavigationElement",
                  "position": 1,
                  "name": "Open an Account",
                  "description": "Create your Madhouse Wallet business account",
                  "url": "https://business.madhousewallet.com/welcome"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 2,
                  "name": "API Documentation",
                  "description": "Developer API docs for payments, payouts, and webhooks",
                  "url": "https://docs.madhousewallet.com"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 3,
                  "name": "Virtual USD Account",
                  "description": "Get a US bank account with routing and account numbers",
                  "url": "https://docs.madhousewallet.com/virtual-account"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 4,
                  "name": "Direct Debit & Billing",
                  "description": "Collect recurring payments from US bank accounts",
                  "url": "https://docs.madhousewallet.com/direct-debit"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 5,
                  "name": "International Payouts",
                  "description": "Send payments to 43+ currencies worldwide",
                  "url": "https://docs.madhousewallet.com/payouts"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 6,
                  "name": "Privacy Policy",
                  "description": "How we protect your data and privacy",
                  "url": "https://docs.madhousewallet.com/legal-policies/privacy"
                }
              ]
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

        <title>Madhouse Wallet — Virtual USD Account, Direct Debit & Global Payouts for International Businesses</title>

        {/* Google Ads Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18002110915" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18002110915');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
