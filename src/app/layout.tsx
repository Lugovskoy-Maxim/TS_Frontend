import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans, Exo_2 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/helpers/theme-provider";
import { ModeToggle } from "@/helpers/themesToggle";


const geistNotoSans = Noto_Sans
({
  weight: "400",
  subsets: ["cyrillic", "latin"],
  display: "swap",
  variable: "--font-sansation",
});

const exo_2 = Exo_2({
  weight: "400",
  subsets: ["cyrillic", "latin"],
  display: "swap",
  variable: "--font-sansation",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["cyrillic", "latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: `ООО "Трансстрой"`,
  description: "Строительная компания ООО Трансстрой",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`flex justify-center min-h-screen 
          ${exo_2.variable} 
          ${geistNotoSans.variable} 
          ${geistSans.variable} 
          ${geistMono.variable} 

          antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
