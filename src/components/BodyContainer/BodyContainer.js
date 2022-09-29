import React from 'react';
import ExcerciseContainer from '../ExerciseContainer/ExcerciseContainer';

const BodyContainer = () => {
    return (
        <div>
            <div className=" mx-4">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <h3>Add Today's Exercise </h3>
                        <ExcerciseContainer></ExcerciseContainer>

                    </div>
                    <div className="col-12 col-md-4">
                        <h1>THis is the e info </h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BodyContainer;