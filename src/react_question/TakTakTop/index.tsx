import React, { useReducer } from "react";
import { gameReducer, initialState } from "./GameMachine";
import Board from "./Board";

export const TakTakTop: React.FC = () => {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    const handleSquareClick = (index: number) => {
        dispatch({ type: "PLAY", payload: index });
    };

    const handleReset = () => {
        dispatch({ type: "RESET" });
    };

    return (
        <div className="app">
            <h1>Tic-Tac-Toe</h1>
            <Board board={state.board} onSquareClick={handleSquareClick} />
            {state.winner && (
                <div className="status">
                    {state.winner === "draw"
                        ? "It's a Draw!"
                        : `Winner: ${state.winner}`}
                </div>
            )}
            <button onClick={handleReset}>Reset Game</button>
        </div>
    );
};
