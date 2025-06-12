import { useEffect, useState } from "react";
import CRUDTable from "../../components/CRUDTable";
import { useWorkingCommittee } from "@/admin/store/workingCommittee";
import Button from "@/components/ui/Button";
import axiosInstance from "@/admin/services/axios";
import { toast } from "react-hot-toast";

const WorkingCommittee = () => {
  const { members, fetchMembers, deleteMember } = useWorkingCommittee();
  const [isReorderModalOpen, setIsReorderModalOpen] = useState(false);
  const [reorderMembers, setReorderMembers] = useState<any[]>([]);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  useEffect(() => {
    if (isReorderModalOpen) {
      setReorderMembers(
        [...members].sort((a, b) => (a.order || 0) - (b.order || 0))
      );
    }
  }, [isReorderModalOpen, members]);

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      deleteMember(id);
    }
  };

  const handleReorder = async () => {
    try {
      const updates = reorderMembers.map((member, index) => ({
        id: member._id,
        order: index + 1,
      }));

      await Promise.all(
        updates.map((update) =>
          axiosInstance.patch(`/about/members/${update.id}`, {
            order: update.order,
          })
        )
      );

      toast.success("Members reordered successfully!");
      fetchMembers();
      setIsReorderModalOpen(false);
    } catch (error) {
      toast.error("Failed to reorder members");
      console.error(error);
    }
  };

  const moveMember = (fromIndex: number, toIndex: number) => {
    const newMembers = [...reorderMembers];
    const [movedMember] = newMembers.splice(fromIndex, 1);
    newMembers.splice(toIndex, 0, movedMember);
    setReorderMembers(newMembers);
  };

  const columns = [
    {
      header: "Name",
      accessor: (item: any) => (
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={item.image}
              alt={item.name}
            />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">{item.name}</div>
          </div>
        </div>
      ),
    },
    { header: "Role", accessor: "role" },
    { header: "Contact", accessor: "contact" },
    { header: "Order", accessor: "order" },
    {
      header: "Social Links",
      accessor: (item: any) => (
        <div className="flex space-x-2">
          {item.social.linkedin && (
            <a
              href={item.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              LinkedIn
            </a>
          )}
          {item.social.twitter && (
            <a
              href={item.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Twitter
            </a>
          )}
          {item.social.facebook && (
            <a
              href={item.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Facebook
            </a>
          )}
          {item.social.youtube && (
            <a
              href={item.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              YouTube
            </a>
          )}
          {item.social.whatsapp && (
            <a
              href={item.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              WhatsApp
            </a>
          )}
          {item.social.instagram && (
            <a
              href={item.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Instagram
            </a>
          )}
          {item.social.telegram && (
            <a
              href={item.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Telegram
            </a>
          )}
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <Button
          onClick={() => setIsReorderModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Reorder Members
        </Button>
      </div>

      <CRUDTable
        title="Working Committee Members"
        columns={columns}
        data={members}
        onDelete={handleDelete}
        createLink="/admin/about/working-committee/new"
      />

      {isReorderModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4">Reorder Members</h2>
            <div className="space-y-2">
              {reorderMembers.map((member, index) => (
                <div
                  key={member._id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-500">{index + 1}.</span>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-gray-500">{member.role}</div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {index > 0 && (
                      <button
                        onClick={() => moveMember(index, index - 1)}
                        className="p-2 text-gray-600 hover:text-gray-900"
                      >
                        ↑
                      </button>
                    )}
                    {index < reorderMembers.length - 1 && (
                      <button
                        onClick={() => moveMember(index, index + 1)}
                        className="p-2 text-gray-600 hover:text-gray-900"
                      >
                        ↓
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <Button
                onClick={() => setIsReorderModalOpen(false)}
                className="bg-gray-500 hover:bg-gray-600"
              >
                Cancel
              </Button>
              <Button
                onClick={handleReorder}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Save Order
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkingCommittee;
