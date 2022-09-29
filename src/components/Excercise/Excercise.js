import React from 'react';
import './Excercise.css';

const Excercise = (props) => {
    const { id, img, name, comments, time } = props.exercise;
    // console.log(img, name);
    return (
        <div className='col-12 col-sm-6 col-lg-4 g-4'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-secondary">{comments}</p>
                    <p className="card-text"> Time Required : {time}s</p>
                    <button onClick={() => props.addtolist(time)} className='btn btn-info mx-0 fw-bolder fs-6'>Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Excercise;