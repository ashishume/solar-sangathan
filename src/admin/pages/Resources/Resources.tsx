import { useEffect } from "react";
import { useResourcesStore } from "@/admin/store/resourcesStore";
import CRUDTable from "@/admin/components/CRUDTable";

const Resources = () => {
  const { resources, loading, error, fetchResources, deleteResource } =
    useResourcesStore();

  useEffect(() => {
    fetchResources();
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600 text-xl">{error}</div>
      </div>
    );
  }

  const columns = [
    {
      header: "Title",
      accessor: (item: any) => item.title,
    },
    {
      header: "Link",
      accessor: (item: any) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Open Link
        </a>
      ),
    },
    {
      header: "Document",
      accessor: (item: any) =>
        item.documentUrl ? (
          <a
            href={item.documentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Download Document
          </a>
        ) : null,
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <CRUDTable
        title="Resources"
        columns={columns}
        data={resources}
        onDelete={deleteResource}
        createLink="/admin/resources/new"
        loading={loading}
      />
    </div>
  );
};

export default Resources;
