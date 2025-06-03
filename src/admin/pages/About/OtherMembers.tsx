import { useEffect } from "react";
import CRUDTable from "../../components/CRUDTable";
import { useOtherMembers } from "@/admin/store/otherMembers";

const OtherMembers = () => {
  const { members, fetchMembers, deleteMember } = useOtherMembers();

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      deleteMember(id);
    }
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
    <CRUDTable
      title="Other Members"
      columns={columns}
      data={members}
      onDelete={handleDelete}
      createLink="/admin/about/other-members/new"
    />
  );
};

export default OtherMembers;
