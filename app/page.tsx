'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const clients = [
    { name: 'Boeing', logo: '/placeholder.svg' },
    { name: 'Coca-Cola', logo: '/placeholder.svg' },
    { name: 'Netflix', logo: '/placeholder.svg' },
    { name: 'Microsoft', logo: '/placeholder.svg' },
    { name: 'Walmart', logo: '/placeholder.svg' },
    { name: 'Amazon', logo: '/placeholder.svg' },
    { name: 'Apple', logo: '/placeholder.svg' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0b1a] text-white font-sans">
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg" alt="Rigel Wolfe Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-xl font-semibold">Rigel Wolfe</span>
          </Link>
          <div className="hidden lg:flex space-x-8">
            <Link href="/about-us" className="hover:text-blue-300 transition-colors">About Us</Link>
            <Link href="/services" className="hover:text-blue-300 transition-colors">Services</Link>
            <Link href="/careers" className="hover:text-blue-300 transition-colors">Careers</Link>
            <Link href="/locations" className="hover:text-blue-300 transition-colors">Locations</Link>
            <Link href="/blog" className="hover:text-blue-300 transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-blue-300 transition-colors">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/employee-portal" className="px-4 py-2 border border-white rounded hover:bg-white hover:text-[#0a0b1a] transition-colors text-sm">
              Employee portal
            </Link>
            <button onClick={toggleMenu} className="lg:hidden text-white">
              <span className="sr-only">Toggle menu</span>
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Hamburger Menu */}
      <div className={`fixed inset-y-0 right-0 z-30 w-64 bg-[#0a0b1a] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="text-white p-2">
              <span className="sr-only">Close menu</span>
              <X size={24} />
            </button>
          </div>
          <div className="space-y-4 mt-8">
            <Link href="/about-us" className="block hover:text-blue-300 transition-colors">About Us</Link>
            <Link href="/services" className="block hover:text-blue-300 transition-colors">Services</Link>
            <Link href="/careers" className="block hover:text-blue-300 transition-colors">Careers</Link>
            <Link href="/locations" className="block hover:text-blue-300 transition-colors">Locations</Link>
            <Link href="/blog" className="block hover:text-blue-300 transition-colors">Blog</Link>
            <Link href="/contact" className="block hover:text-blue-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      <main className="relative flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 text-center z-10 pt-20 pb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
            Expert guidance for<br />
            your <span className="text-[#4a9eff]">financial future</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
            Trusted accounting solutions tailored to your needs, guiding
            you through challenges to drive growth.
          </p>
          <Link href="/services" className="inline-block px-8 py-3 bg-white text-[#0a0b1a] rounded-md hover:bg-gray-200 transition-colors text-base sm:text-lg font-medium">
            Our services
          </Link>
        </div>

        {/* Client Logos Section */}
        <div className="w-full bg-[#0a0b1a]/80 backdrop-blur-sm py-8 mt-12">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-2xl font-semibold mb-8">Our Clients</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
              {clients.map((client) => (
                <div key={client.name} className="w-24 h-12 relative">
                  <Image
                    src="/images/netflix--v1.png"
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}