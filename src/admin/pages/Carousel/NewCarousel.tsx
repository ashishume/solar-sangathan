import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { carouselService } from "@/admin/services/carouselService";

const NewCarousel = () => {
  const [urls, setUrls] = useState<string[]>([]);
  const [newUrl, setNewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddUrl = () => {
    if (newUrl.trim()) {
      setUrls([...urls, newUrl.trim()]);
      setNewUrl("");
    }
  };

  const handleRemoveUrl = (index: number) => {
    setUrls(urls.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Update all images at once using updateImages
      await carouselService.updateImages(urls);
      navigate("/admin/carousel");
    } catch (error) {
      console.error("Error adding carousel images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Add New Carousel Images</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              label="Add Image URL"
              type="url"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="Enter image URL"
            />
            <div className="mt-2">
              <Button type="button" onClick={handleAddUrl} variant="primary">
                Add URL
              </Button>
            </div>
          </div>

          {urls.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Added Images</h2>
              <div className="space-y-2">
                {urls.map((url, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-2 bg-gray-50 rounded"
                  >
                    <img
                      src={url}
                      alt={`Preview ${index + 1}`}
                      className="h-16 w-24 object-cover rounded"
                    />
                    <div className="flex-1 truncate">{url}</div>
                    <Button
                      type="button"
                      onClick={() => handleRemoveUrl(index)}
                      variant="outline"
                      className="text-red-600 hover:text-red-900"
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/admin/carousel")}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={loading || urls.length === 0}
            >
              {loading ? "Saving..." : "Save Images"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCarousel;
