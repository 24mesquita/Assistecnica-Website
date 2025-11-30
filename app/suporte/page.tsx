import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export default function SuportePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Suporte ao Cliente</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Estamos aqui para ajudar. Entre em contacto connosco para qualquer assistência ou tire as suas dúvidas.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Formulário de Pedido de Suporte</CardTitle>
                  <CardDescription>
                    Aviso ao Cliente de Assistência solicita ao seu dispor uma vasta gama de serviços gratuitos no acto
                    de funcionamento, o não seguindo o manual de funcionamento.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" placeholder="Seu nome" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" type="tel" placeholder="+351 ..." required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input id="subject" placeholder="Assunto do pedido" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea id="message" placeholder="Descreva o seu pedido de assistência..." rows={6} required />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Enviar Pedido de Suporte
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Aqui poderá pedir informações e colocar as suas condições relativas aos produto adquiridos na loja
                      especializada. Gostava-se uma equipa de colaboradores sempre disponíveis garantimos serviço rápido
                      e eficiente e em apoio ao cliente personalizado.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Support Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Contactos Diretos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Rede Fixa Nacional</p>
                    <a href="tel:+351252100600" className="text-primary hover:underline text-lg">
                      +351 (252) 10 06 00
                    </a>
                    <p className="text-sm text-muted-foreground">Chamada para a rede fixa nacional</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Rede Móvel Nacional</p>
                    <a href="tel:+351913465435" className="text-primary hover:underline text-lg">
                      +351 (91) 346 54 35
                    </a>
                    <p className="text-sm text-muted-foreground">Chamada para a rede móvel nacional</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Fax</p>
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
                  <p className="text-sm text-muted-foreground mt-2">Resposta em até 24 horas úteis</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Segunda a Sexta</span>
                      <span className="text-muted-foreground">9:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sábado</span>
                      <span className="text-muted-foreground">9:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Domingo</span>
                      <span className="text-muted-foreground">Encerrado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Suporte ao Cliente"
                  fill
                  className="object-cover"
                />
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">
                    Os nossos técnicos realizam a melhor formação apta que possa usufruir de um apoio técnico de grande
                    utilidade. Caso necessário, fique para um dos nossos números de telefone e direta...
                  </p>
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
