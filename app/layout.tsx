import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Analytics } from "./components/analytics";

export const metadata = {
  title: {
    default: "Innoverse 2k25",
    template: "%s | Innoverse",
  },
  description: "National level technical symposium",

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
    type: "website",
  },

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
  icons: {
    shortcut: "/licet.png", // Path to favicon or shortcut icon
  },

  twitter: {
    card: "summary_large_image",
    title: "Innoverse 2k25",
    description: "National level technical symposium",
    images:"https://i.ibb.co/HfvBBB33/innoverse.jpg",
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
      <body className="bg-black">
        {children}
      </body>
    </html>
  );
}
