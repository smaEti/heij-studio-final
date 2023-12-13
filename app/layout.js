import './globals.css'

export const metadata = {
  title: 'Heij Studio',
  description: 'We are Heij Studio a creative team of motion designers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
