import { useState } from "react";
import StarRating from "./StarRating";

function StarRatingText() {
    const [selectedStars, setSelectedStars] = useState(0);

    const ratingDescriptions = [
        "Bad",
        "Poor",
        "Average",
        "Good",
        "Very Good"
    ];

    const getRatingText = (count) => {
        return count === 0 ? "No Rating Yet" : ratingDescriptions[count - 1];
    };

    return (
        <div className="star-rating-text">
            <StarRating onRatingChange={setSelectedStars} />
            <p style={{ marginTop: "10px", fontSize: "18px", color: "white", textAlign: "center" }}>
                {getRatingText(selectedStars)}
            </p>
        </div>
    );
}

export default StarRatingText;