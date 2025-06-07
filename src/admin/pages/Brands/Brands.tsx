import { useEffect, useState } from "react";
import { format } from "date-fns";
import axiosInstance from "@/admin/services/axios";
import CRUDTable from "@/admin/components/CRUDTable";

interface Brand {
  _id: string;
  name: string;
  logo: string;
  createdAt: string;
  updatedAt: string;
}

const Brands = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBrands = async () => {
    try {
      const response = await axiosInstance.get("/brands");
      setBrands(response.data);
    } catch (error) {
      console.error("Error fetching brands:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this brand?")) {
      try {
        await axiosInstance.delete(`/brands/${id}`);
        fetchBrands();
      } catch (error) {
        console.error("Error deleting brand:", error);
      }
    }
  };

  const columns = [
    {
      header: "Logo",
      accessor: (item: Brand) => (
        <img
          src={item.logo}
          alt={item.name}
          className="w-12 h-12 object-contain"
        />
      ),
    },
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Created At",
      accessor: (item: Brand) =>
        format(new Date(item.createdAt), "dd/MM/yyyy HH:mm"),
    },
    {
      header: "Updated At",
      accessor: (item: Brand) =>
        format(new Date(item.updatedAt), "dd/MM/yyyy HH:mm"),
    },
  ];

  return (
    <CRUDTable
      title="Brands"
      columns={columns}
      data={brands}
      onDelete={handleDelete}
      createLink="/admin/brands/new"
      loading={loading}
    />
  );
};

export default Brands;
