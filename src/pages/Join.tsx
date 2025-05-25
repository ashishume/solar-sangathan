import { useState } from "react";
import type { FormEvent } from "react";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";

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

          <div className="bg-white rounded-2xl shadow-xl p-8">
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
        </div>
      </div>
    </div>
  );
};

export default Join;
