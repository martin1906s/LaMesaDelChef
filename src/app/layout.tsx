import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Mesa del Chef",
  description: "Buffet de comida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>La Mesa del Chef</title>
        <meta name="description" content="Buffet de comida" />
        <link rel="icon" href="/logo.jpg" />
        <link rel="shortcut icon" href="/logo.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.jpg" />
        <link rel="icon" type="image/x-icon" href="/logo.jpg" />
        <link rel="icon" type="image/svg+xml" href="/logo.jpg" />
        <link rel="icon" type="image/vnd.microsoft.icon" href="/logo.jpg" />
        <link rel="icon" type="image/webp" href="/logo.jpg" />
        <link rel="icon" type="image/avif" href="/logo.jpg" />
        <link rel="icon" type="image/jpg" href="/logo.jpg" />
        <link rel="icon" type="image/jpeg" href="/logo.jpg" />
        <link rel="icon" type="image/gif" href="/logo.jpg" />
        <link rel="icon" type="image/bmp" href="/logo.jpg" />
        <link rel="icon" type="image/tiff" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/logo.jpg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="La Mesa del Chef" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-status-bar-style" content="black" />
        <meta name="mobile-web-app-title" content="La Mesa del Chef" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
