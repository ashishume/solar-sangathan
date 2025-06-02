import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { videoService } from "../../../admin/services/videoService";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

interface Video {
  _id?: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
}

const VideoForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [videoUrl, setVideoUrl] = useState("");
  const [embedUrl, setEmbedUrl] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEditMode && id) {
      const fetchVideo = async () => {
        try {
          const video = await videoService.getById(id);
          setTitle(video.title);
          setVideoUrl(`https://www.youtube.com/watch?v=${video.videoUrl}`);
          setThumbnailUrl(video.thumbnailUrl);
          setEmbedUrl(`https://www.youtube.com/embed/${video.videoUrl}`);
        } catch (error) {
          console.error("Error fetching video:", error);
        }
      };
      fetchVideo();
    }
  }, [id, isEditMode]);

  const extractVideoId = (url: string): string | null => {
    // Handle youtu.be links
    if (url.includes("youtu.be/")) {
      return url.split("youtu.be/")[1]?.split("?")[0];
    }

    // Handle youtube.com links
    if (url.includes("youtube.com")) {
      // Handle watch?v= format
      if (url.includes("watch?v=")) {
        return url.split("watch?v=")[1]?.split("&")[0];
      }
      // Handle embed format
      if (url.includes("embed/")) {
        return url.split("embed/")[1]?.split("?")[0];
      }
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const videoId = extractVideoId(videoUrl);
      if (!videoId) {
        return;
      }

      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      setEmbedUrl(embedUrl);

      // Create video object
      const videoData = {
        title: title || "Untitled Video",
        videoUrl: videoId,
        thumbnailUrl,
      };

      // Save video using the service
      if (isEditMode && id) {
        await videoService.update(id, videoData);
      } else {
        await videoService.create(videoData);
      }

      // Reset form and navigate
      navigate("/admin/video");
    } catch (error) {
      console.error("Error saving video:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        {isEditMode ? "Edit YouTube Video" : "Add YouTube Video"}
      </h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <Input
            id="title"
            label="Video Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter video title"
          />
        </div>
        <div className="mb-4">
          <Input
            id="thumbnailUrl"
            label="Thumbnail URL"
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
            placeholder="Enter thumbnail URL"
          />
        </div>
        <div className="mb-4">
          <Input
            id="videoUrl"
            label="YouTube Video URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Enter YouTube video URL"
            required
          />
        </div>
        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/admin/video")}
          >
            Cancel
          </Button>
          <Button type="submit" variant="primary" disabled={isLoading}>
            {isLoading
              ? "Saving..."
              : isEditMode
              ? "Update Video"
              : "Save Video"}
          </Button>
        </div>
      </form>

      {embedUrl && (
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={embedUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-96 rounded-lg"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoForm;
