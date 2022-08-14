import { useState, useEffect} from "react";

const defaultRamainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
};

type countdownTimestampMs = {
    seconds?: number;
}

export function Timer(props: countdownTimestampMs) {
    const [remainingTime, setRemainingTime] = useState(defaultRamainingTime);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(props.seconds);
        }, 1000);
        return () => clearInterval(intervalId);
    },[props.seconds]);

    function updateRemainingTime(countdown: any) {
        console.log("HW");
    }
    return (
        <div className="flex justify-center text-3xl font-serif h-screen">
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
