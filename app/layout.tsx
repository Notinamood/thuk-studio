import "./globals.css";
import {Manrope} from 'next/font/google'
import { Libre_Baskerville } from "next/font/google";
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-baskerville",
});
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata = {
  title: "THUK Studio",
  description: "Creative Studio Experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"
    className={libreBaskerville.variable}>
      <body  className={`bg-black text-white overflow-x-hidden ${manrope.className}`}>
        {children}
      </body>
    </html>
  );
}