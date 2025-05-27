import CRUDTable from "@/admin/components/CRUDTable";
import { useTags } from "@/admin/store/tags";
import { useEffect } from "react";

const Tags = () => {
  const { tags, fetchTags, loading } = useTags();

  useEffect(() => {
    fetchTags();
  }, [fetchTags]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this tag?")) {
      // deleteTag(Number(id));
    }
  };

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Usage Count", accessor: "usageCount" },
    { header: "Created At", accessor: "createdAt" },
    { header: "Updated At", accessor: "updatedAt" },
  ];

  return (
    <CRUDTable
      title="Tags"
      columns={columns}
      data={tags}
      onDelete={handleDelete}
      createLink="/admin/tags/new"
      loading={loading}
    />
  );
};

export default Tags;
