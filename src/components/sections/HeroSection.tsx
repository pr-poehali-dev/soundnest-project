import { Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-purple-300/10 -z-10" />
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Откройте для себя мир <span className="text-[#9b87f5]">музыки</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-md">
              SoundNest — это платформа, где каждый найдет музыку по своему вкусу. Слушайте, создавайте и делитесь.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-[#9b87f5] hover:bg-[#8b5cf6] text-white px-6">
                Начать бесплатно
              </Button>
              <Button variant="outline">
                Узнать о тарифах
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-[#9b87f5]/20 animate-pulse" />
              <img 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Music" 
                className="rounded-3xl shadow-xl relative z-10 transform -rotate-3"
              />
              <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-[#9b87f5] flex items-center justify-center shadow-lg z-20">
                <Music className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
