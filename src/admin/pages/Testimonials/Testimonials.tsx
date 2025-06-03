import { useEffect } from "react";
import CRUDTable from "../../components/CRUDTable";
import { useTestimonials } from "@/admin/store/testimonials";

const Testimonials = () => {
  const { testimonials, fetchTestimonials, deleteTestimonial } =
    useTestimonials();

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      deleteTestimonial(id);
    }
  };

  const columns = [
    { header: "Author", accessor: "author" },
    { header: "Role", accessor: "role" },
    { header: "Location", accessor: "location" },
    {
      header: "Quote",
      accessor: (item: any) => (
        <div className="text-sm text-gray-900">
          {item.quote.substring(0, 100)}...
        </div>
      ),
    },
  ];

  return (
    <CRUDTable
      title="Testimonials"
      columns={columns}
      data={testimonials}
      onDelete={handleDelete}
      createLink="/admin/testimonials/new"
    />
  );
};

export default Testimonials;
