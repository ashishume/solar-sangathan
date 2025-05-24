import CRUDTable from "../components/CRUDTable";
import { useTags } from "../store/tags";

const Tags = () => {
  const { tags, deleteTag } = useTags();

  const handleDelete = (id: string | number) => {
    if (window.confirm("Are you sure you want to delete this tag?")) {
      deleteTag(Number(id));
    }
  };

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Slug", accessor: "slug" },
    { header: "Description", accessor: "description" },
  ];

  return (
    <CRUDTable
      title="Tags"
      columns={columns}
      data={tags}
      onDelete={handleDelete}
      createLink="/admin/tags/new"
    />
  );
};

export default Tags;
