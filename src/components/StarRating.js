import { useState } from 'react';
import Star from './Star';


function StarRating({ onRatingChange = () => {} }) {
    const [selectedStars, setSelectedStars] = useState(0);

    const handleClick = (stars) => {
        setSelectedStars(stars);
        onRatingChange(stars);
    };

    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => (
                <Star
                    key={index}
                    selected={index < selectedStars}
                    onClick={() => handleClick(index + 1)}
                />
            ))}
        </div>
    );
}

export default StarRating;