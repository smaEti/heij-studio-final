import './globals.css'
import localFont from "next/font/local"

const aleo = localFont({ src: "../public/assets/fonts/Aleo-Medium.ttf", variable: "--font-Aleo"});
const Montserrat = localFont({ src: "../public/assets/fonts/Montserrat-Regular.ttf", variable: "--font-Montserrat"});

export const metadata = {
  title: 'Heij Studio',
  description: 'We are Heij Studio a creative team of motion designers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${aleo.variable} ${Montserrat.variable} bg-primary`}>{children}</body>
    </html>
  )
}
