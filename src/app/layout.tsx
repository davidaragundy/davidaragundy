import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const ubuntu = Ubuntu({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "David Aragundy",
  description: "My amazing portfolio 🤙",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
