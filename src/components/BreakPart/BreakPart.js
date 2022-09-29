import React, { useEffect, useState } from 'react';
import Time from '../Time/Time';
import './BreakPart.css';

const BreakPart = ({ time }) => {
    const [selectedTime, setSelectedTime] = useState(0);
    const updateTime = (breakTime) => {
        setSelectedTime(breakTime);
        localStorage.setItem("breakTime", breakTime);
    }
    useEffect(() => {
        // console.log(selectedTime);
        const storedtime = localStorage.getItem("breakTime");
        setSelectedTime(storedtime ? storedtime : 0);

    }, [selectedTime]);
    return (
        <div>
            <h4 className='mt-5  mb-2 px-2'>Add A Break</h4>
            <div className="radio-buttons d-flex justify-content-evenly py-3" style={{ "background": "rgb(222, 222, 222)" }}>

                <div className="form-check">
                    <input className="form-check-input hid-box" type="radio" name="exampleRadios" id="exampleRadios1" value="10" />
                    <label onClick={() => updateTime(10)} className="form-check-label" htmlFor="exampleRadios1">
                        10s
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input hid-box" type="radio" name="exampleRadios" id="exampleRadios2" value="20" />
                    <label onClick={() => updateTime(20)} className="form-check-label" htmlFor="exampleRadios2">
                        20s
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input hid-box" type="radio" name="exampleRadios" id="exampleRadios3" value="30" />
                    <label onClick={() => updateTime(30)} className="form-check-label" htmlFor="exampleRadios3">
                        30s
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input hid-box" type="radio" name="exampleRadios" id="exampleRadios4" value="40" />
                    <label onClick={() => updateTime(40)} className="form-check-label" htmlFor="exampleRadios4">
                        40s
                    </label>
                </div>

            </div>
            <Time time={time} selectedTime={selectedTime}></Time>
        </div >
    );
};

export default BreakPart;