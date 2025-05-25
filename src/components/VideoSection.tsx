import { useState } from "react";
import PlayIcon from "../assets/icons/play";
import { useHomeStore } from "../store/homeStore";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { videoData } = useHomeStore();

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl">
      {!isPlaying ? (
        <div className="relative w-full h-full">
          <img
            src={videoData.thumbnailUrl}
            alt={videoData.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer hover:bg-black/40 transition-all"
            onClick={handlePlay}
          >
            <div className="w-20 h-20 flex items-center justify-center">
              <PlayIcon className="transform hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoData.videoUrl}?autoplay=1`}
          title={videoData.title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoSection;
