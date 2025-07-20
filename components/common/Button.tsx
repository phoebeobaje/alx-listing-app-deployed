import React from "react";

export const Button: React.FC<
    React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className = "", children, ...props }) => {
    return (
        <button
            className={`px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
