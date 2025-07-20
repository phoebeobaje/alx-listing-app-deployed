import React from "react";

// ✅ Match this with the Property type from your [id].tsx
type Property = {
    id: string;
    title: string;
    description: string;
    location: string;
    image: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    amenities: string[];
};

type PropertyDetailProps = {
    property: Property;
};

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
    return (
        <div className="p-4">
            <img src={property.image} alt={property.title} className="w-full h-64 object-cover rounded-md mb-4" />
            <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
            <p className="text-gray-600 mb-2">{property.location}</p>
            <p className="text-lg font-semibold mb-2">${property.price.toLocaleString()}</p>
            <p className="mb-4">{property.description}</p>
            <div className="mb-4">
                <strong>Bedrooms:</strong> {property.bedrooms} <br />
                <strong>Bathrooms:</strong> {property.bathrooms}
            </div>
            <div>
                <strong>Amenities:</strong>
                <ul className="list-disc list-inside">
                    {property.amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PropertyDetail;
