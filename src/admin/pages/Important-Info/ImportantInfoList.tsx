import { useEffect, useState } from "react";
import { importantInfoService } from "../../services/importantInfoService";
import type { ImportantInfo } from "../../services/importantInfoService";
import Button from "../../../components/ui/Button";

export const ImportantInfoList = () => {
  const [importantInfo, setImportantInfo] = useState<ImportantInfo | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImportantInfo = async () => {
    try {
      setLoading(true);
      const data = await importantInfoService.getAll();
      setImportantInfo(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch important information");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this information?")) {
      try {
        await importantInfoService.delete(id);
        await fetchImportantInfo();
      } catch (err) {
        setError("Failed to delete important information");
        console.error(err);
      }
    }
  };

  useEffect(() => {
    fetchImportantInfo();
  }, []);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  console.log(importantInfo);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Important Information</h1>
        <Button
          onClick={() =>
            (window.location.href = "/admin/important-information/new")
          }
        >
          Add New
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Content
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created At
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {importantInfo && (
              <tr key={importantInfo?._id}>
                <td className="px-6 py-4 whitespace-pre-wrap">
                  {importantInfo?.content}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(
                    importantInfo?.createdAt || ""
                  ).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Button
                    onClick={() => handleDelete(importantInfo?._id || "")}
                    className="bg-red-500 hover:bg-red-600"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
