import React from 'react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';


const BodySectionWithMarginBottom = (props) => {
    return (
        <div className='bodySectionWithMargin'>
            <BodySection {...props}/>  {/*receives the same set of props that were passed to the parent(with spread operator). This is a way to pass data from Parent to child*/}
        </div>
    );
};

export default BodySectionWithMarginBottom;
