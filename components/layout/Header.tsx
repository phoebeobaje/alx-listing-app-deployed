import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    const accommodationTypes = [
        "Rooms",
        "Mansions",
        "Countryside",
        "Villas",
        "Apartments",
    ];

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    ALXBNB
                </Link>

                {/* Search bar */}
                <div className="flex-1 mx-4 max-w-md">
                    <input
                        type="text"
                        placeholder="Search for properties..."
                        className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Auth links */}
                <div className="flex items-center space-x-4">
                    <Link href="#" className="text-gray-600 hover:text-gray-800">
                        Sign In
                    </Link>
                    <Link
                        href="#"
                        className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>

            {/* Accommodation Types */}
            <nav className="bg-gray-100">
                <div className="container mx-auto flex flex-wrap justify-center py-2">
                    {accommodationTypes.map((type, index) => (
                        <Link
                            key={index}
                            href="#"
                            className="text-gray-700 hover:text-primary px-4 py-1"
                        >
                            {type}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
