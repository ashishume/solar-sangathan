import { useEffect } from "react";
import CRUDTable from "../../components/CRUDTable";
import { useVideo } from "@/admin/store/video";

const VideoList = () => {
  const { video, fetchVideo, deleteVideo } = useVideo();

  useEffect(() => {
    fetchVideo();
  }, [fetchVideo]);

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      deleteVideo(id);
    }
  };

  const columns = [
    {
      header: "Preview",
      accessor: (item: any) => (
        <div className="h-20 w-32">
          <img
            className="h-full w-full object-cover rounded"
            src={item.thumbnailUrl}
            alt={item.title}
          />
        </div>
      ),
    },
    { header: "Title", accessor: "title" },
    { header: "Video ID", accessor: "videoUrl" },
  ];

  return (
    <CRUDTable
      title="Video"
      columns={columns}
      data={video ? [video] : []}
      onDelete={handleDelete}
      createLink="/admin/video/new"
    />
  );
};

export default VideoList;
