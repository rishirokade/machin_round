import React, { useState } from "react";

const ResizableBox: React.FC = () => {
    const [size, setSize] = useState({ width: 200, height: 200 });
    const [isResizing, setIsResizing] = useState(false);

    const handleMouseDown = () => {
        setIsResizing(true);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (isResizing) {
            setSize({ width: event.clientX, height: event.clientY });
        }
    };

    const handleMouseUp = () => {
        setIsResizing(false);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    width: size.width,
                    height: size.height,
                    backgroundColor: "lightblue",
                    position: "relative",
                }}
            >
                <div
                    onMouseDown={handleMouseDown}
                    style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "blue",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        cursor: "nwse-resize",
                    }}
                />
            </div>
        </div>
    );
};

export default ResizableBox;
