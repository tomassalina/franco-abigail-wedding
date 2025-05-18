import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Franco & Abigail - Boda",
  description:
    "Te invitamos a nuestra boda. ¡Acompáñanos en este día tan especial!",
  openGraph: {
    title: "Franco & Abigail - Boda",
    description:
      "Te invitamos a nuestra boda. ¡Acompáñanos en este día tan especial!",
    url: "https://boda-fran-abi.vercel.app",
    siteName: "Franco & Abigail - Boda",
    images: [
      {
        url: "/images/hero.image.png",
        width: 1200,
        height: 630,
        alt: "Franco & Abigail - Boda",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased bg-accent`}
      >
        {children}
      </body>
    </html>
  );
}
