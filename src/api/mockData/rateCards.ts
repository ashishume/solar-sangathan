export interface RateCard {
  id: number;
  title: string;
  price: string;
  // duration: string;
  features: string[];
  buttonText?: string;
  buttonLink?: string;
  isPopular?: boolean;
}

export const mockRateCards: RateCard[] = [
  {
    id: 1,
    title: "Basic",
    price: "₹999/year",
    // duration: "year",
    features: [
      "Access to basic resources",
      "Monthly newsletter",
      "Community forum access",
      "Basic training materials",
    ],
    buttonText: "Get Started",
    buttonLink: "https://www.google.com",
  },
  {
    id: 2,
    title: "Professional",
    price: "₹2499/year",
    isPopular: true,
    features: [
      "All Basic features",
      "Priority support",
      "Advanced training materials",
      "Networking events access",
      "Business listing in directory",
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    price: "₹4999/year",
    // duration: "year",
    features: [
      "All Professional features",
      "Dedicated account manager",
      "Custom training programs",
      "Premium business listing",
      "Exclusive event invitations",
      "Industry reports access",
    ],
  },
];
