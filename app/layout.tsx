import Link from "next/link"

export const metadata = {
  title: 'Horrornomicon',
  description: 'Blog ficcional de uma caçadora de monstros',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div>
        <Link href="/">
          <h1>Horronomicon</h1>
        </Link>
      </div>
    </header>
  )
  
  const footer = (
    <footer>
      <div>
        <p>c 2023</p>
      </div>
    </footer>
  )

  return (
    <html lang="pt-BR">
      <head />
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
