import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BrandsCarousel } from "@/components/brands-carousel"
import { ArrowRight, CheckCircle, Phone, Wrench, Truck, CreditCard, Clock, Headphones } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const brands = [
    { name: "Braun", logo: "/brands/braun.jpg" },
    { name: "Airlux", logo: "/brands/airlux.png" },
    { name: "Balay", logo: "/brands/balay.jpg" },
    { name: "Ariete", logo: "/brands/ariete.png" },
    { name: "Bosch", logo: "/brands/bosch.png" },
    { name: "AEG", logo: "/brands/aeg.png" },
    { name: "Blanco", logo: "/brands/blanco.jpg" },
    { name: "Beko", logo: "/brands/beko.png" },
    { name: "Edesa", logo: "/brands/edesa.png" },
    { name: "Fagor", logo: "/brands/fagor.jpg" },
    { name: "Candy", logo: "/brands/candy.jpg" },
    { name: "Flama", logo: "/brands/flama.png" },
    { name: "Hoover", logo: "/brands/hoover.png" },
    { name: "Frasa", logo: "/brands/frasa.webp" },
    { name: "Grundig", logo: "/brands/grundig.png" },
    { name: "Cata", logo: "/brands/cata.png" },
    { name: "Electrolux", logo: "/brands/electrolux.png" },
    { name: "Franke", logo: "/brands/franke.png" },
    { name: "Liebherr", logo: "/brands/liebherr.svg" },
    { name: "Indesit", logo: "/brands/indesit.jpg" },
    { name: "Junkers", logo: "/brands/junkers.png" },
    { name: "Moulinex", logo: "/brands/moulinex.svg" },
    { name: "Kenwood", logo: "/brands/kenwood.jpg" },
    { name: "Meireles", logo: "/brands/meireles.jpg" },
    { name: "LG", logo: "/brands/lg.jpg" },
    { name: "Sharp", logo: "/brands/sharp.png" },
    { name: "Rowenta", logo: "/brands/rowenta.png" },
    { name: "Saeco", logo: "/brands/saeco.png" },
    { name: "Nodor", logo: "/brands/nodor.jpg" },
    { name: "Samsung", logo: "/brands/samsung.webp" },
    { name: "Polti", logo: "/brands/polti.png" },
    { name: "Philips", logo: "/brands/philips.png" },
    { name: "Orima", logo: "/brands/orima.png" },
    { name: "Panasonic", logo: "/brands/panasonic.png" },
    { name: "Sanyo", logo: "/brands/sanyo.png" },
  ]

  const stats = [
    { value: "30+", label: "Anos de Experiência" },
    { value: "500m²", label: "Área de Exposição" },
    { value: "20+", label: "Técnicos Especializados" },
    { value: "24h", label: "Resposta Rápida" },
  ]

  const services = [
    {
      icon: Truck,
      title: "Entregas ao Domicílio",
      description: "Entrega gratuita ao domicílio em compras de eletrodomésticos.",
    },
    {
      icon: Wrench,
      title: "Montagem e Instalação",
      description: "Montagem e instalação gratuita na compra de Grandes Domésticos na nossa loja.",
    },
    {
      icon: CheckCircle,
      title: "Assistência Técnica",
      description: "Disponibilizamos assistência técnica aos eletrodomésticos e todo o apoio ao cliente.",
    },
    {
      icon: CreditCard,
      title: "Meios de Pagamento",
      description: "Aceitamos pagamento com todo o tipo de cartões de Débito e Crédito.",
    },
    {
      icon: Clock,
      title: "Facilidades de Pagamento",
      description: "Para os nossos clientes, oferecemos facilidades de pagamento a preços competitivos.",
    },
    {
      icon: Headphones,
      title: "Atendimento Personalizado",
      description: "Aqui poderá usufruir de atendimento personalizado por um colaborador.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
                Especialistas em Eletrodomésticos desde 1998
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8">
                Venda, reparação e instalação de eletrodomésticos com a qualidade e confiança que você merece. Venha
                visitar-nos e equipe a sua casa com os melhores eletrodomésticos aos melhores preços.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="/servicos">
                    Ver Serviços
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+351252100600" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Contactar Agora
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/modern-kitchen-appliances-refrigerator-oven.jpg"
                alt="Eletrodomésticos modernos"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a Assistécnica</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              A AssisTécnica nasceu em 1998, com o principal objetivo de prestar serviços de assistência técnica a
              eletrodomésticos. Desde a comercialização de eletrodomésticos, José Alberto Martins, decidiu que era o
              momento certo para se estabelecer por conta própria.
            </p>
          </div>

          <Card className="bg-muted/50 border-none">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Numa primeira fase a empresa dedicava-se ao levantamento de pequenas avarias, no entanto, os clientes
                  exigiam mais, a empresa respondia afirmativamente. Foi assim, que começou a comercializar todo o tipo
                  de eletrodomésticos. A principal localização foi na Póvoa de Varzim, nomeadamente em Aver-o-Mar, que
                  cedo se tornou pequena, para expedição de material bem como para a oficina de reparações.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Atualmente a empresa possui 500m² de exposição. Servimos os nossos clientes há bastante tempo e com
                  uma marca sólida. A AssisTécnica, conta já com dezenas de colaboradores, incluindo técnicos
                  especializados, instaladores de equipamentos e elementos no atendimento a clientes.
                </p>
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <blockquote className="text-lg italic text-foreground">
                    "Ao cliente, um muito obrigado pela preferência e fidelidade, estaremos aqui sempre que é necessário
                    para ajudar..."
                  </blockquote>
                  <p className="text-right text-muted-foreground mt-4">— José Alberto Martins</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Os Nossos Serviços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços para atender todas as suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Marcas Parceiras</h2>
            <p className="text-lg text-muted-foreground">Trabalhamos com as melhores marcas do mercado</p>
          </div>

          <BrandsCarousel brands={brands} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Precisa de Assistência ou Quer Comprar um Eletrodoméstico?
          </h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Entre em contacto connosco para mais informações ou visite a nossa loja especializada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/contactos">
                Ver Contactos
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href="tel:+351252100600" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +351 252 10 06 00
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
