import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Heart, Users, BookOpen, Cross, Home, Shield, Phone, Mail, Globe, MapPin, Star, Wifi, Car, ChefHat, Bath } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
              <Cross className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                The Five-Fold Haven
              </span>
              <div className="text-xs text-muted-foreground font-medium">Faith-Based Hospitality</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#mission" className="text-muted-foreground hover:text-foreground transition-colors">
              Our Mission
            </Link>
            <Link href="#properties" className="text-muted-foreground hover:text-foreground transition-colors">
              Properties
            </Link>
            <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
            Book Your Stay
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-amber-100/30"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur text-amber-800 rounded-full text-sm font-medium mb-8 shadow-sm">
            <Cross className="w-4 h-4 mr-2" />
            Faith-Based Short-Term Rentals in Tacoma, WA
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-amber-800 to-orange-800 bg-clip-text text-transparent">
              Your Peaceful
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Haven Awaits
            </span>
          </h1>
          <p className="text-xl text-slate-700 mb-10 max-w-4xl mx-auto leading-relaxed">
            Affordable, fully furnished rental housing designed for missionaries, pastors, ministry workers, Christian
            professionals, and anyone seeking a peaceful, faith-centered retreat in the Pacific Northwest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Find Your Haven
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-amber-200 hover:border-amber-300 hover:bg-amber-50 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (888) 250-5440
            </Button>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
              <Home className="w-4 h-4 mr-2" />
              Our Properties in Tacoma
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-amber-800 bg-clip-text text-transparent">
              Peaceful Retreats in the Pacific Northwest
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover our thoughtfully designed properties throughout Tacoma, each offering comfort, spiritual renewal,
              and the warmth of Christian hospitality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Cards - Shortened for brevity */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="North End Haven"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-amber-600">Available</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">North End Haven</CardTitle>
                <CardDescription>North Tacoma Area</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Peaceful 2-bedroom home with dedicated prayer space and Christian library.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-amber-600">$89</span>
                    <span className="text-muted-foreground">/night</span>
                  </div>
                  <Button className="bg-amber-600 hover:bg-amber-700">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">The Five-Fold Haven</h3>
            <p className="text-slate-400 mb-4">Faith-Based Hospitality in Tacoma, WA</p>
            <p className="text-slate-400">
              Email: hello@fivefoldhaven.com | Phone: (888) 250-5440
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
