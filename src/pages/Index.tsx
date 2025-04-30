import Header from "@/components/Header";
import MusicPlayer from "@/components/MusicPlayer";
import HeroSection from "@/components/sections/HeroSection";
import PlaylistSection from "@/components/sections/PlaylistSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import { featuredPlaylists, trendingTracks } from "@/data/playlists";
import { serviceFeatures } from "@/data/features";

const Index = () => {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Playlists */}
      <PlaylistSection 
        title="Популярные плейлисты" 
        playlists={featuredPlaylists} 
        viewAllLink="/playlists"
        bgClass="bg-accent/50"
      />
      
      {/* Trending Tracks */}
      <PlaylistSection 
        title="Популярные треки" 
        playlists={trendingTracks}
        viewAllLink="/tracks"
      />
      
      {/* Features Section */}
      <FeaturesSection 
        features={serviceFeatures}
        title="Почему SoundNest?"
      />
      
      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;
