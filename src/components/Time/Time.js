import React from 'react';

const Time = () => {
    return (
        <div className=' my-4'>
            <div className="p-4 my-2" style={{ "background": "rgb(222, 222, 222)" }}>
                <h4>Exercise Time : </h4>
            </div>
            <div className="p-4 my-2" style={{ "background": "rgb(222, 222, 222)" }}>
                <h4>Break TIme : </h4>
            </div>
            <div>
                <button className='btn btn-info w-100 my-3'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Time;