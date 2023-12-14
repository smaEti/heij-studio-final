import './globals.css'
import localFont from "next/font/local"

const steiner = localFont({ src: "../public/assets/fonts/SteinerLight-JR1o.ttf", variable: "--font-steiner"});
const outfit = localFont({ src: "../public/assets/fonts/Outfit-VariableFont_wght.ttf", variable: "--font-outfit"});

export const metadata = {
  title: 'Heij Studio',
  description: 'We are Heij Studio a creative team of motion designers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${steiner.variable} ${outfit.variable} bg-background`}>{children}</body>
    </html>
  )
}
