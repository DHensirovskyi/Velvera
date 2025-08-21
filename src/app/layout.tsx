import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});


export const metadata: Metadata = {
  title: "Velvera-Friseursalon",
  description: "Haarschnitt und Färben in Augsburg",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.className} suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/Erode-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <ScrollToTop />
        <MantineProvider defaultColorScheme="light">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
