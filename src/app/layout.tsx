import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zahradnictví Rakovník - Profesionální péče o vaši zahradu",
  description: "Zahradnictví v Rakovníku nabízí široký sortiment rostlin, zahradní techniky a profesionální poradenství. Navštivte nás v Bezděkově 1037.",
  keywords: "zahradnictví, rakovník, rostliny, zahrada, květiny, stromy, keře",
  authors: [{ name: "Zahradnictví Rakovník s.r.o." }],
  openGraph: {
    title: "Zahradnictví Rakovník",
    description: "Profesionální péče o vaši zahradu v Rakovníku",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="absolute top-[-200px] right-0 w-[600px] h-[600px] bg-green-400 opacity-60 rounded-full blur-[420px] z-0 pointer-events-none" />
        <Nav />
        {children}
      </body>
    </html>
  );
}
