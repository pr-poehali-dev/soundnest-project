import { ArrowRight, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import PlaylistCard from "@/components/PlaylistCard";
import MusicPlayer from "@/components/MusicPlayer";

const featuredPlaylists = [
  {
    id: 1,
    title: "Летнее настроение",
    artist: "SoundNest",
    coverUrl: "https://images.unsplash.com/photo-1594623930572-300a3011d9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 12
  },
  {
    id: 2,
    title: "Электронный драйв",
    artist: "DJ Волна",
    coverUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 18
  },
  {
    id: 3,
    title: "Джаз для души",
    artist: "Саксофон",
    coverUrl: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 8
  },
  {
    id: 4,
    title: "Рок классика",
    artist: "Гитарист",
    coverUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 15
  },
  {
    id: 5,
    title: "Медитация",
    artist: "Спокойствие",
    coverUrl: "https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 10
  }
];

const trendingTracks = [
  {
    id: 1,
    title: "Ночное танго",
    artist: "Ария ночи",
    coverUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 1
  },
  {
    id: 2,
    title: "Океан чувств",
    artist: "Морской бриз",
    coverUrl: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 1
  },
  {
    id: 3,
    title: "Городские огни",
    artist: "Ночной город",
    coverUrl: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 1
  },
  {
    id: 4,
    title: "Тихий вечер",
    artist: "Закатное солнце",
    coverUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 1
  },
  {
    id: 5,
    title: "Рассвет",
    artist: "Утренняя роса",
    coverUrl: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tracksCount: 1
  }
];

const Index = () => {
  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      {/* Hero Section */}
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
      
      {/* Featured Playlists */}
      <section className="py-12 bg-accent/50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Популярные плейлисты</h2>
            <Button variant="ghost" className="gap-1">
              Все плейлисты <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {featuredPlaylists.map(playlist => (
              <PlaylistCard key={playlist.id} {...playlist} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Trending Tracks */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Популярные треки</h2>
            <Button variant="ghost" className="gap-1">
              Все треки <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {trendingTracks.map(track => (
              <PlaylistCard key={track.id} {...track} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 bg-accent/50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Почему SoundNest?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-[#9b87f5]/20 flex items-center justify-center mb-4">
                <Music className="h-6 w-6 text-[#9b87f5]" />
              </div>
              <h3 className="text-lg font-medium mb-2">Огромная библиотека</h3>
              <p className="text-muted-foreground">
                Миллионы треков от независимых артистов и известных исполнителей
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-[#9b87f5]/20 flex items-center justify-center mb-4">
                <Music className="h-6 w-6 text-[#9b87f5]" />
              </div>
              <h3 className="text-lg font-medium mb-2">Персональные рекомендации</h3>
              <p className="text-muted-foreground">
                Находите новую музыку на основе ваших предпочтений
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-[#9b87f5]/20 flex items-center justify-center mb-4">
                <Music className="h-6 w-6 text-[#9b87f5]" />
              </div>
              <h3 className="text-lg font-medium mb-2">Мощный плеер</h3>
              <p className="text-muted-foreground">
                Высокое качество звука и удобный интерфейс для прослушивания
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;
