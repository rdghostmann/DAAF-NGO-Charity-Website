import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/main-nav";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diocese of Asaba Agape Foundation (DAAF) - Touching Lives",
  description: "A humanitarian and sustainable development organization rooted in the Diocese of Asaba, Anglican Communion in Nigeria.",
  generator: 'RdTechSolutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={cn("min-h-screen bg-background antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="relative flex min-h-screen flex-col">
            <MainNav />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


