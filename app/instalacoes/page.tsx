import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function InstalacoesPage() {
  const images = [
    { id: 1, title: "Loja Principal", src: "/modern-appliance-store-showroom.jpg" },
    { id: 2, title: "Área de Exposição", src: "/appliance-showroom-interior.jpg" },
    { id: 3, title: "Secção de Frigoríficos", src: "/refrigerator-display-section.jpg" },
    { id: 4, title: "Secção de Fogões", src: "/kitchen-stove-display.jpg" },
    { id: 5, title: "Pequenos Eletrodomésticos", src: "/small-appliances-display.jpg" },
    { id: 6, title: "Atendimento ao Cliente", src: "/placeholder.svg?height=600&width=800" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">As Nossas Instalações</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Conheça a nossa loja com 500m² de exposição, onde encontrará uma vasta seleção de eletrodomésticos das
              melhores marcas.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <Card key={image.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Visit Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Card className="bg-primary text-primary-foreground p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Visite a Nossa Loja</h2>
            <p className="text-lg mb-6 opacity-90">
              Venha conhecer pessoalmente as nossas instalações e descobrir toda a nossa oferta de eletrodomésticos.
            </p>
            <div className="text-sm opacity-80">
              <p>Rua Gomes de Amorim, 2052, Aver-o-Mar</p>
              <p>4490-091 - Póvoa do Varzim</p>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
