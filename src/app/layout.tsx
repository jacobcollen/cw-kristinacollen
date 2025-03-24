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
    <html
      lang="sv"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body className="flex h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex-1">
            <main className="flex-1" style={{ minHeight: 'calc(100vh - 6rem)' }}>{children}</main>
            <ToastProvider>
              <Footer />
            </ToastProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
