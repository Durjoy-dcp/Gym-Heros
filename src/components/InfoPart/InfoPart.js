import React from 'react';
import './InfoPart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';

const InfoPart = () => {
    return (
        <div>
            <div className='myself d-flex justify-content-center align-items-center'>

                <img className="my-image mx-2" src="images/myimage.png" alt="" />
                <div className='text-center'>
                    <h4>Durjoy Chandra Paul</h4>
                    <p><small className='text-secondary'>  <FontAwesomeIcon icon={faLocation} /> Chittagong,Bangladesh</small></p>
                </div>
            </div>
            <div></div>

        </div>
    );
};

export default InfoPart;