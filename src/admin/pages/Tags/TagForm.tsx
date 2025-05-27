import { useTags } from "@/admin/store/tags";
import type { Tag } from "@/admin/types/tag";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TagForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { tags, addTag, editTag } = useTags();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    name: "",
  });

  useEffect(() => {
    if (isEditMode) {
      const existingTag = tags.find((tag) => tag._id === id);
      if (existingTag) {
        setFormData({
          name: existingTag.name,
        });
      }
    }
  }, [id, isEditMode, tags]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEditMode) {
      editTag(id as string, formData as unknown as Tag);
    } else {
      addTag(formData as unknown as Tag);
    }

    navigate("/admin/tags");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        {isEditMode ? "Edit Tag" : "Create New Tag"}
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
            onClick={() => navigate("/admin/tags")}
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

export default TagForm;
