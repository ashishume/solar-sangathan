import { useState, useEffect } from "react";
import Input from "@/components/ui/Input";

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
}

interface MemberFormProps {
  member: Member | null;
  onSubmit: (data: Partial<Member>) => void;
  onClose: () => void;
}

const MemberForm = ({ member, onSubmit, onClose }: MemberFormProps) => {
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
  });

  useEffect(() => {
    if (member) {
      setFormData({
        name: member.name,
        role: member.role,
        image: member.image,
        social: {
          linkedin: member.social.linkedin || "",
          twitter: member.social.twitter || "",
          facebook: member.social.facebook || "",
          youtube: member.social.youtube || "",
          whatsapp: member.social.whatsapp || "",
          instagram: member.social.instagram || "",
          telegram: member.social.telegram || "",
        },
      });
    }
  }, [member]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
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

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {member ? "Edit Member" : "Add New Member"}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            {/* <XMarkIcon className="h-6 w-6" /> */}X
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
                  value={formData.social?.linkedin}
                  onChange={handleChange}
                />

                <Input
                  label="Twitter"
                  name="social.twitter"
                  id="social.twitter"
                  type="url"
                  value={formData.social?.twitter}
                  onChange={handleChange}
                />

                <Input
                  label="Facebook"
                  name="social.facebook"
                  id="social.facebook"
                  type="url"
                  value={formData.social?.facebook}
                  onChange={handleChange}
                />

                <Input
                  label="YouTube"
                  name="social.youtube"
                  id="social.youtube"
                  type="url"
                  value={formData.social?.youtube}
                  onChange={handleChange}
                />

                <Input
                  label="WhatsApp"
                  name="social.whatsapp"
                  id="social.whatsapp"
                  type="url"
                  value={formData.social?.whatsapp}
                  onChange={handleChange}
                />

                <Input
                  label="Instagram"
                  name="social.instagram"
                  id="social.instagram"
                  type="url"
                  value={formData.social?.instagram}
                  onChange={handleChange}
                />

                <Input
                  label="Telegram"
                  name="social.telegram"
                  id="social.telegram"
                  type="url"
                  value={formData.social?.telegram}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {member ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MemberForm;
