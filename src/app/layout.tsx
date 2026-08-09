import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const diaType = localFont({
  src: [
    {
      path: "../../public/fonts/ABCDiatype-Light-Trial.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ABCDiatype-Regular-Trial.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ABCDiatype-Medium-Trial.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-diatype",
  display: "swap",
});

const ppModwest = localFont({
  src: [
    {
      path: "../../public/fonts/PPMondwest-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ppModwest",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Emmanuel Otoo - Software Engineer & Developer",
    template: "%s | Emmanuel Otoo"
  },
  description: "Software Engineer.",
  keywords: [
    "Emmanuel Otoo",
    "Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Ghana Developer"
  ],
  authors: [{ name: "Emmanuel Otoo", url: "https://emmanuelotoo.github.io" }],
  creator: "Emmanuel Otoo",
  publisher: "Emmanuel Otoo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emmanuelotoo.github.io",
    title: "Emmanuel Otoo - Software Engineer",
    description: "Software Engineer.",
    siteName: "Emmanuel Otoo Portfolio",
    images: [
      {
        url: "https://emmanuelotoo.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Otoo - Software Engineer & Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Otoo - Software Engineer",
    description: "Software Engineer",
    creator: "@emmanuelotoo_",
    images: ["https://emmanuelotoo.github.io/og-image.png"],
  },
  metadataBase: new URL("https://emmanuelotoo.github.io"),
  alternates: {
    canonical: "https://emmanuelotoo.github.io",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Emmanuel Otoo",
    jobTitle: "Software Engineer",
    description: "Software Engineer",
    url: "https://emmanuelotoo.github.io",
    image: "https://emmanuelotoo.github.io/profile.jpg",
    sameAs: [
      "https://github.com/emmanuelotoo",
      "https://www.linkedin.com/in/emmanuel-otoo-/",
      "https://x.com/emmanuelotoo_"
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "SQL",
      "HTML",
      "CSS",
      "TailwindCSS",
      "Express.js",
      "Git",
      "Software Development",
      "Full-Stack Development",
      "Web Development"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Ghana",
      url: "https://www.ug.edu.gh",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Legon",
        addressRegion: "Greater Accra",
        addressCountry: "Ghana"
      }
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "Ghana"
    }
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://emmanuelotoo.github.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#111111" />
        <meta name="color-scheme" content="dark" />
        <meta name="msvalidate.01" content="02027B3BC7404075FDDC7C369F9C0D41" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16x16.svg" type="image/svg+xml" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" href="/fonts/ABCDiatype-Regular-Trial.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PPMondwest-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </head>
      <body className={`${diaType.variable} ${ppModwest.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}