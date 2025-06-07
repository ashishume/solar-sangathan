import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useResourcesStore } from "../../../store/resourcesStore";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { toast } from "react-hot-toast";

const ResourceForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    loading,
    error,
    fetchResourceById,
    addResource,
    updateResource,
    resources,
  } = useResourcesStore();

  const [formData, setFormData] = useState({
    title: "",
    link: "",
    documentUrl: "",
  });

  useEffect(() => {
    if (id) {
      fetchResourceById(id);
    }
  }, [id, fetchResourceById]);

  useEffect(() => {
    if (id && resources.length > 0) {
      const resource = resources[0];
      setFormData({
        title: resource.title,
        link: resource.link,
        documentUrl: resource.documentUrl,
      });
    }
  }, [id, resources]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await updateResource(id, formData);
        toast.success("Resource updated successfully");
      } else {
        await addResource(formData);
        toast.success("Resource added successfully");
      }
      navigate("/admin/resources");
    } catch (error) {
      toast.error(id ? "Failed to update resource" : "Failed to add resource");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">
        {id ? "Edit Resource" : "Add New Resource"}
      </h1>

      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="text-sm font-medium">Title</div>
            <Input
              id="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="grid gap-2">
            <div className="text-sm font-medium">Link</div>
            <Input
              id="link"
              value={formData.link}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="grid gap-2">
            <div className="text-sm font-medium">Document URL</div>
            <Input
              id="documentUrl"
              value={formData.documentUrl}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex gap-4 mt-4">
            <Button type="submit">
              {id ? "Update Resource" : "Add Resource"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/admin/resources")}
              className="bg-gray-600 hover:bg-gray-700"
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResourceForm;
