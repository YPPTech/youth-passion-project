import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display, Nunito, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Youth Passion Project | Free Online & In-Person Classes",
  description:
    "Youth Passion Project connects students with passionate, high-quality instructors to discover what they love and build the skills to pursue it.",
  openGraph: {
    title: "Youth Passion Project | Free Online & In-Person Classes",
    description:
      "Youth Passion Project connects students with passionate, high-quality instructors to discover what they love and build the skills to pursue it.",
    url: "https://www.youthpassionproject.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} ${nunito.variable} ${lora.variable}`}>
      <body className="flex min-h-screen min-w-0 flex-col overflow-x-clip antialiased">
        <Header />
        <main className="min-w-0 w-full flex-1 pt-[var(--ypp-nav-height)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
