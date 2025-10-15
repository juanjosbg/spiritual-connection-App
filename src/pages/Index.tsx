import { useState } from "react";
import { Sparkles, Wind, Heart, Flower2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { DailyQuote } from "@/components/DailyQuote";
import { MeditationSection } from "@/components/MeditationSection";
import { BreathingExercise } from "@/components/BreathingExercise";

const Index = () => {
  const [activeSection, setActiveSection] = useState<"home" | "meditate" | "breathe">("home");

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <h1 className="text-2xl font-semibold bg-gradient-spiritual bg-clip-text text-transparent">
                Spiritual Connection
              </h1>
            </div>
            <nav className="flex gap-2">
              <Button
                variant={activeSection === "home" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveSection("home")}
              >
                Inicio
              </Button>
              <Button
                variant={activeSection === "meditate" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveSection("meditate")}
              >
                Meditar
              </Button>
              <Button
                variant={activeSection === "breathe" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveSection("breathe")}
              >
                Respirar
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeSection === "home" && (
          <div className="space-y-12 animate-fade-in">
            {/* Hero Section */}
            <section className="text-center py-12 space-y-6">
              <div className="inline-block animate-float">
                <Flower2 className="w-20 h-20 text-primary mx-auto mb-4 breathe-animation" />
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
                Tu camino hacia el equilibrio
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Encuentra paz mental y equilibrio espiritual con meditaciones guiadas
                y ejercicios de respiración consciente
              </p>
            </section>

            {/* Daily Quote */}
            <DailyQuote />

            {/* Features Grid */}
            <section className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 card-hover cursor-pointer" onClick={() => setActiveSection("meditate")}>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Meditación Guiada</h3>
                  <p className="text-muted-foreground">
                    Sesiones de 5, 10 y 15 minutos para calmar tu mente y conectar con tu interior
                  </p>
                </div>
              </Card>

              <Card className="p-6 card-hover cursor-pointer" onClick={() => setActiveSection("breathe")}>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-calm/20 flex items-center justify-center">
                    <Wind className="w-6 h-6 text-calm" />
                  </div>
                  <h3 className="text-xl font-semibold">Respiración Consciente</h3>
                  <p className="text-muted-foreground">
                    Técnicas como 4-7-8, box breathing y pranayama para reducir la ansiedad
                  </p>
                </div>
              </Card>

              <Card className="p-6 card-hover">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Bienestar Integral</h3>
                  <p className="text-muted-foreground">
                    Herramientas para sanar mente, cuerpo y energía en un solo lugar
                  </p>
                </div>
              </Card>
            </section>

            {/* CTA Section */}
            <section className="text-center py-12 space-y-6">
              <h3 className="text-3xl font-semibold">Comienza tu práctica hoy</h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Dedica solo 5 minutos al día para transformar tu bienestar mental y espiritual
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button 
                  size="lg" 
                  className="bg-gradient-spiritual hover:opacity-90 transition-opacity"
                  onClick={() => setActiveSection("meditate")}
                >
                  Comenzar Meditación
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => setActiveSection("breathe")}
                >
                  Practicar Respiración
                </Button>
              </div>
            </section>
          </div>
        )}

        {activeSection === "meditate" && <MeditationSection />}
        {activeSection === "breathe" && <BreathingExercise />}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2025 Spiritual Connection. Encuentra tu paz interior.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
