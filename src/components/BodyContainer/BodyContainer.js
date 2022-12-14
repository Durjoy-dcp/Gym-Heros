import React, { useEffect, useState } from 'react';
import BreakPart from '../BreakPart/BreakPart';
import ExcerciseContainer from '../ExerciseContainer/ExcerciseContainer';
import InfoPart from '../InfoPart/InfoPart';
import Qestion from '../Qestion/Qestion';
import './BodyContainer.css';
const BodyContainer = () => {
    const [time, setTime] = useState(0);

    const AddtoList = (timeNeed) => {
        setTime(time + timeNeed);

    }
    useEffect(() => {
        console.log(time);
    }, [time]);
    return (
        <div>
            <div className=" mx-4">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <h3>Add Today's Exercise </h3>
                        <ExcerciseContainer addtoList={AddtoList}></ExcerciseContainer>
                        <Qestion></Qestion>


                    </div>
                    <div className="col-12 col-md-4 info-part" >
                        <div style={{ "position": "sticky", "top": "0" }}>

                            <InfoPart></InfoPart>
                            <BreakPart time={time}></BreakPart>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BodyContainer;