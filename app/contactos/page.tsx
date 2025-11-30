import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react"

export default function ContactosPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactos</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Estamos à sua disposição. Visite-nos, ligue ou envie um email.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Localização
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-lg">Assistécnica, Lda</p>
                    <p className="text-muted-foreground">Rua Gomes de Amorim, 2052</p>
                    <p className="text-muted-foreground">Aver-o-Mar</p>
                    <p className="text-muted-foreground">4490-091 - Póvoa do Varzim</p>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline" asChild>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Rua+Gomes+de+Amorim+2052+Aver-o-Mar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Navigation className="w-4 h-4" />
                      Ver no Google Maps
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Telefones
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold mb-1">Rede Fixa Nacional</p>
                    <a href="tel:+351252100600" className="text-primary hover:underline text-lg">
                      +351 (252) 10 06 00
                    </a>
                    <p className="text-xs text-muted-foreground">Chamada para a rede fixa nacional</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Rede Móvel Nacional</p>
                    <a href="tel:+351913465435" className="text-primary hover:underline text-lg">
                      +351 (91) 346 54 35
                    </a>
                    <p className="text-xs text-muted-foreground">Chamada para a rede móvel nacional</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Fax</p>
                    <a href="tel:+351252619908" className="text-primary hover:underline text-lg">
                      +351 (252) 61 99 08
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:geral@assistecnica.pt" className="text-primary hover:underline text-lg">
                    geral@assistecnica.pt
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Horário de Funcionamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Segunda a Sexta</span>
                      <span className="text-muted-foreground">9:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Sábado</span>
                      <span className="text-muted-foreground">9:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Domingo</span>
                      <span className="text-muted-foreground">Encerrado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div>
              <Card className="h-full">
                <CardContent className="p-0 h-full min-h-[600px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0726699999995!2d-8.766542213493423!3d41.40022707991294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDI0JzAwLjgiTiA4wrA0NScxMS42Ilc!5e0!3m2!1spt-PT!2spt!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
