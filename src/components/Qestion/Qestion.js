import React from 'react';

const Qestion = () => {
    return (
        <div className='container my-5'>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How does react work?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.

                            Users can create a representation of a DOM node by declaring the Element function in React.React is written using JSX instead of standard JavaScript to simplify components and keep code clean.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Difference between props and state in ReactJs?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.

                            A prop can be passed on to the child in the state of a parent. They apply to the same value but can only be updated by the parent variable.


                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            where should use useEffect except load api?

                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            A side-effect can be any effect(programming logic) that is responsible for changing the state of your component. If the state changes, the component re-renders.So, a side effect is something that we should isolate from the rendering. The useEffect hook helps perform side effects by isolating it from the rendering logic. So to update state and re-renders we use useEffect excepting load API.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qestion;