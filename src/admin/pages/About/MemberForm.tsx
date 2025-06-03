import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import axiosInstance from "@/admin/services/axios";

interface Member {
  _id: string;
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    youtube?: string;
    whatsapp?: string;
    instagram?: string;
    telegram?: string;
  };
  isWorkingCommittee: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

const MemberForm = ({
  isWorkingCommittee,
}: {
  isWorkingCommittee: boolean;
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState<Partial<Member>>({
    name: "",
    role: "",
    image: "",
    social: {
      linkedin: "",
      twitter: "",
      facebook: "",
      youtube: "",
      whatsapp: "",
      instagram: "",
      telegram: "",
    },
    isWorkingCommittee: isWorkingCommittee,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isEditMode && id) {
      fetchMember();
    }
  }, [id, isEditMode]);

  const fetchMember = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/about/members/${id}`);
      const data = response.data;
      setFormData(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch member details");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const url = isEditMode ? `/about/members/${id}` : "/about/members";
      const method = isEditMode ? "patch" : "post";

      await axiosInstance[method](url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      navigate(-1);
    } catch (err) {
      setError("Failed to save member");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.startsWith("social.")) {
      const socialField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        social: {
          ...prev.social,
          [socialField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  if (loading && isEditMode) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">
          {isEditMode ? "Edit Member" : "Add New Member"}
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Input
              label="Name"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <Input
              label="Role"
              name="role"
              id="role"
              required
              value={formData.role}
              onChange={handleChange}
            />

            <div className="sm:col-span-2">
              <Input
                label="Image URL"
                name="image"
                id="image"
                required
                value={formData.image}
                onChange={handleChange}
              />
            </div>

            <div className="sm:col-span-2">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Social Media Links
              </h4>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  label="LinkedIn"
                  name="social.linkedin"
                  id="social.linkedin"
                  type="url"
                  value={formData.social?.linkedin || ""}
                  onChange={handleChange}
                />

                <Input
                  label="Twitter"
                  name="social.twitter"
                  id="social.twitter"
                  type="url"
                  value={formData.social?.twitter || ""}
                  onChange={handleChange}
                />

                <Input
                  label="Facebook"
                  name="social.facebook"
                  id="social.facebook"
                  type="url"
                  value={formData.social?.facebook || ""}
                  onChange={handleChange}
                />

                <Input
                  label="YouTube"
                  name="social.youtube"
                  id="social.youtube"
                  type="url"
                  value={formData.social?.youtube || ""}
                  onChange={handleChange}
                />

                <Input
                  label="WhatsApp"
                  name="social.whatsapp"
                  id="social.whatsapp"
                  type="url"
                  value={formData.social?.whatsapp || ""}
                  onChange={handleChange}
                />

                <Input
                  label="Instagram"
                  name="social.instagram"
                  id="social.instagram"
                  type="url"
                  value={formData.social?.instagram || ""}
                  onChange={handleChange}
                />

                <Input
                  label="Telegram"
                  name="social.telegram"
                  id="social.telegram"
                  type="url"
                  value={formData.social?.telegram || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate(-1)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? "Saving..." : isEditMode ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MemberForm;
