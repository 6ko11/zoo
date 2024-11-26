import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link href="/">
  <div>
    <img src="/soubory/logo.svg" alt="Cullinan Logo" className="h-8 w-auto" />
  </div>
</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost" asChild><Link href="/">O nás</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/novinky">Novinky</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/katalog">Katalog</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/automaty">Prodejní automaty a měničky</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/reference">Reference</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/kontakt">Kontakt</Link></Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header