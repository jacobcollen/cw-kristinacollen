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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} min-h-screen`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">
            <div className="container mx-auto max-w-6xl px-6 py-8">
              {children}
            </div>
          </main>
          <ToastProvider>
            <Footer />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
