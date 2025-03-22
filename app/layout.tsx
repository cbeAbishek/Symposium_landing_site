import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  /**
   * Page Title Configuration
   * - `default`: The default title when no specific title is provided.
   * - `template`: A template format where %s is replaced with the page-specific title.
   */
  title: {
    default: "Innoverse 2k25",
    template: "%s | Innoverse",
  },

  /**
   * Meta Description (improves SEO and search engine ranking)
   */
  description: "National level technical symposium",

  /**
   * Open Graph Meta Tags (for rich previews on social media platforms)
   */
  openGraph: {
    title: "Innoverse 2k25",
    description: "National level technical symposium",
    url: "https://symposium-landing-site.vercel.app/", // Update with actual website URL
    siteName: "Innoverse",
    images: [
      {
        url: "https://raw.githubusercontent.com/cbeAbishek/Symposium_landing_site/refs/heads/main/public/innoverse.jpg",
        width: 1200,
        height: 630,
        alt: "Innoverse 2k25 Banner",
      },
    ],
    locale: "en-US",
    type: "website",
  },

  /**
   * Robots Meta Tags (controls search engine crawling and indexing)
   */
  robots: {
    index: true, // Allow search engines to index the page
    follow: true, // Allow search engines to follow links on the page
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1, // No limit on video preview
      "max-image-preview": "large", // Allow large image preview
      "max-snippet": -1, // No limit on snippet length
    },
  },

  /**
   * Favicon & Shortcut Icon
   */
  icons: {
    shortcut: "/licet.png", // Path to favicon or shortcut icon
  },

  /**
   * Twitter Card Meta Tags (enhances link previews on Twitter)
   */
  twitter: {
    card: "summary_large_image",
    title: "Innoverse 2k25",
    description: "National level technical symposium",
    images:"https://raw.githubusercontent.com/cbeAbishek/Symposium_landing_site/refs/heads/main/public/innoverse.jpg",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body className={`bg-black`}>
        {children}
      </body>
    </html>
  );
}
