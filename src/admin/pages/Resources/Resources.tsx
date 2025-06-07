import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useResourcesStore } from "../../../store/resourcesStore";
import Button from "../../../components/ui/Button";
import CRUDTable from "../../components/CRUDTable";

const Resources = () => {
  const { resources, loading, error, fetchResources, deleteResource } =
    useResourcesStore();

  useEffect(() => {
    fetchResources();
  }, [fetchResources]);

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
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Resources</h1>
        <Link to="/admin/resources/new">
          <Button>Add New Resource</Button>
        </Link>
      </div>

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
