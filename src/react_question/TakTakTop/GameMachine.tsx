export type Player = "X" | "O" | null;

export interface GameState {
    board: Player[];
    currentPlayer: Player;
    winner: Player | "draw" | null;
}

export const initialState: GameState = {
    board: Array(9).fill(null),
    currentPlayer: "X",
    winner: null,
};

export function gameReducer(
    state: GameState,
    action: { type: string; payload?: number }
): GameState {
    switch (action.type) {
        case "PLAY": {
            const { payload: index } = action;
            if (state.board[index!] || state.winner) return state;

            const newBoard = [...state.board];
            newBoard[index!] = state.currentPlayer;

            const winner = calculateWinner(newBoard);
            return {
                ...state,
                board: newBoard,
                currentPlayer: state.currentPlayer === "X" ? "O" : "X",
                winner,
            };
        }
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

function calculateWinner(board: Player[]): Player | "draw" | null {
    const lines: number[][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // Rows
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // Columns
        [0, 4, 8],
        [2, 4, 6], // Diagonals
    ];

    for (const line of lines) {
        const [a, b, c] = line;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return board.includes(null) ? null : "draw";
}
