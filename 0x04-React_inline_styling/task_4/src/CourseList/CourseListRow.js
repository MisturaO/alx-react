import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


function CourseListRow({isHeader, textFirstCell, textSecondCell}){

    return (
    <>
        <tr className={isHeader ? css(rowStyle.defaultRow) : css(rowStyle.headerRow)}>
            {isHeader ? (textSecondCell === null ? (
            <th colSpan="2">{textFirstCell}</th>
            ) : (
            <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
            </>
            )) : (
            <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
            </>
            )}
            </tr>
            </>
            );
        };

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
