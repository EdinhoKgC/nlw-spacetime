import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as Roboto,
} from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-Jamjuree",
});

export const metadata = {
  title: "NLW SpaceTime",
  description:
    "Uma cápsula do tempo construida com React, Nect.JS, TailWindCss e TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
