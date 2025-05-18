import { useState } from 'react';
import Star from './Star';


function StarRating() {
    const [selectedStars, setSelectedStars] = useState(0);

    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => (
                <Star
                    key={index}
                    selected={index < selectedStars}
                    onClick={() => setSelectedStars(index + 1)}
                />
            ))}
        </div>
    );
}

export default StarRating;