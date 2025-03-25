import "@/styles/globals.css";
import { ThemeProvider } from "./_components/theme-provider";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Header from "./_components/Header";
import { Footer } from "./_components/Footer";
import { ToastProvider } from "@/components/ui/toast";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Hemsida för Kristina Collén",
  description:
    "Kristina är författare av både barnböcker och skönlitteratur. Medlem i Sveriges Författarförbund och aktiv föreläsare inom sociala frågor och kreativt skrivande.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={`${GeistSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-1">{children}</main>
          <ToastProvider>
            <Footer />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
