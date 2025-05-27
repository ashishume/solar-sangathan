import { useEffect } from "react";
import CRUDTable from "../../components/CRUDTable";
import { useCategories } from "../../store/categories";
import type { Category } from "../../types/category";

const Categories = () => {
  const { categories, fetchCategories, loading } = useCategories();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleDelete = (id: string | number) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      fetch(`/api/categories/${id}`, { method: "DELETE" })
        .then(() => fetchCategories())
        .catch((error) => console.error("Failed to delete category:", error));
    }
  };

  const columns = [
    { header: "Name", accessor: "name" },
    {
      header: "Created At",
      accessor: (item: Category) =>
        new Date(item.createdAt).toLocaleDateString(),
    },
    {
      header: "Updated At",
      accessor: (item: Category) =>
        new Date(item.updatedAt).toLocaleDateString(),
    },
  ];

  return (
    <CRUDTable
      title="Categories"
      columns={columns}
      data={categories}
      onDelete={handleDelete}
      createLink="/admin/categories/new"
      loading={loading}
    />
  );
};

export default Categories;
