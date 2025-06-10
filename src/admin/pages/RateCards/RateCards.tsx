import { useState, useEffect } from "react";
import CRUDTable from "../../components/CRUDTable";
import { toast } from "react-hot-toast";
import axiosInstance from "@/admin/services/axios";
import { StarIcon } from "@heroicons/react/24/solid";

const RateCards = () => {
  const [rateCards, setRateCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRateCards = async () => {
    try {
      const response = await axiosInstance.get("/rate-cards");
      setRateCards(response.data);
    } catch (error) {
      toast.error("Failed to fetch rate cards");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRateCards();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this rate card?")) {
      try {
        await axiosInstance.delete(`/rate-cards/${id}`);
        toast.success("Rate card deleted successfully");
        fetchRateCards();
      } catch (error) {
        toast.error("Failed to delete rate card");
      }
    }
  };

  const columns = [
    { header: "Title", accessor: "title" },
    { header: "Description", accessor: "description" },
    { header: "Price", accessor: "price" },
    { header: "Features", accessor: (item: any) => item.features.join(", ") },
    {
      header: "Popular",
      accessor: (item: any) => (
        <div className="flex items-center justify-center">
          {item.isPopular ? (
            <StarIcon className="h-5 w-5 text-yellow-400" />
          ) : (
            <span className="text-gray-400">-</span>
          )}
        </div>
      ),
    },
    { header: "Created At", accessor: "createdAt" },
    { header: "Updated At", accessor: "updatedAt" },
  ];

  return (
    <CRUDTable
      title="Rate Cards"
      columns={columns}
      data={rateCards}
      onDelete={handleDelete}
      createLink="/admin/rate-cards/new"
      loading={loading}
    />
  );
};

export default RateCards;
