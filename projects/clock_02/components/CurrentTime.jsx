import React from 'react';
import { useState, useEffect } from 'react';

const CurrentTime = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])



    return (
        <p>this is the current date: {time.toLocaleDateString()}</p>
    );
}

export default CurrentTime;
