import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PlaylistCard from "@/components/PlaylistCard";
import { Playlist } from "@/data/playlists";

interface PlaylistSectionProps {
  title: string;
  playlists: Playlist[];
  viewAllLink?: string;
  bgClass?: string;
}

const PlaylistSection = ({ 
  title, 
  playlists, 
  viewAllLink = "#", 
  bgClass = "" 
}: PlaylistSectionProps) => {
  return (
    <section className={`py-12 ${bgClass}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">{title}</h2>
          <Button variant="ghost" className="gap-1" asChild>
            <a href={viewAllLink}>
              Все {title.toLowerCase()} <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {playlists.map(playlist => (
            <PlaylistCard key={playlist.id} {...playlist} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaylistSection;
