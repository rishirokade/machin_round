import React, { useState } from "react";

const ClickTracker: React.FC = () => {
    const [clicks, setClicks] = useState<{ x: number; y: number }[]>([]);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event;
        setClicks((prevClicks) => [...prevClicks, { x: clientX, y: clientY }]);
    };

    return (
        <div
            onClick={handleClick}
            style={{
                height: "100vh",
                width: "100vw",
                backgroundColor: "#ffebee",
                position: "relative",
            }}
        >
            {clicks.map((click, index) => (
                <div
                    key={index}
                    style={{
                        position: "absolute",
                        top: click.y,
                        left: click.x,
                        width: "10px",
                        height: "10px",
                        backgroundColor: "red",
                        borderRadius: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                />
            ))}
        </div>
    );
};

export default ClickTracker;
