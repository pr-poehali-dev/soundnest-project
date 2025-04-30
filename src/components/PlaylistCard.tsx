
import { Play } from 'lucide-react';

interface PlaylistCardProps {
  title: string;
  artist: string;
  coverUrl: string;
  tracksCount: number;
}

const PlaylistCard = ({ title, artist, coverUrl, tracksCount }: PlaylistCardProps) => {
  return (
    <div className="group relative rounded-md overflow-hidden bg-card hover:bg-accent transition-colors">
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={coverUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="w-12 h-12 rounded-full bg-[#9b87f5] flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <Play className="h-6 w-6 text-white ml-1" />
          </button>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm line-clamp-1">{title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {artist} • {tracksCount} треков
        </p>
      </div>
    </div>
  );
};

export default PlaylistCard;
