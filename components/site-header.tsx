"use client"

import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Site Title */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            {/* Logo */}
            <span className="font-bold">MySite</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            Sobre Nosotros
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Servicios
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link>
          {/* Theme Toggle Button */}
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/contactos">
              <Phone className="mr-2 h-4 w-4" />
              Contactar
            </Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme Toggle Button for Mobile */}
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <li className="py-2">
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                Sobre Nosotros
              </Link>
            </li>
            <li className="py-2">
              <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
                Servicios
              </Link>
            </li>
            <li className="py-2">
              <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
                Blog
              </Link>
            </li>
            <li className="py-2">
              <Button asChild size="sm">
                <Link href="/contactos">
                  <Phone className="mr-2 h-4 w-4" />
                  Contactar
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default SiteHeader
