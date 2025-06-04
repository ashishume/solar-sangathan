import { Link } from "react-router-dom";
import { useState } from "react";
import {
  DocumentTextIcon,
  VideoCameraIcon,
  InformationCircleIcon,
  ChatBubbleLeftRightIcon,
  UserPlusIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

interface SubSection {
  title: string;
  description: string;
  link: string;
  color: string;
  icon: string;
}

interface Section {
  title: string;
  description: string;
  link: string;
  color: string;
  icon: string;
  subSections?: SubSection[];
}

interface Sections {
  home: Section[];
  about: Section[];
  blog: Section[];
  contact: Section[];
}

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<keyof Sections>("home");

  const sections: Sections = {
    home: [
      {
        title: "Home Page",
        description: "Manage homepage content and layout",
        link: "",
        color: "bg-blue-600",
        icon: "🏠",
        subSections: [
          {
            title: "Testimonials",
            description: "Manage testimonials and reviews",
            link: "/admin/testimonials",
            color: "bg-orange-500",
            icon: "💬",
          },
          {
            title: "Channels",
            description: "Manage communication channels",
            link: "/admin/channels",
            color: "bg-pink-500",
            icon: "📢",
          },
          {
            title: "Carousel",
            description: "Manage homepage carousel slides",
            link: "/admin/carousel",
            color: "bg-indigo-500",
            icon: "🖼️",
          },
          {
            title: "Videos",
            description: "Manage video content",
            link: "/admin/video",
            color: "bg-red-500",
            icon: "🎥",
          },
          {
            title: "Important Information",
            description: "Manage important announcements and updates",
            link: "/admin/important-information",
            color: "bg-yellow-500",
            icon: "ℹ️",
          },
        ],
      },
    ],
    about: [
      {
        title: "About Page",
        description: "Manage about page content and team information",
        link: "/admin/about",
        color: "bg-indigo-600",
        icon: "ℹ️",
        subSections: [
          {
            title: "Working Committee",
            description: "Manage working committee members",
            link: "/admin/about?tab=working-committee",
            color: "bg-blue-500",
            icon: "👥",
          },
          {
            title: "Other Members",
            description: "Manage other team members",
            link: "/admin/about?tab=other-members",
            color: "bg-green-500",
            icon: "👤",
          },
        ],
      },
    ],
    blog: [
      {
        title: "Blog Page",
        description: "Manage blog content and organization",
        link: "/admin/blog",
        color: "bg-purple-600",
        icon: "📝",
        subSections: [
          {
            title: "Blog Posts",
            description: "Manage blog posts and articles",
            link: "/admin/blog",
            color: "bg-blue-500",
            icon: "📝",
          },
          {
            title: "Categories",
            description: "Manage content categories and hierarchy",
            link: "/admin/categories",
            color: "bg-purple-500",
            icon: "📑",
          },
          {
            title: "Tags",
            description: "Manage tags for categorizing content",
            link: "/admin/tags",
            color: "bg-green-500",
            icon: "🏷️",
          },
        ],
      },
    ],
    contact: [
      {
        title: "Contact Page",
        description: "Manage contact information and inquiries",
        link: "/admin/contact",
        color: "bg-red-600",
        icon: "📞",
      },
    ],
  };

  const quickLinks = [
    {
      title: "Blog Posts",
      description: "Manage blog posts and articles",
      icon: DocumentTextIcon,
      path: "/admin/blog",
    },
    {
      title: "Channels",
      description: "Manage video channels",
      icon: VideoCameraIcon,
      path: "/admin/channels",
    },
    {
      title: "Important Info",
      description: "Manage important information",
      icon: InformationCircleIcon,
      path: "/admin/important-information",
    },
    {
      title: "Contact Submissions",
      description: "View contact form submissions",
      icon: ChatBubbleLeftRightIcon,
      path: "/admin/contact",
    },
    {
      title: "Join Submissions",
      description: "View join form submissions",
      icon: UserPlusIcon,
      path: "/admin/join",
    },
    {
      title: "About",
      description: "Manage team members",
      icon: UserGroupIcon,
      path: "/admin/about",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("home")}
            className={`${
              activeTab === "home"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`${
              activeTab === "about"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab("blog")}
            className={`${
              activeTab === "blog"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Blog
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`${
              activeTab === "contact"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Contact
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="space-y-8">
        {sections[activeTab].map((section: Section) => (
          <div key={section.title}>
            <Link
              to={section.link}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 mb-6"
            >
              <div
                className={`${section.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4`}
              >
                {section.icon}
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {section.title}
              </h2>
              <p className="text-gray-600">{section.description}</p>
            </Link>

            {section.subSections && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {section.subSections.map((subSection: SubSection) => (
                  <Link
                    key={subSection.title}
                    to={subSection.link}
                    className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`${subSection.color} w-8 h-8 rounded-lg flex items-center justify-center text-lg`}
                      >
                        {subSection.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">
                          {subSection.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {subSection.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <link.icon className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {link.title}
                  </h2>
                  <p className="text-sm text-gray-500">{link.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
