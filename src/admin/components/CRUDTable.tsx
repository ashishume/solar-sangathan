import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

interface Column {
  header: string;
  accessor: string | ((item: any) => ReactNode);
  render?: (value: any) => ReactNode;
}

interface CRUDTableProps {
  title: string;
  columns: Column[];
  data: any[];
  onDelete: (id: string) => void;
  createLink: string;
  loading?: boolean;
  isDeletable?: boolean;
  isEditable?: boolean;
}

const formatDate = (value: any): string | any => {
  if (!value) return value;

  // Check if the value is a date string or timestamp
  const date = new Date(value);
  if (isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

const CRUDTable = ({
  title,
  columns,
  data,
  onDelete,
  createLink,
  loading,
  isDeletable = true,
  isEditable = true,
}: CRUDTableProps) => {
  // Extract the base path from createLink (e.g., "/admin/blog-posts/new" -> "/admin/blog-posts")
  const basePath = createLink.replace("/new", "");

  const getCellValue = (item: any, column: Column) => {
    if (typeof column.accessor === "function") {
      return column.accessor(item);
    }
    const value = item[column.accessor];
    return column.render ? column.render(value) : formatDate(value);
  };

  const handleCellClick = (value: any) => {
    if (typeof value === "string" && value.length > 50) {
      toast(value, {
        duration: 4000,
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <Link
          to={createLink || ""}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Create New
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.header}
                  </th>
                ))}
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={item._id || index}>
                  {columns.map((column) => (
                    <td
                      key={column.header}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-w-xs truncate cursor-pointer hover:bg-gray-50"
                      onClick={() =>
                        handleCellClick(getCellValue(item, column))
                      }
                    >
                      {getCellValue(item, column)}
                    </td>
                  ))}
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-4">
                      {isEditable && (
                        <Link
                          to={`${basePath}/${item._id}/edit`}
                          className="text-indigo-600 hover:text-indigo-900 p-2"
                        >
                          <PencilIcon className="w-4 h-4" />
                        </Link>
                      )}
                      {isDeletable && (
                        <button
                          onClick={() => onDelete(item._id.toString())}
                          className="text-red-600 hover:text-red-900 p-2"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CRUDTable;
