import React, { useState } from "react";
import { HERO_BG, FILTERS, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "../components/common/Pill";
import { Card } from "@/components/common/Card";

const HomePage: React.FC = () => {
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

    return (
        <>
            {/* Hero Section */}
            <section
                className="relative w-auto h-[90vh] bg-cover bg-center flex items-center justify-center text-white rounded-[18px]"
                style={{
                    backgroundImage: `url(${HERO_BG.src})`,
                }}
            >
                <div className="text-center bg-opacity-40 p-6 rounded-xl">
                    <h1 className="text-[94px] md:text-5xl font-bold mb-4">
                        Find your favorite <br /> place here!
                    </h1>
                    <p className="text-[24px] md:text-xl">
                        The best prices for over 2 million properties worldwide.
                    </p>
                </div>
            </section>
            

            {/* Filter Section */}
            <section className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-semibold mb-4">Filter by:</h2>
                <div className="flex flex-wrap gap-3">
                    {FILTERS.map((filter: string) => (
                        <Pill
                            key={filter}
                            label={filter}
                            selected={selectedFilter === filter}
                            onClick={() =>
                                setSelectedFilter((prev) => (prev === filter ? null : filter))
                            }
                        />
                    ))}
                </div>
            </section>

            {/* Listing Section */}
            <section className="mx-auto px-4 py-10">
                <h2 className="text-2xl font-semibold mb-6">Featured Listings</h2>
                <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {PROPERTYLISTINGSAMPLE.map((property) => (
                        <Card key={property.name} property={property} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default HomePage;
