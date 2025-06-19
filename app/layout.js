import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Scrum Project Manager",
  description: "A project management tool for Scrum teams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" theme="dark">
          {/* <header/> */}
          <main className="min-h-screen flex flex-col">
          {children}
          </main>
          <footer className="bg-gray-900 py-12">
            <div className="container mx-auto px-4 text-center text-gray-300">
              <p className="text-center text-sm ">
              © {new Date().getFullYear()} Scrum Project Manager. All rights reserved.
            </p>
            <p>Made with 💖 by DeveloperXdev</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
