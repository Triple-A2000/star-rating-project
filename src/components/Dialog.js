import { useState } from 'react';

function Dialog() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDialog = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button 
                className="openDialog" 
                onClick={toggleDialog}
            >
                {isOpen ? "Close Dialog" : "Open Dialog"}
            </button>

            {isOpen && (
                <div className="dialog">
                    <h2>Star Rating Project</h2>
                    <h3>
                        "This project is a simple and interactive 
                        star rating system built with React. 
                        It allows users to rate content on a scale 
                        of 1 to 5, displaying a corresponding text 
                        description from 'Bad' to 'Very Good.' 
                        The interface also features a dialog 
                        component that provides feedback or messages 
                        to the user in a clean and responsive layout."
                    </h3>
                </div>
            )}
        </>
    );
}

export default Dialog;
