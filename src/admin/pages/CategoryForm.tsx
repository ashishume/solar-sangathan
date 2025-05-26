import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCategories } from "../store/categories";
import type { Category } from "../types/category";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const CategoryForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { categories, createCategory, updateCategory } = useCategories();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    name: "",
  });

  useEffect(() => {
    if (isEditMode) {
      const existingCategory = categories.find(
        (category) => category._id === id
      );
      if (existingCategory) {
        setFormData({
          name: existingCategory.name,
        });
      }
    }
  }, [id, isEditMode, categories]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const categoryData = {
      ...formData,
    };

    if (isEditMode) {
      updateCategory(id as string, categoryData as unknown as Category);
    } else {
      createCategory(categoryData as unknown as Category);
    }

    navigate("/admin/categories");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {isEditMode ? "Edit Category" : "Create New Category"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/admin/categories")}
          >
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            {isEditMode ? "Update" : "Create"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
