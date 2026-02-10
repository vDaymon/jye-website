import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Estructuras Metálicas J y E | Ingeniería en acero en Antioquia",
  description:
    "Ingeniería, fabricación y montaje de estructuras metálicas certificadas en Antioquia: pérgolas, guardarraíles, escaleras, cerramientos y mantenimiento industrial.",
  openGraph: {
    title: "Estructuras Metálicas J y E",
    description:
      "Diseño, fabricación y montaje de estructuras metálicas con cálculos avalados y acabados premium en Antioquia y el Área Metropolitana.",
    type: "website",
    locale: "es_CO",
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
