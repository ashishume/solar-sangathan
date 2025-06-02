import type { BlogPost } from "./blogService";

export const mockBlogs: BlogPost[] = [
  {
    _id: "1",
    title: "The Future of Solar Energy in India: 2024 Outlook",
    content: `
      <p>The solar energy sector in India is experiencing unprecedented growth, with the government's ambitious target of 500 GW renewable energy capacity by 2030. This article explores the key trends and opportunities in the Indian solar market.</p>
      
      <h2>Market Growth and Opportunities</h2>
      <p>India's solar capacity has grown from 20 GW in 2015 to over 70 GW in 2024, making it one of the fastest-growing solar markets globally. The government's supportive policies and falling technology costs have been key drivers of this growth.</p>
      
      <h2>Key Trends for 2024</h2>
      <ul>
        <li>Rising adoption of bifacial solar panels</li>
        <li>Integration of energy storage solutions</li>
        <li>Growth in rooftop solar installations</li>
        <li>Emergence of floating solar projects</li>
      </ul>
      
      <h2>Challenges and Solutions</h2>
      <p>While the sector shows promising growth, challenges such as land acquisition, grid integration, and financing remain. However, innovative solutions and government initiatives are addressing these issues effectively.</p>
    `,
    excerpt:
      "Explore the latest trends and opportunities in India's rapidly growing solar energy sector, including market growth, key trends, and challenges for 2024.",
    coverImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    author: {
      _id: "1",
      name: "Rajesh Kumar",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    },
    category: {
      _id: "1",
      name: "Industry News",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    tags: [
      {
        _id: "1",
        name: "Solar Energy",
        usageCount: 10,
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-01T00:00:00Z",
      },
    ],
    publishedAt: "2024-03-15T10:00:00Z",
    readTime: 8,
  },
  {
    _id: "2",
    title: "Complete Guide to Solar Panel Installation",
    content: `
      <p>Installing solar panels requires careful planning and execution. This comprehensive guide walks you through the entire process, from site assessment to system commissioning.</p>
      
      <h2>Pre-Installation Steps</h2>
      <p>Before installing solar panels, it's crucial to conduct a thorough site assessment, evaluate energy needs, and obtain necessary permits. This section covers all the preparatory steps in detail.</p>
      
      <h2>Installation Process</h2>
      <ol>
        <li>Mounting structure installation</li>
        <li>Panel mounting and wiring</li>
        <li>Inverter installation</li>
        <li>System testing and commissioning</li>
      </ol>
      
      <h2>Maintenance and Care</h2>
      <p>Regular maintenance is essential for optimal performance. Learn about cleaning schedules, inspection procedures, and common troubleshooting steps.</p>
    `,
    excerpt:
      "A step-by-step guide to solar panel installation, covering everything from site assessment to system maintenance.",
    coverImage:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    author: {
      _id: "2",
      name: "Priya Sharma",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    },
    category: {
      _id: "2",
      name: "Installation Guide",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    tags: [],
    publishedAt: "2024-03-10T14:30:00Z",
    readTime: 12,
  },
  {
    _id: "3",
    title: "Latest Innovations in Solar Technology",
    content: `
      <p>The solar industry is witnessing rapid technological advancements. This article explores the latest innovations that are shaping the future of solar energy.</p>
      
      <h2>Perovskite Solar Cells</h2>
      <p>Perovskite solar cells are emerging as a promising technology with higher efficiency and lower manufacturing costs. Learn about their potential and current challenges.</p>
      
      <h2>Smart Solar Solutions</h2>
      <p>Integration of IoT and AI in solar systems is revolutionizing energy management. Discover how smart technologies are optimizing solar power generation and consumption.</p>
      
      <h2>Bifacial Solar Panels</h2>
      <p>Bifacial panels are gaining popularity due to their ability to capture reflected light. Understand their advantages and implementation considerations.</p>
    `,
    excerpt:
      "Discover the cutting-edge innovations in solar technology, from perovskite cells to smart solar solutions.",
    coverImage:
      "https://images.unsplash.com/photo-1638734254932-657721b67e38?auto=format&fit=crop&w=1200&q=80",
    author: {
      _id: "3",
      name: "Amit Patel",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    },
    category: {
      _id: "3",
      name: "Solar Technology",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    tags: [],
    publishedAt: "2024-03-05T09:15:00Z",
    readTime: 6,
  },
  {
    _id: "4",
    title: "Sustainable Living: Solar Power for Homes",
    content: `
      <p>Transitioning to solar power is a significant step towards sustainable living. This article provides practical insights for homeowners considering solar adoption.</p>
      
      <h2>Benefits of Residential Solar</h2>
      <p>From reducing carbon footprint to lowering electricity bills, discover the numerous advantages of installing solar panels in your home.</p>
      
      <h2>Cost Considerations</h2>
      <p>Understand the initial investment, available subsidies, and long-term savings associated with residential solar installations.</p>
      
      <h2>Getting Started</h2>
      <p>Learn about the process of selecting the right system size, finding reliable installers, and navigating the installation process.</p>
    `,
    excerpt:
      "Learn how solar power can transform your home into an eco-friendly living space while reducing energy costs.",
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    author: {
      _id: "4",
      name: "Neha Gupta",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    },
    category: {
      _id: "4",
      name: "Sustainability",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    tags: [],
    publishedAt: "2024-03-01T11:45:00Z",
    readTime: 7,
  },
];

// Helper function to simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const mockBlogService = {
  getAllBlogs: async (page: number = 1, limit: number = 10) => {
    await delay(500); // Simulate network delay
    const start = (page - 1) * limit;
    const end = start + limit;
    return mockBlogs.slice(start, end);
  },

  getRecentBlogs: async (limit: number = 3) => {
    await delay(300);
    return mockBlogs.slice(0, limit);
  },

  getBlogById: async (id: string) => {
    await delay(400);
    const blog = mockBlogs.find((b) => b._id === id);
    if (!blog) throw new Error("Blog not found");
    return blog;
  },

  // getBlogsByCategory: async (
  //   category: string,
  //   page: number = 1,
  //   limit: number = 10
  // ) => {
  //   await delay(500);
  //   const filteredBlogs = mockBlogs.filter((b) => b.category === category);
  //   const start = (page - 1) * limit;
  //   const end = start + limit;
  //   return filteredBlogs.slice(start, end);
  // },

  // searchBlogs: async (query: string, page: number = 1, limit: number = 10) => {
  //   await delay(600);
  //   const searchResults = mockBlogs.filter(
  //     (blog) =>
  //       blog.title.toLowerCase().includes(query.toLowerCase()) ||
  //       blog.content.toLowerCase().includes(query.toLowerCase()) ||
  //       blog.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  //   );
  //   const start = (page - 1) * limit;
  //   const end = start + limit;
  //   return searchResults.slice(start, end);
  // },
};

export { mockBlogService };
