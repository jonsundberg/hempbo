import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Leaf, Users, Home as HomeIcon, Sprout, Heart, ArrowRight, MapPin, Calendar } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hemp-blocks.png"
            alt="Hemp Blocks Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 mt-96">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            Ett kollektivt projekt <br />
            kring{" "}
            <span className="text-green-300">hampa</span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Vi vill skapa ett gemenskapsbaserat, självförsörjande samhälle där
            hampa är både byggmaterial och försörjningsresurs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="text-lg px-10 py-8 bg-green-900 hover:bg-green-800 border-0 shadow-lg text-white"
            >
              <Users className="w-5 h-5 mr-3" />
              Gå med i projektet
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-8 border-2 border-white text-white hover:bg-white hover:text-green-900"
            >
              Läs mer om visionen
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                5-20
              </div>
              <div className="text-gray-200">Hektar mark</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                60-70
              </div>
              <div className="text-gray-200">Kvm per hus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                100%
              </div>
              <div className="text-gray-200">Självförsörjande</div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-green-200" />

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Vår Vision
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Genom att gå ihop som grupp delar vi på kostnader, arbete och
              lärande för att skapa ett hållbart samhälle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-green-900" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Hållbarhet
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  Hampa som byggmaterial och försörjningsresurs för ett grönare
                  samhälle
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-blue-900" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Gemenskap
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  Kollektivt boende med delade resurser och gemensamma
                  värderingar
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <HomeIcon className="w-8 h-8 text-orange-900" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Självförsörjning
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  Egen matproduktion, energi och vatten för ekonomisk frihet
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Vad vi erbjuder
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              En komplett lösning för att bygga ett hållbart kollektiv
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sprout className="w-10 h-10 text-green-900" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">
                  Hampaodling
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Industrihampa för byggmaterial och försörjning
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HomeIcon className="w-10 h-10 text-blue-900" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">
                  Hampahus
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Energieffektiva hus byggda med hampablock
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-orange-900" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">
                  Gemenskap
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Delade resurser och gemensamma värderingar
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-purple-900" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">
                  Samarbete
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Kooperativt företagande och inkomstgenerering
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-900 to-emerald-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Redo att börja resan?
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Gå med i vårt projekt och hjälp oss att skapa ett hållbart samhälle
            baserat på hampa.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-12 py-8 bg-white text-green-900 hover:bg-gray-100"
            >
              Kontakta oss
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-12 py-8 border-2 border-white text-white hover:bg-white hover:text-green-900"
            >
              Läs mer om planen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
