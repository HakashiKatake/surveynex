import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "SurveyNex - Join the Waitlist",
  description: "The future of intelligent survey creation and analysis is coming soon. Join our exclusive waitlist for early access.",
  keywords: ["survey", "data analysis", "feedback", "waitlist", "SurveyNex"],
  authors: [{ name: "SurveyNex Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "SurveyNex - Join the Waitlist",
    description: "The future of intelligent survey creation and analysis is coming soon.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SurveyNex - Join the Waitlist",
    description: "The future of intelligent survey creation and analysis is coming soon.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
