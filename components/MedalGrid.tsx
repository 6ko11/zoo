import Image from 'next/image'

const allMedals = [
  { name: 'Aligátor severoamerický', image: '/soubory/aligatorseveroamericky.jpg' },
  { name: 'Ara arauna', image: '/soubory/araararauna.jpg' },
  { name: 'Ara hyacintový', image: '/soubory/arahyacintovy.jpg' },
  { name: 'Babirusa', image: '/soubory/babirusa.jpg' },
  { name: 'Blboun nejapný', image: '/soubory/blbounnejapny.jpg' },
  { name: 'Buvol', image: '/soubory/buvol.jpg' },
  { name: 'Dvojzoborožec indický', image: '/soubory/dvojzoborozecindicky.jpg' },
  { name: 'EARAZA', image: '/soubory/earaza.jpg' },
  { name: 'Eaza Silet Forest', image: '/soubory/eazaforest.jpg' },
  { name: 'Fenek', image: '/soubory/fenek.jpg' },
  { name: 'Hrabáč kapský', image: '/soubory/hrabackapsky.jpg' },
  { name: 'Hyena skvrnitá', image: '/soubory/hyenaskvrnita.jpg' },
  { name: 'Charza žlutohrdlá', image: '/soubory/charzazlutohrdla.jpg' },
  { name: 'Jaguár', image: '/soubory/jaguar.jpg' },
  { name: 'Jeřáb královský', image: '/soubory/jerabkralovsky.jpg' },
  { name: 'Klaun očkatý', image: '/soubory/klaunockaty.jpg' },
  { name: 'Klokan rudý', image: '/soubory/klokanrudy.jpg' },
  { name: 'Krajta', image: '/soubory/krajtapython.jpg' },
  { name: 'Krajta zelená', image: '/soubory/krajtazelena.jpg' },
  { name: 'Krokodýl', image: '/soubory/krokodyl.jpg' },
  { name: 'Langdur duk', image: '/soubory/langdurduk.jpg' },
  { name: 'Lemur kata', image: '/soubory/lemurkata.jpg' },
  { name: 'Medvěd ušatý', image: '/soubory/medvedusaty.jpg' },
  { name: 'Pes hyenový', image: '/soubory/peshyenovy.jpg' },
  { name: 'Tukan', image: '/soubory/tukan.jpg' },
  { name: 'Vlk hřivnatý', image: '/soubory/vlkhrivnaty.jpg' },
  { name: 'Vydra říční', image: '/soubory/vydraricni.jpg' },
  { name: 'Želva', image: '/soubory/zelvaostruhata.jpg' },
]

const newMedals = allMedals.slice(0, 21) // Assuming the first 21 medals are the new ones

interface MedalGridProps {
  showAll?: boolean
}

export default function MedalGrid({ showAll = false }: MedalGridProps) {
  const medals = showAll ? allMedals : newMedals

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {medals.map((medal, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-2">
            <Image
              src={medal.image}
              alt={medal.name}
              width={128}
              height={128}
              className="rounded-full object-cover"
            />
          </div>
          <p className="text-center text-sm">{medal.name}</p>
        </div>
      ))}
    </div>
  )
}

