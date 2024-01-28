import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const font = Poppins({
  weight: ["100", "200", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "this is anp web app to help you track ur issues ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
