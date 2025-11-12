import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gregorio Mangione | Portfolio",
  description:
    "Portfolio personale di Gregorio Mangione — studente di Diritto e Tecnologia, sviluppatore web, e appassionato di accessibilità digitale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
