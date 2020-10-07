import React, { useState, useEffect } from 'react';
import Square from './Square';
import Won from './Won';
import Styles from './styles';

const Board = () => {
    const [player, setPlayer] = useState(1);
    const [piece, setPiece] = useState('x');
    const [won, setWon] = useState(false);
    const [board, setBoard] = useState(Array(9).fill(null));

    const changePlayer = Location => {
        const clone = [...board];
        clone[Location] = piece;
        setBoard(clone);
        setPlayer(player === 1 ? 2 : 1);
        setPiece(piece === 'x' ? 'o' : 'x');
    };

    useEffect(() => {
        const possibleWins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
        ];

        for (let [pos1, pos2, pos3] of possibleWins) {
            if (!board[pos1] || !board[pos2] || !board[pos3]) continue;

            if (board[pos1] === board[pos2] === board[pos3]) setWon(true);
        };

    }, []);

    return (
        <>
        </>
    );
};

export default Board;