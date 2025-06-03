import { useEffect } from "react";
import CRUDTable from "../../components/CRUDTable";
import { useChannels } from "@/admin/store/channels";

const Channels = () => {
  const { channels, fetchChannels, deleteChannel } = useChannels();

  useEffect(() => {
    fetchChannels();
  }, [fetchChannels]);

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this channel?")) {
      deleteChannel(id);
    }
  };

  const columns = [
    {
      header: "Channel",
      accessor: (item: any) => (
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={item.image}
              alt={item.title}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {item.title}
            </div>
          </div>
        </div>
      ),
    },
    {
      header: "Description",
      accessor: (item: any) => (
        <div className="text-sm text-gray-900">
          {item.description.substring(0, 100)}...
        </div>
      ),
    },
    {
      header: "Icon",
      accessor: (item: any) => <div className="text-2xl">{item.icon}</div>,
    },
  ];

  return (
    <CRUDTable
      title="Channels"
      columns={columns}
      data={channels}
      onDelete={handleDelete}
      createLink="/admin/channels/new"
    />
  );
};

export default Channels;
