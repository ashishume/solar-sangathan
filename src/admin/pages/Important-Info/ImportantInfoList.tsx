import { useEffect } from "react";
import CRUDTable from "../../components/CRUDTable";
import { useImportantInfo } from "@/admin/store/importantInfo";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

const ImportantInfoList = () => {
  const { importantInfo, fetchImportantInfo, deleteImportantInfo } =
    useImportantInfo();

  useEffect(() => {
    fetchImportantInfo();
  }, [fetchImportantInfo]);

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this information?")) {
      deleteImportantInfo(id);
    }
  };

  const columns = [
    {
      header: "Content",
      accessor: (item: any) => (
        <div className="text-sm text-gray-900 whitespace-pre-wrap">
          {item?.content || "No content"}
        </div>
      ),
    },
    {
      header: "Created At",
      accessor: (item: any) =>
        item?.createdAt ? new Date(item.createdAt).toLocaleDateString() : "N/A",
    },
    {
      header: "Notice Type",
      accessor: (item: any) => item?.noticeType || "N/A",
    },
    {
      header: "Document Link",
      accessor: (item: any) => (
        <a href={item?.documentLink} target="_blank" rel="noopener noreferrer">
          <ArrowDownCircleIcon className="w-8 h-8" />
        </a>
      ),
    },
  ];

  // Filter out null values and create a flat array of items
  const tableData = importantInfo
    ? [importantInfo.header, importantInfo.footer].filter(Boolean)
    : [];

  return (
    <CRUDTable
      title="Important Information"
      columns={columns}
      data={tableData}
      onDelete={handleDelete}
      createLink="/admin/important-information/new"
    />
  );
};

export default ImportantInfoList;
