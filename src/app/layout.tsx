import "@/styles/globals.css"
import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider";

import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/theme-switcher";

const fontSans = FontSans({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "KOINONIA",
  description: "Somos uma junção de pessoas de igrejas interministeriais, o foco não é seguir uma denominação e sim unir pessoas que queiram louvar a Jesus Cristo com excelência, com verdadeira adoração e que entendam o que é louvar o Senhor na sua essência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <div className="fixed top-8 right-8">
              <ModeToggle />
            </div>
          </ThemeProvider>
        </body>
    </html>
  );
}
