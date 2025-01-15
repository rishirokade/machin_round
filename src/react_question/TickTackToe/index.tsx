import { useState } from "react";
import "./TickTackToe.css";

// Utility function to create the initial board state based on grid size
const createInitialBoard = (size: number): (string | null)[] =>
    Array(size * size).fill(null);

// Function to generate dynamic winning combinations based on grid size
const generateWinningCombinations = (size: number): number[][] => {
    const combinations: number[][] = [];

    // Rows
    for (let i = 0; i < size; i++) {
        const value = [...Array(size).keys()].map((x) => x + i * size);
        console.log(value, "value");

        combinations.push(value);
    }

    // Columns
    for (let i = 0; i < size; i++) {
        combinations.push([...Array(size).keys()].map((x) => i + x * size));
    }

    // Diagonal (top-left to bottom-right)
    combinations.push([...Array(size).keys()].map((x) => x * (size + 1)));

    // Diagonal (top-right to bottom-left)
    combinations.push([...Array(size).keys()].map((x) => (x + 1) * (size - 1)));

    return combinations;
};

// Function to check for a winner
const checkWinner = (
    board: (string | null)[],
    combinations: number[][]
): string | null => {
    for (const combination of combinations) {
        const [first, ...rest] = combination;
        if (
            board[first] &&
            rest.every((index) => board[index] === board[first])
        ) {
            return board[first];
        }
    }
    return null;
};

// Main TicTacToe component
export const TickTackToe = () => {
    const [gridSize, setGridSize] = useState<number>(3);
    const [board, setBoard] = useState<(string | null)[]>(
        createInitialBoard(gridSize)
    );
    const [isXTurn, setIsXTurn] = useState<boolean>(true);

    const winningCombinations = generateWinningCombinations(gridSize);

    // Handle cell click event
    const handleCellClick = (index: number): void => {
        if (board[index] || checkWinner(board, winningCombinations)) return;

        const updatedBoard = [...board];
        updatedBoard[index] = isXTurn ? "X" : "O";
        setBoard(updatedBoard);
        setIsXTurn(!isXTurn);
    };

    // Reset the game
    const resetGame = (): void => {
        setBoard(createInitialBoard(gridSize));
        setIsXTurn(true);
    };

    // Handle grid size change
    const handleGridSizeChange = (size: number) => {
        setGridSize(size);
        setBoard(createInitialBoard(size));
        setIsXTurn(true);
    };

    // Get the game status message
    const getStatusMessage = (): string => {
        const winner = checkWinner(board, winningCombinations);
        if (winner) return `🎉 Winner: ${winner}`;
        if (!board.includes(null)) return "It's a Draw!";
        return `Next Turn: ${isXTurn ? "X" : "O"}`;
    };

    return (
        <div className="main-container">
            <div className="top-container">
                <div className="status">{getStatusMessage()}</div>
                <button className="reset-button" onClick={resetGame}>
                    🔄 Reset
                </button>
            </div>

            <div className="grid-size-container">
                <label htmlFor="grid-size">Grid Size:</label>
                <select
                    id="grid-size"
                    value={gridSize}
                    onChange={(e) =>
                        handleGridSizeChange(Number(e.target.value))
                    }
                >
                    {[3, 4, 5, 6, 7, 8, 9].map((size) => (
                        <option key={size} value={size}>
                            {size} x {size}
                        </option>
                    ))}
                </select>
            </div>

            <div
                className="board-container"
                style={{
                    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                    gridTemplateRows: `repeat(${gridSize}, 1fr)`,
                }}
            >
                {board.map((value, index) => (
                    <div
                        key={index}
                        className={`cell ${value ? "cell-filled" : ""}`}
                        onClick={() => handleCellClick(index)}
                    >
                        {value}
                    </div>
                ))}
            </div>
        </div>
    );
};
