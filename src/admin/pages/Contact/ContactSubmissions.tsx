import { useState, useEffect } from "react";
import axiosInstance from "@/admin/services/axios";
import { toast } from "react-hot-toast";
import CRUDTable from "@/admin/components/CRUDTable";

interface ContactSubmission {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  createdAt: string;
}

const ContactSubmissions = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/contact");
      setSubmissions(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch contact submissions");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this submission?")) {
      return;
    }

    try {
      await axiosInstance.delete(`/contact/${id}`);
      toast.success("Submission deleted successfully");
      fetchSubmissions();
    } catch (err) {
      toast.error("Failed to delete submission");
      console.error(err);
    }
  };

  const columns = [
    {
      header: "Name",
      accessor: (item: ContactSubmission) =>
        `${item.firstName} ${item.lastName}`,
    },
    {
      header: "Email",
      accessor: "email",
    },
    {
      header: "Message",
      accessor: "message",
    },
    {
      header: "Date",
      accessor: (item: ContactSubmission) =>
        new Date(item.createdAt).toLocaleDateString(),
    },
  ];

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <CRUDTable
        title="Contact Form Submissions"
        columns={columns}
        data={submissions}
        onDelete={handleDelete}
        createLink={undefined}
        loading={loading}
        isEditable={false}
      />
    </div>
  );
};

export default ContactSubmissions;
