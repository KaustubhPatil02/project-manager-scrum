import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

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
  title: "WorkFlow-Manager ✨",
  description: "A project management tool for Scrum teams",
};

export default function RootLayout({ children }) {
  return (
    <div>

    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables: {
          colorPrimary: "#6c63ff",
          colorBackground: "#121212",
          colorInputBackground: "#1e1e1e",
          // colorInputText: "#ffffff",
  
        },
        elements:{
          formButtonPrimary: "bg-sky-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded",
          card: "bg-gray-800",
          headerTitle: "text-2xl text-blue-300",
          headerSubtitle: "text-sm text-gray-400",
          // footer: "text-gray-500 text-sm",
        }
      }
      }
  >

    <html lang="en">
      <body
       className={`${inter.className}`} >
        <ThemeProvider attribute="class" defaulttheme="dark">
          <Header/>
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
    </ClerkProvider>
      </div>
  );
}
