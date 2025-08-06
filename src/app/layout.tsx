import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from '@vercel/analytics/next';

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
});

export const metadata: Metadata = {
  title: "Emmanuel Otoo",
  openGraph: {
    title: "Emmanuel | Portfolio",
    description: "Explore Emmanuel's portfolio - software engineer and developer.",
    url: "https://emmanuelotoo.dev",
    siteName: "Emmanuel's Portfolio",
    images: [
      {
        url: "https://emmanuelotoo.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Otoo Portfolio Preview",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel | Portfolio",
    description: "Explore Emmanuel's portfolio - software engineer and developer.",
    images: ["https://emmanuelotoo.dev/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${diaType.variable} ${ppModwest.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}