import { useEffect } from "react";
import { useResourcesStore } from "@/store/resourcesStore";
import CRUDTable from "@/admin/components/CRUDTable";

const Resources = () => {
  const { resources, loading, error, fetchResources } = useResourcesStore();

  useEffect(() => {
    fetchResources();
  }, [fetchResources]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

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
      accessor: "title",
    },
    {
      header: "Link",
      accessor: "link",
      render: (value: string) => (
        <a
          href={value}
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
      accessor: "documentUrl",
      render: (value: string) =>
        value ? (
          <a
            href={value}
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
        data={resources}
        columns={columns}
        onDelete={() => {}}
        isDeletable={false}
        isEditable={false}
        loading={loading}
      />
    </div>
  );
};

export default Resources;
