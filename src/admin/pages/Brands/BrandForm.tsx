import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import axiosInstance from "@/admin/services/axios";

interface BrandFormData {
  name: string;
  logo: string;
}

const BrandForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<BrandFormData>({
    name: "",
    logo: "",
  });
  const [errors, setErrors] = useState<Partial<BrandFormData>>({});

  const validateForm = () => {
    const newErrors: Partial<BrandFormData> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.logo.trim()) {
      newErrors.logo = "Logo URL is required";
    } else if (!isValidUrl(formData.logo)) {
      newErrors.logo = "Must be a valid URL";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      if (id) {
        await axiosInstance.put(`/brands/${id}`, formData);
      } else {
        await axiosInstance.post("/brands", formData);
      }
      navigate("/admin/brands");
    } catch (error) {
      console.error("Error saving brand:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof BrandFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  useEffect(() => {
    const fetchBrand = async () => {
      if (id) {
        setLoading(true);
        try {
          const response = await axiosInstance.get(`/brands/${id}`);
          setFormData(response.data);
        } catch (error) {
          console.error("Error fetching brand:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchBrand();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Button variant="secondary" onClick={() => navigate("/admin/brands")}>
          <ArrowLeftIcon className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-semibold">
          {id ? "Edit Brand" : "Add New Brand"}
        </h1>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              label="Brand Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
          </div>

          <div>
            <Input
              label="Logo URL"
              id="logo"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              error={errors.logo}
            />
          </div>

          {formData.logo && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Logo Preview:</p>
              <img
                src={formData.logo}
                alt="Logo preview"
                className="max-w-[200px] max-h-[100px] object-contain"
              />
            </div>
          )}

          <div className="flex gap-3">
            <Button type="submit" disabled={loading}>
              {id ? "Update" : "Create"}
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/admin/brands")}
              type="button"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BrandForm;
