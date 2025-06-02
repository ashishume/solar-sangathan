import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { carouselService } from "../../services/carouselService";
import type { CarouselImage } from "@/admin/types/carousel";

const Carousel = () => {
  const [carouselImages, setCarouselImages] = useState<CarouselImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarouselImages = async () => {
      try {
        const images = await carouselService.getAllImages();

        setCarouselImages(images as unknown as CarouselImage[]);
      } catch (error) {
        console.error("Error fetching carousel images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarouselImages();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await carouselService.deleteImage(id);
      setCarouselImages(
        carouselImages.filter((image) => image._id.toString() !== id)
      );
    } catch (error) {
      console.error("Error deleting carousel image:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Carousel Images</h1>
        <Link
          to="/admin/carousel/new"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Image
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Preview
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image URL
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {carouselImages.map((image) => (
              <tr key={image._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-20 w-32">
                    <img
                      className="h-full w-full object-cover rounded"
                      src={image.url}
                      alt={`Carousel image ${image._id}`}
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 truncate max-w-md">
                    {image.url.length > 50
                      ? `${image.url.substring(0, 20)}...`
                      : image.url}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleDelete(image._id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Carousel;
