import Link from 'next/link'
import { Button } from "@/components/ui/button"
import MedalGrid from '@/components/MedalGrid'

export default function Novinky() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Kolekce pamětních medailí 2019 - 2020</h1>
      <MedalGrid showAll={false} />
      <div className="mt-8 text-center">
        <Button asChild>
          <Link href="/katalog">Chci ukázat celý katalog</Link>
        </Button>
      </div>
    </div>
  )
}

