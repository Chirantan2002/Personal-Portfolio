import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import { fontMonaSans } from "@/assets/Fonts";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Chirantan - Portfolio",
  description: "A portfolio website about Chirantan Biswas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          twMerge(
            inter.variable,
            fontMonaSans.variable,
            calistoga.variable,
            "antialiased bg-slate-950 text-white font-sans"
          )
        )}
      >
        {children}
      </body>
    </html>
  );
}
