import { useState, useEffect } from "react";
import axiosInstance from "@/admin/services/axios";
import { toast } from "react-hot-toast";
import CRUDTable from "@/admin/components/CRUDTable";

interface JoinSubmission {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  occupation: string;
  interests: string;
  createdAt: string;
  selectedRateCard?: {
    title: string;
    price: string;
  };
}

const JoinSubmissions = () => {
  const [submissions, setSubmissions] = useState<JoinSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/join");
      setSubmissions(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch join submissions");
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
      await axiosInstance.delete(`/join/${id}`);
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
      accessor: (item: JoinSubmission) => `${item.firstName} ${item.lastName}`,
    },
    {
      header: "Contact",
      accessor: (item: JoinSubmission) => (
        <div>
          <div className="text-sm text-gray-900">{item.email}</div>
          <div className="text-sm text-gray-500">{item.phone}</div>
        </div>
      ),
    },
    {
      header: "Address",
      accessor: "address",
    },
    {
      header: "Occupation",
      accessor: "occupation",
    },
    {
      header: "Interests",
      accessor: "interests",
    },
    {
      header: "Selected Plan",
      accessor: (item: JoinSubmission) => (
        <div>
          <div className="font-medium">{item.selectedRateCard?.title}</div>
          <div className="text-sm text-gray-500">
            {item.selectedRateCard?.price}
          </div>
        </div>
      ),
    },
    {
      header: "Date",
      accessor: (item: JoinSubmission) =>
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
        title="Join Form Submissions"
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

export default JoinSubmissions;
