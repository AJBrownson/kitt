import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const neueMontreal = localFont({
  src: [
    {
      path: "./fonts/NeueMontreal-Bold.woff",
      weight: "700",
    },
    {
      path: "./fonts/NeueMontreal-Medium.woff",
      weight: "500",
    },
    {
      path: "./fonts/NeueMontreal-Regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/NeueMontreal-Light.woff",
      weight: "300",
    },
  ],
  variable: "--font-neue-montreal",
});

export const metadata: Metadata = {
  title: "AI Powered FAQ Bot",
  description: "A chatbot that answers your questions using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${neueMontreal.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
