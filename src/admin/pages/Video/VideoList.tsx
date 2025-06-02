import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { videoService, type Video } from "../../../admin/services/videoService";

const VideoList = () => {
  const [video, setVideo] = useState<Video>({
    _id: "",
    title: "",
    videoUrl: "",
    thumbnailUrl: "",
  });
  const [loading, setLoading] = useState(true);

  const fetchVideo = async () => {
    try {
      const data = await videoService.getAll();
      setVideo(data as Video);
    } catch (error) {
      console.error("Error fetching video:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      try {
        await videoService.delete(id);
        await fetchVideo(); // Refresh the list after deletion
      } catch (error) {
        console.error("Error deleting video:", error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Video</h1>
        <Link
          to="/admin/video/new"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Video
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Preview
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Video ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr key={video._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="h-20 w-32">
                  <img
                    className="h-full w-full object-cover rounded"
                    src={video.thumbnailUrl}
                    alt={video.title}
                  />
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{video.title}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{video.videoUrl}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <Link
                  to={`/admin/video/${video._id}/edit`}
                  className="text-indigo-600 hover:text-indigo-900 mr-4"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(video._id || "")}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VideoList;
