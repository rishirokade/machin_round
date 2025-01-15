import React, { useState, useRef } from "react";

const ThrottledMouseTracker: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const lastUpdateTime = useRef<number>(0);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const now = Date.now();
        if (now - lastUpdateTime.current > 100) {
            setPosition({ x: event.clientX, y: event.clientY });
            lastUpdateTime.current = now;
        }
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            style={{
                height: "100vh",
                width: "100vw",
                backgroundColor: "#e0f7fa",
            }}
        >
            <p>Mouse Position: {`(${position.x}, ${position.y})`}</p>
        </div>
    );
};

export default ThrottledMouseTracker;
