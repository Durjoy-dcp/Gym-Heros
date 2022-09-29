import React, { useEffect, useState } from 'react';
import Excercise from '../Excercise/Excercise';

const ExcerciseContainer = () => {
    const [exercises, SetExercises] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => SetExercises(data))
    }, []);
    return (
        <div className='row'>
            {
                exercises.map(exercise => <Excercise exercise={exercise} key={exercise.id}></Excercise>)
            }

        </div>
    );
};

export default ExcerciseContainer;