import { useEffect } from "react";
import CRUDTable from "../../components/CRUDTable";
import { useCarousel } from "@/admin/store/carousel";

const Carousel = () => {
  const { carouselImages, fetchCarouselImages, deleteCarouselImage } =
    useCarousel();

  useEffect(() => {
    fetchCarouselImages();
  }, [fetchCarouselImages]);

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      deleteCarouselImage(id);
    }
  };

  const columns = [
    {
      header: "Preview",
      accessor: (item: any) => (
        <div className="h-20 w-32">
          <img
            className="h-full w-full object-cover rounded"
            src={item.url}
            alt={`Carousel image ${item._id}`}
          />
        </div>
      ),
    },
    {
      header: "Image URL",
      accessor: (item: any) => (
        <div className="text-sm text-gray-900 truncate max-w-md">
          {item.url.length > 50 ? `${item.url.substring(0, 20)}...` : item.url}
        </div>
      ),
    },
  ];

  return (
    <CRUDTable
      title="Carousel Images"
      columns={columns}
      data={carouselImages}
      onDelete={handleDelete}
      isEditable={false}
      createLink="/admin/carousel/new"
    />
  );
};

export default Carousel;
