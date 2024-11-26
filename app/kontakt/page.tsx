import { Phone, Mail } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function Kontakt() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 ">Kontakt</h1>
      <img
      src="soubory/kontakt.jpg"
      alt="poslani ZOO"
      className="w-full h-auto"
    />
      
      <div className="mb-12 text-xl">
        <p>V případě jakýchkoliv dotazů či doporučení nás neváhejte kontaktovat a brzy se Vám ozveme.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="flex items-center p-6">
            <Phone className="h-6 w-6 mr-4" />
            <div>
              <p className="text-sm text-muted-foreground">Telefon</p>
              <p className="text-lg font-semibold">
                <a href="tel:+420774900230" className="hover:underline">+420 774 900 230</a>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center p-6">
            <Mail className="h-6 w-6 mr-4" />
            <div>
              <p className="text-sm text-muted-foreground">E-mail</p>
              <p className="text-lg font-semibold">
                <a href="mailto:cullinan@cullinan.cz" className="hover:underline">cullinan@cullinan.cz</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

