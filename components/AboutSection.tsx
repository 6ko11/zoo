import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">O nás</h1>
      
      <Card className="mb-8">
        <CardHeader>
        <img
      src="soubory/poslanizoo.jpg"
      alt="Zoo mission image"
      className="w-full h-auto"
    />
          <CardTitle>Poslání ZOO</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Pokrok nelze zastavit, ale jeho rozvoj by neměl být na úkor přírodního dědictví. V důsledku lidské činnosti jsou prozkoumávány nové, dříve nepřístupné části přírodního prostředí. Většina z nově popsaných druhů okamžitě přejde do seznamu ohrožených. Hlavním posláním zoologických zahrad je zachování biologické rozmanitosti v zájmu plnohodnotného vývoje budoucích generací.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
        <img
      src="soubory/naseposlani.jpg"
      alt="poslani ZOO"
      className="w-full h-auto"
    />
          <CardTitle>Naše poslání</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Našim cílem je zajistit dodatečné finanční prostředky na podporu chovu vybraných druhů. V zoologických zahradách organizujeme prodej pamětních mincí – medailí, prostřednictvím bezobslužných prodejních automatů. Pamětní medaile je vyhledávaný upomínkový předmět s uměleckou hodnotou. Jejím zakoupením získáte nejen vzpomínku na zážitek, ale je to i forma jak zoologické zahrady finančně podpořit v jejich činnosti.
          </p>
        </CardContent>
      </Card>

      <Card>
      <img
      src="soubory/onas.jpg"
      alt="poslani ZOO"
      className="w-full h-auto"
    />
        <CardHeader>
          <CardTitle>O nás</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Naše společnost je výrobcem pamětních medailí a prodejních automatů s 15 letou tradicí. Návrhy pamětních medailí pro nás zajišťuje akademická sochařka Majka Wichnerová, která spolupracuje i s ČNB. Pamětní medaile razíme jako jediní v České mincovně v Jablonci nad Nisou z anti alergenního materiálu Nordic Gold, ze kterého se razí oběžné mince EURO v hodnotě 0,10 – 0,20 – 0,50 Eur.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default AboutSection

