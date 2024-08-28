import { useState, useEffect } from "react";

function useSquatCounter() {
    const [repCount, setRepCount] = useState(0);
    const [direction, setDirection] = useState(null); // "up" or "down"
    const [position, setPosition] = useState("stand"); // "squat" or "stand"

    useEffect(() => {
        if (direction === "up" && position === "squat") {
            // A full squat rep is counted when the direction changes to up from down
            setRepCount(prevRepCount => prevRepCount + 1);
            setPosition("stand");
        }
    }, [direction, position]);

    function countReps(prediction) {
        if (prediction > 0.3) {
            setPosition("squat");
            if (direction !== "down") {
                setDirection("down");
            }
        } else {
            setPosition("stand");
            if (direction !== "up") {
                setDirection("up");
            }
        }
    }

    return { repCount, countReps };
}

export { useSquatCounter, countReps };
