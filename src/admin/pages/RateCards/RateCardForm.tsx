import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import axiosInstance from "@/admin/services/axios";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";

const RateCardForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    features: [""],
    isPopular: false,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      fetchRateCard();
    }
  }, [id]);

  const fetchRateCard = async () => {
    try {
      const response = await axiosInstance.get(`/rate-cards/${id}`);
      const { title, description, price, features, isPopular } = response.data;
      setFormData({ title, description, price, features, isPopular });
    } catch (error) {
      toast.error("Failed to fetch rate card");
      navigate("/admin/rate-cards");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData((prev) => ({ ...prev, features: newFeatures }));
  };

  const addFeature = () => {
    setFormData((prev) => ({
      ...prev,
      features: [...prev.features, ""],
    }));
  };

  const removeFeature = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEditMode) {
        await axiosInstance.patch(`/rate-cards/${id}`, formData);
        toast.success("Rate card updated successfully");
      } else {
        await axiosInstance.post("/rate-cards", formData);
        toast.success("Rate card created successfully");
      }
      navigate("/admin/rate-cards");
    } catch (error) {
      toast.error(
        isEditMode ? "Failed to update rate card" : "Failed to create rate card"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {isEditMode ? "Edit Rate Card" : "Create Rate Card"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          id="title"
          name="title"
          label="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <Textarea
          id="description"
          name="description"
          label="Description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={3}
        />

        <Input
          id="price"
          name="price"
          label="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Features <span className="text-red-600">*</span>
          </label>
          {formData.features.map((feature, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <Input
                value={feature}
                onChange={(e) => handleFeatureChange(index, e.target.value)}
                required
                className="flex-1"
              />
              <Button
                type="button"
                onClick={() => removeFeature(index)}
                variant="outline"
                className="px-3 py-2"
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            onClick={addFeature}
            variant="secondary"
            className="mt-2"
          >
            + Add Feature
          </Button>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="isPopular"
            name="isPopular"
            checked={formData.isPopular}
            onChange={handleChange}
            className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
          />
          <label
            htmlFor="isPopular"
            className="ml-2 block text-sm text-gray-700"
          >
            Mark as Popular
          </label>
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            onClick={() => navigate("/admin/rate-cards")}
            variant="secondary"
          >
            Cancel
          </Button>
          <Button type="submit" isLoading={loading}>
            {isEditMode ? "Update" : "Create"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RateCardForm;
