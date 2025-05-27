import type { Testimonial } from "@/admin/types/testimonial";
import { getTestimonials } from "@/api/api-calls";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
  });

  useEffect(() => {
    if (isEditMode) {
      const fetchTestimonial = async () => {
        try {
          const testimonials = await getTestimonials();
          const testimonial = testimonials[Number(id)];
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
      // TODO: Implement API call to save testimonial
      console.log("Saving testimonial:", formData);
      navigate("/admin/testimonials");
    } catch (error) {
      console.error("Error saving testimonial:", error);
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
