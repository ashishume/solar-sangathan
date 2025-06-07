export interface RateCard {
  _id: string;
  title: string;
  price: string;
  // duration: string;
  features: string[];
  buttonText?: string;
  buttonLink?: string;
  isPopular?: boolean;
}
