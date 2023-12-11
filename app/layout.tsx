import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saurabh Tiwari",
  description: "Passionate software developer proficient in full-stack development, with expertise in both frontend and backend technologies, dedicated to crafting innovative and scalable solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-7xl mx-auto p-4">
          <Profile />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
