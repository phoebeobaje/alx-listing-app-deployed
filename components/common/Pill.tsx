import React from "react";

interface PillProps {
    label: string;
    onClick?: () => void;
    selected?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, selected }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full border transition ${selected
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
                }`}
        >
            {label}
        </button>
    );
};

export default Pill;
