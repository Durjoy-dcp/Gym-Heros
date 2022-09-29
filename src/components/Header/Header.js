import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='text-success bg-dark mb-2 py-4  d-flex justify-content-center align-items-center ' >
            <FontAwesomeIcon className='text-danger fs-2 mx-2' icon={faDumbbell} /><h1 className='fw-bold display-4'>Gym Heroes</h1>
        </div>
    );
};

export default Header;