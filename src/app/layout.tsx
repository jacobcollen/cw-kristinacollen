import "@/styles/globals.css";
import { ThemeProvider } from "./_components/theme-provider";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Header from "./_components/Header";
import { Footer } from "./_components/Footer";
import { ToastProvider } from "@/components/ui/toast";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Hemsida för Kristina COllén",
  description:
    "Kristina är författare av både barnböcker och skönlitteratur. Medlem i Sveriges Författarförbund och aktiv föreläsare inom sociala frågor och kreativt skrivande.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="h-full mx-auto flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container min-h-screen mx-auto max-w-6xl flex-grow px-6">
            {children}
          </main>
          <ToastProvider>
            <Footer />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
