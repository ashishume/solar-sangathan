import { useEffect, useState } from "react";
import LinkedInIcon from "../assets/icons/linkedin";
import TwitterIcon from "../assets/icons/twitter";
import FacebookIcon from "../assets/icons/facebook";
import YouTubeIcon from "../assets/icons/youtube";
import axiosInstance from "@/admin/services/axios";
import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.jpeg";
import image3 from "../assets/3.jpeg";

interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  contact: string;
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    youtube?: string;
  };
  isWorkingCommittee: boolean;
}

const About = () => {
  const [workingCommittee, setWorkingCommittee] = useState<Member[]>([]);
  const [otherMembers, setOtherMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const [workingCommitteeRes, otherMembersRes] = await Promise.all([
          axiosInstance.get("/about/members/working-committee"),
          axiosInstance.get("/about/members/other"),
        ]);

        const workingCommitteeData = workingCommitteeRes.data;
        const otherMembersData = otherMembersRes.data;

        setWorkingCommittee(workingCommitteeData);
        setOtherMembers(otherMembersData);
      } catch (error) {
        console.error("Error fetching members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const images = [image1, image2, image3];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

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
        <div className="relative min-h-[400px] md:h-[600px]">
          <div className="grid grid-cols-2 md:grid-cols-none md:block gap-4 md:gap-0">
            {images.map((src, index) => (
              <div
                key={src}
                className={`md:absolute w-full md:w-64 h-48 md:h-64 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${
                  index % 2 === 0 ? "hover:rotate-3" : "hover:-rotate-3"
                }`}
                style={{
                  top:
                    index === 0
                      ? "0%"
                      : index === 1
                      ? "20%"
                      : index === 2
                      ? "40%"
                      : "60%",
                  left:
                    index === 0
                      ? "0%"
                      : index === 1
                      ? "30%"
                      : index === 2
                      ? "15%"
                      : "45%",
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
      </div>

      {/* Working Committee / Founding Members */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Working Committee
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {workingCommittee.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] transition-transform duration-300 hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-full border-4 border-red-600 mb-4 shadow-md"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h4>
              <p className="text-red-600 font-medium mb-2">{member.role}</p>
              {member?.contact && (
                <p className="text-red-600 font-medium mb-2">
                  (+91) {member.contact}
                </p>
              )}
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

      {/* Other Members Section */}
      {otherMembers.length > 0 && (
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Other Members
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-red-600 mb-4 shadow-md"
                />
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-red-600 font-medium mb-2 text-center">
                  {member.role}
                </p>
                {member?.contact && (
                  <p className="text-red-600 font-medium mb-2 text-center">
                    (+91) {member.contact}
                  </p>
                )}
                <div className="flex gap-4 mt-2">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon className="w-6 h-6 text-blue-700 hover:text-blue-800 transition-colors" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <TwitterIcon className="w-6 h-6 text-blue-400 hover:text-blue-500 transition-colors" />
                    </a>
                  )}
                  {member.social.facebook && (
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-6 h-6 text-blue-600 hover:text-blue-700 transition-colors" />
                    </a>
                  )}
                  {member.social.youtube && (
                    <a
                      href={member.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                    >
                      <YouTubeIcon className="w-6 h-6 text-red-600 hover:text-red-700 transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
