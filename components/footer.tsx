import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const services = [
    "Entregas ao Domicílio",
    "Montagem e Instalação",
    "Assistência Técnica",
    "Meios de Pagamento",
    "Facilidades de Pagamento",
    "Atendimento",
    "Encomendas",
    "Aconselhamento Técnico",
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Localização */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Localização</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Assistécnica, Lda</p>
                  <p>Rua Gomes de Amorim, 2052</p>
                  <p>Aver-o-Mar</p>
                  <p>4490-091 - Póvoa do Varzim</p>
                </div>
              </div>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/servicos" className="hover:underline">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacte-nos</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <a href="tel:+351252100600" className="hover:underline">
                    +351 (252) 10 06 00
                  </a>
                  <p className="text-xs opacity-80">Rede fixa nacional</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <a href="tel:+351913465435" className="hover:underline">
                    +351 (91) 346 54 35
                  </a>
                  <p className="text-xs opacity-80">Rede móvel nacional</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <a href="tel:+351252619908" className="hover:underline">
                    +351 (252) 61 99 08
                  </a>
                  <p className="text-xs opacity-80">Fax</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:geral@assistecnica.pt" className="hover:underline">
                  geral@assistecnica.pt
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Assistécnica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
