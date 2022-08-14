import { useState, useEffect} from "react";

const DefaultRamainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
};

export function Timer() {
    const [remainingTime, setRemainingTime] = useState(DefaultRamainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime();
        }, 1000);
        return () => clearInterval(intervalId);
    },[]);

    function updateRemainingTime() {

    }
    return (
        <div className="flex justify-center text-3xl h-screen">
            <div className="my-96 m-2">
                <span>{remainingTime.days}</span>
                <span>d</span>
            </div>
            <div className="my-96 m-2">
                <span>{remainingTime.hours}</span>
                <span>h</span>
            </div>
            <div className="my-96 m-2">
                <span>{remainingTime.minutes}</span>
                <span>m</span>
            </div>
            <div className="my-96 m-2">
                <span>{remainingTime.seconds}</span>
                <span>s</span>
            </div>
        </div>
    );
}
