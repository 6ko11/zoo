import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Card, CardContent } from "@/components/ui/card"

// This data should ideally come from a database or API
const references = {
  'dinoparky': {
    name: 'DinoParky',
    headerImage: '/soubory/dinopark.jpg',
    medals: [
      { name: 'Spinosaurus', image: '/soubory/spinosaurus.jpg' },
      { name: 'Stegosaurus', image: '/soubory/stegosaurus.jpg' },
      { name: 'Tarbosaurus', image: '/soubory/tarbosaurus.jpg' },
      { name: 'Tyrannosaurus Rex', image: '/soubory/tyranosaurusrex.jpg' },
    ]
  },
  'eaza': {
    name: 'Eaza',
    headerImage: '/soubory/dinopark.jpg',
    medals: [
      { name: 'Spinosaurus', image: '/soubory/spinosaurus.jpg' },
      { name: 'Stegosaurus', image: '/soubory/stegosaurus.jpg' },
      { name: 'Tarbosaurus', image: '/soubory/tarbosaurus.jpg' },
      { name: 'Tyrannosaurus Rex', image: '/soubory/tyranosaurusrex.jpg' },
    ]
  },
}

// Type for reference object
interface Reference {
  name: string;
  headerImage: string;
  medals: { name: string; image: string }[];
}

// Type for page props
interface ReferencePageProps {
  params: {
    slug: string;
  };
}

export default function ReferencePage({ params }: ReferencePageProps) {
  const reference = references[params.slug as keyof typeof references];

  if (!reference) {
    notFound(); // If no reference is found, show the "not found" page
    return null; // Prevent rendering the rest of the component
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative w-full h-64 mb-8">
        <Image
          src={reference.headerImage}
          alt={reference.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <h1 className="text-4xl font-bold mb-8">{reference.name}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {reference.medals.map((medal, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src={medal.image}
                  alt={medal.name}
                  width={300}
                  height={200}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center p-2">
                  <span className="text-white text-sm font-semibold">{medal.name}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
