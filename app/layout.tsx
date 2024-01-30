import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import NavBar from "./components/NavBar";
import { Theme, ThemePanel } from "@radix-ui/themes";

const font = Poppins({
  weight: ["100", "200", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
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
      <body className={font.variable}>
        <Theme appearance="light" accentColor="iris" radius="large">
          <NavBar />
          <main className="px-8 mt-2">{children}</main>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
