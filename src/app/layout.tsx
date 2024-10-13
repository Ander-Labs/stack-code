import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";

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

import { ThemeProvider } from "@/components/global/theme-provider";

const Header = dynamic(() => import("@/components/global/header"));
const Footer = dynamic(() => import("@/components/global/footer"));
const MobileNav = dynamic(() => import("@/components/global/mobileNav"));

export const metadata: Metadata = {
  title: "Stack Code",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Header />
            {children}
            <Footer />
            <MobileNav />
          
          </ThemeProvider>
        
      </body>
    </html>
  );
}
