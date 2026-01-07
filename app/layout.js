import './globals.css'

export const metadata = {
  title: 'Freelance Developer | Join My Journey to Financial Freedom',
  description: 'Hire a skilled freelance developer for Next.js, Nuxt.js, Laravel, and more. Follow my journey to financial freedom.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
