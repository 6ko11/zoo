import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"

const references = [
  { name: 'DinoParky', image: '/soubory/dinopark.jpg', slug: 'dinoparky' },
  { name: 'EARAZA', image: '/soubory/earaza.jpg', slug: 'earaza' },
  { name: 'EAZA', image: '/soubory/eaza.jpg', slug: 'eaza' },
  { name: 'UCS ZOO', image: '/soubory/ucszoo.jpg', slug: 'ucs-zoo' },
  { name: 'Safari park Dvůr Králové', image: '/soubory/dvurkralove.jpg', slug: 'safari-park-dvur-kralove' },
  { name: 'ZOO Bojnice', image: '/soubory/bojnice.jpg', slug: 'zoo-bojnice' },
  { name: 'ZOO Bratislava', image: '/soubory/bratislava.jpg', slug: 'zoo-bratislava' },
  { name: 'ZOO Brno', image: '/soubory/brno.jpg', slug: 'zoo-brno' },
  { name: 'ZOO Bydgoszcz', image: '/soubory/bydgoszcz.jpg', slug: 'zoo-bydgoszcz' },
  { name: 'ZOO Děčín', image: '/soubory/decin.jpg', slug: 'zoo-decin' },
  // Add all other references here
]

export default function Reference() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Reference a prodejní místa</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {references.map((ref, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <Link href={`/reference/${ref.slug}`}>
                <div className="relative">
                  <Image
                    src={ref.image}
                    alt={ref.name}
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center p-2">
                    <span className="text-white text-sm font-semibold">{ref.name}</span>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

