import { getChannels } from "@/api/api-calls";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Channel {
  image: string;
  title: string;
  description: string;
  color: string;
  icon: string;
}

const Channels = () => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const data = await getChannels();
        setChannels(data);
      } catch (error) {
        console.error("Error fetching channels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChannels();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Channels</h1>
        <Link
          to="/admin/channels/new"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Channel
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Channel
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Icon
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {channels.map((channel, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={channel.image}
                        alt={channel.title}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {channel.title}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {channel.description.substring(0, 100)}...
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-2xl">{channel.icon}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link
                    to={`/admin/channels/${index}/edit`}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      // TODO: Implement delete functionality
                      console.log("Delete channel:", index);
                    }}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Channels;
