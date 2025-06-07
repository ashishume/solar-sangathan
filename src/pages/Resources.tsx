import { useEffect } from "react";
import { useResourcesStore } from "@/store/resourcesStore";
import toast from "react-hot-toast";
import {
  ArrowTopRightOnSquareIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";

const Resources = () => {
  const { resources, loading, error, fetchResources } = useResourcesStore();

  useEffect(() => {
    fetchResources();
  }, [fetchResources]);

  const handleTitleHover = (title: string, element: HTMLDivElement) => {
    if (element.offsetWidth < element.scrollWidth) {
      toast(title, {
        duration: 2000,
        position: "top-center",
      });
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-12 px-4 mt-16 min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-12 px-4 mt-16 min-h-[60vh] flex items-center justify-center">
        <div className="text-red-600 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 mt-16 min-h-[60vh]">
      <h1 className="text-3xl font-bold text-gray-800 mb-12">Resources</h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Link
                </th>
                <th
                  scope="col"
                  className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Document
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {resources.map((resource, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div
                      className="text-sm font-medium text-gray-900 max-w-[300px] truncate"
                      onMouseEnter={(e) =>
                        handleTitleHover(resource.title, e.currentTarget)
                      }
                    >
                      {resource.title}
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200 inline-flex items-center gap-1"
                      title="Open Link"
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </a>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    {resource.documentUrl ? (
                      <a
                        href={resource.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 transition-colors duration-200 inline-flex items-center gap-1"
                        title="Download Document"
                      >
                        <DocumentArrowDownIcon className="h-5 w-5" />
                      </a>
                    ) : (
                      <span className="text-gray-400">No document</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Resources;
