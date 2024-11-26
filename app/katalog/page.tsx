import MedalGrid from '@/components/MedalGrid'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Katalog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Katalog medaile Gold</h1>
      <MedalGrid showAll={true} />
      <div className="mt-8 text-center">
        <Button asChild>
          <Link href="/novinky">Chci ukázat jen novinky</Link>
        </Button>
      </div>
    </div>
  )
}

