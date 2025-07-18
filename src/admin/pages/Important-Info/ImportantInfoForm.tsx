import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { importantInfoService } from "../../services/importantInfoService";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";
import { toast } from "react-hot-toast";

interface FormData {
  content: string;
  noticeType: string;
  documentLink: string;
}

export const ImportantInfoForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    content: "",
    noticeType: "header",
    documentLink: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id && id !== "new") {
      fetchImportantInfo();
    }
  }, [id]);

  const fetchImportantInfo = async () => {
    try {
      setLoading(true);
      const data = await importantInfoService.getById(id!);
      setFormData({
        content: data?.content || "",
        noticeType: data?.noticeType || "",
        documentLink: data?.documentLink || "",
      });
      setError(null);
    } catch (err) {
      setError("Failed to fetch important information");
      console.error(err);
    } finally {
      setLoading(false);
    }
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (id && id !== "new") {
        await importantInfoService.update(id, formData);
        toast.success("Important information updated successfully!");
      } else {
        await importantInfoService.create(formData);
        toast.success("Important information created successfully!");
      }
      navigate("/admin/important-information");
    } catch (err) {
      setError("Failed to save important information");
      console.error(err);
      toast.error("Failed to save important information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading && id && id !== "new") {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          {id === "new"
            ? "Add New Important Information"
            : "Edit Important Information"}
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content
            </label>
            <Textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              className="w-full"
              rows={5}
            />

            <div className="mt-4">
              <label
                htmlFor="noticeType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Notice Type
              </label>
              <select
                id="noticeType"
                name="noticeType"
                value={formData.noticeType}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              >
                <option value="">Select a notice type</option>
                <option value="header">Header</option>
                <option value="footer">Footer</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mt-4">
              <label
                htmlFor="documentLink"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Document Link
              </label>
              <input
                type="url"
                id="documentLink"
                name="documentLink"
                value={formData.documentLink}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                placeholder="https://example.com/document"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              onClick={() => navigate("/admin/important-information")}
              className="bg-gray-500 hover:bg-gray-600"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
