import React from 'react';
import './BreakPart.css';

const BreakPart = () => {
    return (
        <div>
            <h4 className='mt-5  mb-2 px-2'>Add A Break</h4>
            <div className="radio-buttons d-flex justify-content-evenly py-3" style={{ "background": "rgb(222, 222, 222)" }}>

                <div className="form-check">
                    <input className="form-check-input hid-box" type="radio" name="exampleRadios" id="exampleRadios1" value="10" />
                    <label className="form-check-label" for="exampleRadios1">
                        10s
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input hid-box" type="radio" name="exampleRadios" id="exampleRadios2" value="20" />
                    <label className="form-check-label" for="exampleRadios2">
                        20s
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input hid-box" type="radio" name="exampleRadios" id="exampleRadios3" value="30" />
                    <label className="form-check-label" for="exampleRadios3">
                        30s
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input hid-box" type="radio" name="exampleRadios" id="exampleRadios4" value="40" />
                    <label className="form-check-label" for="exampleRadios4">
                        40s
                    </label>
                </div>

            </div>
        </div>
    );
};

export default BreakPart;