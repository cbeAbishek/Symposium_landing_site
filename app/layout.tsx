import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  metadataBase: new URL("https://viyugam.vercel.app"),
  title: {
    default: "Viyugam 2k25",
    template: "%s | Viyugam",
  },
  description: "Viyugam 2k25 — National level technical symposium bringing students, innovators and industry together.",
  keywords: [
    "Viyugam",
    "technical symposium",
    "technical fest",
    "innovation",
    "hackathon",
    "workshops",
    "tech events",
    "college fest",
    "students",
    "research",
    "technology"
  ],
  applicationName: "Viyugam 2k25",
  authors: [
    { name: "Viyugam Organizers", url: "https://viyugam.vercel.app" },
  ],
  creator: "Viyugam Team",
  generator: "Next.js",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://viyugam.vercel.app/",
  },

  openGraph: {
    title: "Viyugam 2k25",
    description: "National level technical symposium — participate in events, workshops, and competitions.",
    url: "https://viyugam.vercel.app/",
    siteName: "Viyugam",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co/20Y5BYDk/innoverse-meta-tag.jpg",
        width: 1200,
        height: 630,
        alt: "Viyugam 2k25 Banner",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Viyugam 2k25",
    description: "National level technical symposium — join events, workshops and innovate.",
    images: ["https://i.ibb.co/20Y5BYDk/innoverse-meta-tag.jpg"],
    creator: "@ViyugamOfficial", // update with actual handle
    site: "@ViyugamOfficial",    // update with actual handle
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    // Generic crawlers
    bingBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/og.png",
    shortcut: "/og.png",
    apple: "/og.png",
    other: [
      { rel: "icon", url: "/og.png", sizes: "32x32" },
      { rel: "icon", url: "/og.png", sizes: "16x16" },
    ],
  },

  verification: {
    // Add real verification tokens here:
    google: "google-site-verification=G-B0LR28ES19",
  },

  // Fallback custom tags (if you need any additional raw meta tags)
  // You can add more specific tags via a Head component if required.
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
      <body className="bg-black">
        {children}
      </body>
    </html>
  );
}
