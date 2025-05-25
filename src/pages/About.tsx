import LinkedInIcon from "../assets/icons/linkedin";
import TwitterIcon from "../assets/icons/twitter";
import FacebookIcon from "../assets/icons/facebook";
import YouTubeIcon from "../assets/icons/youtube";

const About = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1683718217153-cb57b088b178?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1684017834450-21747b64d666?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1638734254932-657721b67e38?q=80&w=3125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1684435911226-e4ae6b7979af?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const members = [
    {
      img: "../assets/team-3.png",
      name: "Er Ashish Sahu",
      role: "Tech & Marketing Head",
      social: {
        linkedin: "https://example.com/",
        twitter: "https://example.com/",
        facebook: "https://example.com/",
        youtube: "https://example.com/",
      },
    },
    {
      img: "../assets/team-1.png",
      name: "Arvind Sindhawa Chairman",
      role: "Chairman",
      social: {
        linkedin: "https://example.com/",
        twitter: "https://example.com/",
        facebook: "https://example.com/",
        youtube: "https://example.com/",
      },
    },
    {
      img: "../assets/team-2.png",
      name: "Dr. Sharad Dutt Acharya",
      role: "National General Secretary",
      social: {
        linkedin: "https://example.com/",
        twitter: "https://example.com/",
        facebook: "https://example.com/",
        youtube: "https://example.com/",
      },
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">
        About Solar Sangathan
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Company Description */}
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Solar Sangathan is India's largest and most trusted association in
            the solar energy sector. Founded with a vision to transform India's
            renewable energy landscape, we bring together professionals,
            businesses, and innovators under one unified platform.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-red-600">Our Mission</h3>
            <p className="text-gray-700">
              To accelerate India's transition to sustainable energy by
              fostering collaboration, innovation, and knowledge sharing among
              solar energy stakeholders.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-red-600">Our Impact</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>500+ Active Members</li>
              <li>28+ States Coverage</li>
              <li>100+ Manufacturing Partners</li>
              <li>350+ EPC Companies</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-red-600">
              Why Join Us?
            </h3>
            <p className="text-gray-700">
              As a member of Solar Sangathan, you gain access to a powerful
              network of industry leaders, exclusive business opportunities, and
              cutting-edge insights that drive growth and innovation in the
              solar sector.
            </p>
          </div>
        </div>

        {/* Image Wall */}
        <div className="relative h-[600px]">
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute w-64 h-64 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "hover:rotate-3" : "hover:-rotate-3"
              }`}
              style={{
                top: `${(index * 20) % 60}%`,
                left: `${(index * 15) % 70}%`,
                zIndex: index,
              }}
            >
              <img
                src={src}
                alt={`Solar energy ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Working Committee / Founding Members */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Working Committee
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center w-full md:w-1/3 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-full border-4 border-red-600 mb-4 shadow-md"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h4>
              <p className="text-red-600 font-medium mb-2">{member.role}</p>
              <div className="flex gap-4 mt-2">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="w-7 h-7 text-blue-700 hover:text-blue-800 transition-colors" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <TwitterIcon className="w-7 h-7 text-blue-400 hover:text-blue-500 transition-colors" />
                  </a>
                )}
                {member.social.facebook && (
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-7 h-7 text-blue-600 hover:text-blue-700 transition-colors" />
                  </a>
                )}
                {member.social.youtube && (
                  <a
                    href={member.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <YouTubeIcon className="w-7 h-7 text-red-600 hover:text-red-700 transition-colors" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
