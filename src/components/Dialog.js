import { useState } from 'react';

function Dialog() {

    const [count, setCounter] = useState(0);

    const reset = () => {
        if (count > 0) setCounter(0);
    }

    return (
        <div className="counter">
            <input 
                type="button" 
                className="dialog" 
                value="Dialog"
                onClick={Dialog}
            />
        </div>
    )
}

export default Dialog;