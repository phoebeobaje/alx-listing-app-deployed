// components/property/ReviewSection.tsx
import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
    id: string;
    comment: string;
    author: string;
    date: string;
}

const ReviewSection = ({ propertyId }: { propertyId: string }) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(
                    `/api/properties/${propertyId}/reviews`
                );
                setReviews(response.data);
            } catch (err) {
                console.error("Error fetching reviews:", err);
                setError("Failed to load reviews.");
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [propertyId]);

    if (loading) return <p>Loading reviews...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (reviews.length === 0) return <p>No reviews yet.</p>;

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            <div className="space-y-4">
                {reviews.map((review) => (
                    <div key={review.id} className="border p-4 rounded-md bg-gray-50">
                        <p className="text-gray-800">{review.comment}</p>
                        <div className="text-sm text-gray-600 mt-2">
                            By {review.author} on {review.date}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;
