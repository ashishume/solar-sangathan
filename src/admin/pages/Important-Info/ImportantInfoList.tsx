import { useEffect } from "react";
import CRUDTable from "../../components/CRUDTable";
import { useImportantInfo } from "@/admin/store/importantInfo";

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
          {item.content}
        </div>
      ),
    },
    {
      header: "Created At",
      accessor: (item: any) => new Date(item.createdAt).toLocaleDateString(),
    },
  ];

  return (
    <CRUDTable
      title="Important Information"
      columns={columns}
      data={importantInfo ? [importantInfo] : []}
      onDelete={handleDelete}
      createLink="/admin/important-information/new"
    />
  );
};

export default ImportantInfoList;
