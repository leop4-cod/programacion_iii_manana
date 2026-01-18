import { useState } from 'react';

export default function ClickHistory() {
    // Explicitly type the state as an array of strings
    const [clicks, setClicks] = useState<string[]>([]);
    
    const handleClick = () => {
        const timestamp = new Date().toLocaleTimeString();
        // Use functional update to ensure we're working with the latest state
        setClicks(prevClicks => [...prevClicks, timestamp]);
    };
    
    const clearHistory = () => {
        setClicks([]);
    };
    
    return (
        <div>
            <h3>Click History</h3>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={clearHistory}>Clear History</button>
            <ul>
                {clicks.map((time, index) => (
                    <li key={index}>{time}</li>
                ))}
            </ul>
            {clicks.length === 0 && <p>No clicks yet</p>}
        </div>
    );
}