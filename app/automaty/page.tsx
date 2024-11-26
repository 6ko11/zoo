import Image from 'next/image'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export default function Automaty() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Prodejní automaty a měničky</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Prodejní automaty</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/soubory/automat1.jpg"
              alt="Prodejní automaty"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Měničky bankovek</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/soubory/automat3.jpg"
              alt="Měničky bankovek"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </CardContent>
        </Card>
      </div>

      <div className="prose max-w-none mb-12">
        <p>Společnost CULLINAN, podniká v oblasti výroby a prodeje pamětních medailí prostřednictvím bezobslužných prodejních automatů vlastní výroby od roku 2000.</p>
        
        <p>Naše společnost je tradičním výrobcem pamětních medailí z učlechtilého materiálu Nordic Gold, ale i bezobslužných výdejních automatů na prodej pamětních Mincí, resp. medailí z materiálu Hardox. Jaký je rozdíl mezi mincí a medailí? Mince je označení pro platidlo s určitou nominální hodnotou. Medaile je označení pro předmět, který není platidlo, ale může mít sběratelskou či finanční hodnotu podléhající puncovnímu zákonu. Termín pamětní medaile z tohoto důvodu není náhodný a je pro naše výrobky správný.</p>
        
        <p>Výrobu prodejních automatů pro nás zajišťuje společnost MOD Elektronic z Nového Městě na Moravě. Technické řešení je zapsané u Úřadu průmyslového vlastnictví. Výrobky mají krytí IP43 a jsou v členských zemích EU Certifikovány pro provoz v exteriérech.</p>
        
        <p>Automaty na prodej pamětních medailí jsou vyrobené ze švédského kaleného plechu HARDOX, který je odolný proti oděru a má vysokou pevnost. Z tohoto materiálu se vyrábí korby nákladních automobilů nebo námořní přepravní kontejnery. Díky použitým materiálům převyšují automaty běžnou životnost odpisové třídy 2 i v extrémních klimatických podmínkách. Automaty neprodáváme, automaty pronajímáme. Doplňování automatů zajišťuje provozovatel a vlastních zajišťuje běžnou údržbu a 48 hodinový servis.</p>
        
        <h2>Automaty vyrábíme ve 3 základních provedeních:</h2>
        <ul>
          <li>Automaty na mince</li>
          <li>Automaty na bankovky</li>
          <li>Automaty interaktivní</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <Image
            src="/soubory/certifikatcz.jpg"
            alt="Certifikát"
            width={300}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div>
          <Image
            src="/soubory/prohlasenioschodeczfull.jpg"
            alt="Prohlášení o shodě"
            width={300}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="prose max-w-none mb-12">
        <p>Koncepce HW řešení využívá komponentů výherních automatů z herního průmyslu. Používáme výlučně ověřené komponenty vyrobené v Německu, Holandsku a Anglii. SW řešení je naším duševním vlastnictvím podporované vzdáleným dohledem prostřednictvím internetu s využitím aplikace Mydlink. Automaty mají díky svému jednoduchému konstrukčnímu řešení i určité nevýhody. Nerozměňují a nevracení peníze. Hlavním důvodem proč vracení peněz nepodporujeme je bezpečnost a velikost stroje. Zásobník na vracení přeplatku pracuje gravitačně, což by zásadně zvětšilo požadavek na výšku a nezbytné zásoby drobných na vrácení by zhoršily podmínky pojištění. Při prodeji našich produktů pracujeme s cenou, která vracení přeplatku nezbytně nevyžaduje.</p>
        
        <p>Automaty mají vedle běžného Dokladu o shodě i Certifikát s IP43 vydaný Státní zkušebnou. Naše automaty jsou schopny s doplňkovým zařízením bez záruky pracovat v teplotách od -35 do +55 stupňů, se zárukou od -20 do +40 stupňů. Máme instalace jak za Kavkazem, tak na Apeninském poloostrově.</p>
        
        <h2>Ke stažení</h2>
        <ul>
          <li><a href="/soubory/specifikaceautomatuczen.pdf" target="_blank" rel="noopener noreferrer">Technická specifikace automatů</a></li>
          <li><a href="/soubory/automatmincecz.pdf" target="_blank" rel="noopener noreferrer">Automat na mince galerie</a></li>
          <li><a href="/soubory/interaktivniautomatcz.pdf" target="_blank" rel="noopener noreferrer">Interaktivní automat galerie</a></li>
        </ul>
      </div>
    </div>
  )
}

