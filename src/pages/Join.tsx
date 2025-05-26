import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";
import { type RateCard } from "../api/mockData/rateCards";
import { getRateCards } from "../api/api-calls";

const Join = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    occupation: "",
    interests: "",
  });

  const [rateCards, setRateCards] = useState<RateCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchRateCards = async () => {
      try {
        const response = await getRateCards();
        setRateCards(response);
      } catch (error) {
        console.error("Error fetching rate cards:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRateCards();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-600">
              Become a member of our organization and be part of the change.
              Fill out the form below to get started.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <Input
                  label="First Name"
                  name="firstName"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
                <Input
                  label="Phone"
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>

              <Input
                label="Address"
                name="address"
                id="address"
                required
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
              />

              <Input
                label="Occupation"
                name="occupation"
                id="occupation"
                required
                value={formData.occupation}
                onChange={handleChange}
                placeholder="Enter your occupation"
              />

              <Textarea
                label="Interests"
                name="interests"
                id="interests"
                required
                rows={4}
                value={formData.interests}
                onChange={handleChange}
                placeholder="Tell us about your interests and why you want to join"
              />

              <Button type="submit" fullWidth>
                Submit Application
              </Button>
            </form>
          </div>

          {/* Rate Cards Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600">
              Select the perfect plan for your needs
            </p>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {rateCards.map((card) => (
              <div
                key={card.id}
                className={`bg-white rounded-3xl shadow-xl p-6 md:p-10 relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full ${
                  card.isPopular ? "border-2 border-red-500 md:scale-105" : ""
                }`}
              >
                {card.isPopular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {card.title}
                  </h3>
                  <div className="mb-8">
                    <span className="text-2xl font-bold text-gray-900">
                      {card.price}
                    </span>
                    {/* <span className="text-gray-600 text-xl">
                      /{card.duration}
                    </span> */}
                  </div>
                  <ul className="space-y-5 mb-10 text-left">
                    {card.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-gray-600 flex items-start text-lg"
                      >
                        <svg
                          className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-6">
                  <Button
                    fullWidth
                    variant={card.isPopular ? "primary" : "secondary"}
                    className={`text-lg py-4 ${
                      card.isPopular ? "bg-red-500 hover:bg-red-600" : ""
                    } rounded-xl`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Join;
