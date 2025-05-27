import { getChannels } from "@/api/api-calls";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Channel {
  image: string;
  title: string;
  description: string;
  color: string;
  icon: string;
}

const ChannelForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState<Channel>({
    image: "",
    title: "",
    description: "",
    color: "",
    icon: "",
  });

  useEffect(() => {
    if (isEditMode) {
      const fetchChannel = async () => {
        try {
          const channels = await getChannels();
          const channel = channels[Number(id)];
          if (channel) {
            setFormData(channel);
          }
        } catch (error) {
          console.error("Error fetching channel:", error);
        }
      };
      fetchChannel();
    }
  }, [id, isEditMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement API call to save channel
      console.log("Saving channel:", formData);
      navigate("/admin/channels");
    } catch (error) {
      console.error("Error saving channel:", error);
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
        {isEditMode ? "Edit Channel" : "Add New Channel"}
      </h1>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <Input
          label="Title"
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <Textarea
          label="Description"
          id="description"
          name="description"
          value={formData.description}
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

        <Input
          label="Color Gradient"
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
          placeholder="from-blue-500 to-blue-600"
          required
        />

        <Input
          label="Icon (Emoji)"
          type="text"
          id="icon"
          name="icon"
          value={formData.icon}
          onChange={handleChange}
          required
        />

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/admin/channels")}
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

export default ChannelForm;
