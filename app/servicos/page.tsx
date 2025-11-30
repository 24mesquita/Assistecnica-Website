import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Wrench, ShieldCheck, CreditCard, Clock, Headphones, Package, Video } from "lucide-react"

export default function ServicosPage() {
  const services = [
    {
      icon: Truck,
      title: "Entregas ao Domicílio",
      description: "Entrega gratuita ao domicílio em compras de eletrodomésticos.",
      details:
        "Oferecemos entregas rápidas e seguras em toda a região. Nossa equipe especializada garante que seus produtos cheguem em perfeitas condições.",
    },
    {
      icon: Wrench,
      title: "Montagem e Instalação",
      description: "Montagem e instalação gratuita na compra de Grandes Domésticos.",
      details:
        "Na nossa loja, todas as compras de grandes eletrodomésticos incluem montagem e instalação gratuita mediante orçamento.",
    },
    {
      icon: ShieldCheck,
      title: "Assistência Técnica",
      description: "Disponibilizamos assistência técnica aos eletrodomésticos.",
      details:
        "Nossa equipa de técnicos especializados está disponível para manter e reparar seus eletrodomésticos com rapidez e eficiência.",
    },
    {
      icon: CreditCard,
      title: "Meios de Pagamento",
      description: "Aceitamos todo o tipo de cartões de Débito e Crédito.",
      details:
        "Oferecemos múltiplas opções de pagamento para sua comodidade, incluindo cartões de débito e crédito de todas as bandeiras.",
    },
    {
      icon: Clock,
      title: "Facilidades de Pagamento",
      description: "Oferecemos facilidades de pagamento a preços competitivos.",
      details:
        "Para os nossos clientes, oferecemos facilidades de pagamento em compras de eletrodomésticos com condições vantajosas.",
    },
    {
      icon: Headphones,
      title: "Atendimento Personalizado",
      description: "Atendimento personalizado e qualificado.",
      details:
        "Aqui poderá usufruir de atendimento personalizado por um colaborador qualificado que o vai ajudar em tudo o que precisa.",
    },
    {
      icon: Package,
      title: "Encomendas",
      description: "Assistimos encomendas de artigos de todas as marcas.",
      details:
        "Fazemos encomendas mediante orçamento para qualquer tipo de eletrodoméstico das marcas que representamos.",
    },
    {
      icon: Video,
      title: "Aconselhamento Técnico",
      description: "Fornecemos vídeos de ajudas para lhe baixar.",
      details:
        "Disponibilizamos aconselhamento técnico especializado e materiais de apoio para que entre em contacto connosco.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Os Nossos Serviços</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Disponibilizamos nas nossas lojas todos estes serviços, para que as suas compras de eletrodomésticos
              tenham qualidade, um conjunto de facilidades aliadas ao nosso know-how para atender aos melhores serviços
              e qualidade que é fornecida, sobretudo quando está em causa eletrodomésticos de primeira necessidade, para
              além dos preços competitivos.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Info */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Card className="bg-muted/50 border-none">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Na empresa o mais importante é o cliente, dai que a aposta seja a estabilidade e a firmação no mercado
                  em detrimento de um crescimento descontrolado, pondo em causa a qualidade do serviço. "Ao cliente, um
                  muito obrigado pela preferência e fidelidade, estaremos aqui sempre que é necessário para ajudar..."
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
