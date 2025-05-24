import CRUDTable from "../components/CRUDTable";
import { useCategories, type Category } from "../store/categories";

const Categories = () => {
  const { categories, deleteCategory } = useCategories();

  const handleDelete = (id: string | number) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      deleteCategory(Number(id));
    }
  };

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Slug", accessor: "slug" },
    { header: "Description", accessor: "description" },
    {
      header: "Parent Category",
      accessor: (item: Category) => {
        if (!item.parentId) return "-";
        const parent = categories.find((cat) => cat.id === item.parentId);
        return parent ? parent.name : "-";
      },
    },
  ];

  return (
    <CRUDTable
      title="Categories"
      columns={columns}
      data={categories}
      onDelete={handleDelete}
      createLink="/admin/categories/new"
    />
  );
};

export default Categories;
