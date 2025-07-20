import React, { useState } from "react";
import { HERO_BG, FILTERS, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "../components/common/Pill";
import { Card } from "@/components/common/Card";

const HomePage: React.FC = () => {
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

    return (
        <>
            {/* Hero Section */}
            <section className="h-[80vh] bg-cover bg-center flex flex-col  justify-center items-center text-white"
            style={{ backgroundImage: `url(${HERO_BG})` }}
>
<h1 className="text-4xl font-bold md:text-5xl mb-8"> Find your favorite place here!</h1>
<p>The best prices for over 2 million properties worldwide.</p>
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
