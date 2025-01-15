import { useState } from "react";

export const Timer = () => {
    const [remainingTime, setRemainingTime] = useState<number>(0);
    const [intervalId, setIntervalId] = useState(0);

    const resetTime = (): void => {
        clearInterval(intervalId);
        setRemainingTime(300);
    };

    const pausedTime = () => {
        clearInterval(intervalId);
    };

    const resumeTime = () => {
        clearInterval(intervalId);
        const interval = setInterval(() => {
            setRemainingTime((t) => t - 1);
        }, 1000);
        setIntervalId(interval);
    };

    const startTime = () => {
        clearInterval(intervalId);
        setRemainingTime(300);
        const interval = setInterval(() => {
            setRemainingTime((t) => t - 1);
        }, 1000);
        setIntervalId(interval);
    };

    return (
        <>
            <div>{remainingTime}</div>
            <div>
                <button onClick={resetTime}>Reset</button>
                <button onClick={pausedTime}>Pause</button>
                <button onClick={resumeTime}>resumeTime</button>
                <button onClick={startTime}>Start</button>
            </div>
        </>
    );
};
