// interfaces/index.ts

// Interface for the Card component props
export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

// Interface for the Button component props
export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

// interfaces/index.ts

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
