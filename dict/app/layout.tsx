import type { Metadata } from "next";
import { Play, Days_One } from 'next/font/google'
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";
import "./globals.scss";

const fnt_play = Play({
  weight: '400',
  variable: '--font-play'
})
const fnt_days = Days_One({
  weight: '400',
  variable: '--font-days'
})

export const metadata: Metadata = {
  title: "LexiGuide",
  description: "idk realy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fnt_days.variable} ${fnt_play.variable}`}>
        <Navigation />

        <div className="main">
          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  );
}
