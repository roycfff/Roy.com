import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Roy Davidi | Fintech & AI Systems Integration Expert",
  description: "Professional fintech expert specializing in algorithmic trading systems and AI integration. Experienced in building cutting-edge financial technology solutions.",
  keywords: "fintech, algorithmic trading, AI systems, financial technology, trading algorithms, Roy Davidi",
  authors: [{ name: "Roy Davidi" }],
  creator: "Roy Davidi",
  openGraph: {
    title: "Roy Davidi | Fintech & AI Systems Expert",
    description: "Professional fintech expert specializing in algorithmic trading systems and AI integration.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roy Davidi | Fintech & AI Systems Expert",
    description: "Professional fintech expert specializing in algorithmic trading systems and AI integration.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <html lang="en">
      <body className="antialiased">
        {isDevelopment && <ErrorReporter />}
        {isDevelopment && (
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
        )}
        {children}
        <Toaster />
        {isDevelopment && <VisualEditsMessenger />}
      </body>
    </html>
  );
}