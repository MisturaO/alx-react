import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


function CourseListRow({isHeader, textFirstCell, textSecondCell}){//Child component whose props data types are set through the Parent Component's prop
    // Using ternary operator to conditionally render the elements based on the values of 'isHeader'. Also nested conditions with 'textSecondCell'

    // const rowStyle = {
    //     backgroundColor: '#f5f5f5ab'
    // }

    // const headerStyle = {
    //     backgroundColor: '#deb5b545'
    // }

    return (
    <>
        <tr className={ isHeader ? css(rowStyle.defaultRow) : css(rowStyle.headerRow)}> {/*Conditionally apply styles*/}
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

const rowStyle = StyleSheet.create({
    headerRow: {
        backgroundColor: '#deb5b545'
    },
    defaultRow: {
        backgroundColor: '#f5f5f5ab'
    }

})

export default CourseListRow;
