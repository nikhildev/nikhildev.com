import NavBar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Nikhil Dev Chunchu",
  description: "Satanist, Musician, Beer drinker, Code monkey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
