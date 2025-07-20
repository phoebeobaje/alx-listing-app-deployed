// components/common/Card.tsx
import React from "react";
import Image from "next/image";

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

interface CardProps {
    property: PropertyProps;
}

export const Card: React.FC<CardProps> = ({ property }) => {
    const location = `${property.address.city}, ${property.address.state}, ${property.address.country}`;
    return (
        <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition border">
            <Image
                src={property.image}
                alt={property.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{property.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{location}</p>
                <div className="flex justify-between align-center">      <p className="text-gray-800 font-medium">
                    $ {property.price.toLocaleString()}
                </p>
                <p className="text-yellow-500 text-sm mt-1">⭐ {property.rating}</p></div>
           

                <div className="flex gap-4 text-sm text-gray-600 mt-3">
                    <span>🛏 {property.offers.bed} Beds</span>
                    <span>🚿 {property.offers.shower} Showers</span>
                    <span>👥 {property.offers.occupants} Occupants</span>
                </div>
            </div>
        </div>
    );
};
