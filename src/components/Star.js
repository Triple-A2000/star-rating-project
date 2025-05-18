import { useState } from 'react';
import { FaStar } from 'react-icons/fa'

function Star({ selected = false, onClick }) {
    return (
        <FaStar
            color={selected ? "gold" : "grey"}
            onClick={onClick}
            style={{
                height: "50px",
                width: "50px", 
                margin: "5px",
                cursor: "pointer",
                transition: "color 0.2s"
            }}
            aria-label={selected ? "Selected star" : "Unselected star"}
        />
    );
}

export default Star;