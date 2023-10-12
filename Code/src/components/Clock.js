import React, { useEffect, useState } from 'react'
import "./clock.css";

function Clock() {
    const [clockstate, setClockState] = useState();
    const [datestate, setDateState] = useState();

    useEffect(() => {
        setInterval(() => {
            const time = new Date();
            const date = new Date();
            setClockState(time.toLocaleTimeString());
            setDateState(date.toLocaleDateString());
        }, 1000);
    }, []);

    return (
        <div className='ClockFont'>{clockstate}<br/>{datestate}</div>
    )
}

export default Clock

