import React, { useState } from "react";

export const CircleFollower: React.FC = () => {
    const [position, setPosition] = useState<{ x: number; y: number } | null>(
        null
    );

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        setPosition({ x: event.clientX + 20, y: event.clientY + 20 });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            style={{
                height: "100vh",
                width: "100vw",
                backgroundColor: "#f0f0f0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {position && (
                <div
                    style={{
                        position: "absolute",
                        top: position.y,
                        left: position.x,
                        width: "20px",
                        height: "20px",
                        backgroundColor: "blue",
                        borderRadius: "50%",
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                        transition: "transform 0.5s ease-out",
                    }}
                />
            )}
        </div>
    );
};
