import React from 'react';
import './InfoPart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

const InfoPart = () => {
    return (
        <div className="" >
            <div className='myself d-flex justify-content-center align-items-center'>

                <img className="my-image mx-2" src="images/myimage.png" alt="" />
                <div className='text-center'>
                    <h4>Durjoy Chandra Paul</h4>
                    <p><small className='text-secondary'>  <FontAwesomeIcon icon={faLocationPin} /> Chittagong,Bangladesh</small></p>
                </div>

            </div>
            <div className=" mx-3 py-2 px-4 rounded my-2 d-flex justify-content-between " style={{ "background": "rgb(222, 222, 222)" }}>
                <div>
                    <h5>65 kg</h5>
                    <h6 className='text-secondary'>Weight</h6>
                </div>
                <div>
                    <h5>6.5</h5>
                    <h6 className='text-secondary'>Height</h6>
                </div>
                <div>
                    <h5>23 yrs</h5>
                    <h6 className='text-secondary'>Age</h6>
                </div>


            </div>
            <div></div>

        </div>
    );
};

export default InfoPart;