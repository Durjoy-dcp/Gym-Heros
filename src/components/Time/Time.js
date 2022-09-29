import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Time = ({ time, selectedTime }) => {
    const notify = () => {
        toast.success("Great");
    }

    return (
        <div className=' my-4'>
            <div className="p-4 my-2" style={{ "background": "rgb(222, 222, 222)" }}>
                <h4>Exercise Time : {time}s</h4>
            </div>
            <div className="p-4 my-2" style={{ "background": "rgb(222, 222, 222)" }}>
                <h4>Break Time :{selectedTime}s </h4>
            </div>
            <div>
                <button onClick={notify} className='btn btn-info w-100 my-3'>Activity Completed</button>
                <ToastContainer />

            </div>
        </div>
    );
};

export default Time;