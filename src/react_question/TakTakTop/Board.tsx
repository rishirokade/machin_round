// src/components/Board.tsx
import React from "react";
import Square from "./Square";

interface BoardProps {
    board: (string | null)[];
    onSquareClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onSquareClick }) => {
    return (
        <div className="board">
            {board.map((value, index) => (
                <Square
                    key={index}
                    value={value}
                    onClick={() => onSquareClick(index)}
                />
            ))}
        </div>
    );
};

export default Board;
