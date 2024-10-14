import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { cn } from '@/lib/utils'
import { ThemeProvider } from "@/components/ThemeProvider";

const fontSans = Montserrat(
  { subsets: ["latin"],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-sans',
   });

export const metadata: Metadata = {
  title: "KIIT Care",
  description: "Heathcare Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
