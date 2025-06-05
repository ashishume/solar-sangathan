import type { Testimonial } from "@/admin/types/testimonial";
import {
  getTestimonials,
  updateTestimonial,
  createTestimonial,
} from "@/api/api-calls";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const TestimonialForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState<Testimonial>({
    quote: "",
    author: "",
    role: "",
    location: "",
    image: "",
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    if (isEditMode && id) {
      const fetchTestimonial = async () => {
        try {
          const testimonials = await getTestimonials();
          const testimonial = testimonials.find(
            (t: Testimonial) => t._id === id
          );
          if (testimonial) {
            setFormData(testimonial);
          }
        } catch (error) {
          console.error("Error fetching testimonial:", error);
        }
      };
      fetchTestimonial();
    }
  }, [id, isEditMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditMode && id) {
        await updateTestimonial(id, formData);
        toast.success("Testimonial updated successfully!");
      } else {
        await createTestimonial(formData);
        toast.success("Testimonial created successfully!");
      }
      navigate("/admin/testimonials");
    } catch (error) {
      console.error("Error saving testimonial:", error);
      toast.error("Failed to save testimonial. Please try again.");
    }
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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        {isEditMode ? "Edit Testimonial" : "Add New Testimonial"}
      </h1>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <Input
          label="Author Name"
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />

        <Input
          label="Role"
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        />

        <Input
          label="Location"
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <Textarea
          label="Quote"
          id="quote"
          name="quote"
          value={formData.quote}
          onChange={handleChange}
          rows={4}
          required
        />

        <Input
          label="Image URL"
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/admin/testimonials")}
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

export default TestimonialForm;
