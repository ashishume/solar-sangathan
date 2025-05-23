import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCategories } from "../store/categories";
import type { Category } from "../store/categories";

const CategoryForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { categories, addCategory, updateCategory } = useCategories();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    parentId: "",
  });

  useEffect(() => {
    if (isEditMode) {
      const existingCategory = categories.find(
        (category) => category.id === Number(id)
      );
      if (existingCategory) {
        setFormData({
          name: existingCategory.name,
          slug: existingCategory.slug,
          description: existingCategory.description,
          parentId: existingCategory.parentId?.toString() || "",
        });
      }
    }
  }, [id, isEditMode, categories]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const categoryData = {
      ...formData,
      parentId: formData.parentId ? Number(formData.parentId) : undefined,
    };

    if (isEditMode) {
      updateCategory(Number(id), categoryData);
    } else {
      addCategory(categoryData);
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

  // Filter out the current category and its children from parent options
  const getParentOptions = () => {
    if (!isEditMode) return categories;

    const currentId = Number(id);
    const isChild = (category: Category): boolean => {
      if (category.id === currentId) return true;
      if (category.parentId === currentId) return true;
      const parent = categories.find((cat) => cat.id === category.parentId);
      return parent ? isChild(parent) : false;
    };

    return categories.filter((category) => !isChild(category));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {isEditMode ? "Edit Category" : "Create New Category"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="slug"
            className="block text-sm font-medium text-gray-700"
          >
            Slug
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="parentId"
            className="block text-sm font-medium text-gray-700"
          >
            Parent Category
          </label>
          <select
            id="parentId"
            name="parentId"
            value={formData.parentId}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">None</option>
            {getParentOptions().map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate("/admin/categories")}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            {isEditMode ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
