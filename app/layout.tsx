import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: {
    default: "Bitelist",
    template: "%s | Bitelist",
  },
  description:
    "Discover, share, and create your favorite recipes with the Bitelist community.",
  keywords: [
    "recipes",
    "cooking",
    "food",
    "Bitelist",
    "meal planning",
    "community",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="light" suppressHydrationWarning>
        <body
          className={`${inter.className} ${caveat.variable} antialiased flex min-h-screen flex-col`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="flex-1">
              <div className="container">{children}</div>
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
