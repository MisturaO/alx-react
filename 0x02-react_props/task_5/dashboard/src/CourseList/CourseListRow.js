import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({isHeader, textFirstCell, textSecondCell}){
    // Using ternary operator to conditionally render the elements based on the values of 'isHeader'. Also nested conditions with 'textSecondCell'
    return (
    <>
        <tr>
            {isHeader ? ( //This check is truthy like: if(isHeader)
                textSecondCell === null ? (
                <th colSpan="2">{textFirstCell}</th> //The first test unit in 'CourseListRow.test.js': shows it renders this when 'isHeader' is true
                ) : (
                <>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </>
                )) : (
                    <>
                        <td>{textFirstCell}</td>
                        <td>{textSecondCell}</td>
                    </>)
                    }
        </tr>
        </>
    );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([   //ensures property 'textSecondCell' can accept either a string or number.
        PropTypes.string,
        PropTypes.number
    ])
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

export default CourseListRow;
