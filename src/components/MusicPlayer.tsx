
import { useState, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface MusicPlayerProps {
  className?: string;
}

const MusicPlayer = ({ className }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 180; // 3 minutes in seconds

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 h-20 bg-background border-t border-border flex items-center px-4 ${className}`}>
      <div className="flex items-center w-1/4">
        <img 
          src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
          alt="Album cover" 
          className="w-12 h-12 rounded mr-3"
        />
        <div>
          <p className="text-sm font-medium">Ночное танго</p>
          <p className="text-xs text-muted-foreground">Ария ночи</p>
        </div>
      </div>
      
      <div className="flex flex-col items-center w-2/4">
        <div className="flex items-center gap-4 mb-2">
          <button className="text-muted-foreground hover:text-foreground">
            <SkipBack size={20} />
          </button>
          <button 
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <SkipForward size={20} />
          </button>
        </div>
        
        <div className="w-full flex items-center gap-2">
          <span className="text-xs text-muted-foreground w-10 text-right">
            {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')}
          </span>
          <Slider 
            value={[currentTime]} 
            max={duration}
            step={1}
            onValueChange={(value) => setCurrentTime(value[0])}
            className="flex-1"
          />
          <span className="text-xs text-muted-foreground w-10">
            {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      
      <div className="flex items-center justify-end w-1/4">
        <Volume2 size={18} className="text-muted-foreground mr-2" />
        <Slider 
          value={[70]} 
          max={100}
          className="w-24"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
