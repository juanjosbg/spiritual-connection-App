import { Card } from "../components/ui/card";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "La paz viene de dentro. No la busques fuera.",
    author: "Buddha"
  },
  {
    text: "El presente es el único momento en el que verdaderamente vivimos.",
    author: "Thich Nhat Hanh"
  },
  {
    text: "Tu tarea no es buscar el amor, sino buscar y encontrar todas las barreras dentro de ti que has construido contra él.",
    author: "Rumi"
  },
  {
    text: "La meditación no es escapar de la vida, es prepararse para ella.",
    author: "Proverbio Zen"
  },
  {
    text: "Respira. Deja ir. Y recuerda que este mismo momento es el único que tienes con seguridad.",
    author: "Oprah Winfrey"
  }
];

export const DailyQuote = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const quoteIndex = dayOfYear % quotes.length;
  const dailyQuote = quotes[quoteIndex];

  return (
    <Card className="p-8 bg-gradient-warmth/30 border-warmth/40 shadow-soft animate-scale-in">
      <div className="flex flex-col items-center text-center space-y-4">
        <Quote className="w-10 h-10 text-warmth animate-float" />
        <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed max-w-3xl">
          "{dailyQuote.text}"
        </blockquote>
        <cite className="text-lg text-muted-foreground not-italic">
          — {dailyQuote.author}
        </cite>
      </div>
    </Card>
  );
};
