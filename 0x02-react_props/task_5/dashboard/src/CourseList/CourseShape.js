import PropTypes from 'prop-types';

/* This module creates a shape for prop-types by defining an object with 'PropTypes.shape'(https://www.npmjs.com/package/prop-types)
Create a new Shape named CourseShape containing:
    id (number, required)
    name (string, required)
    credit (number, required)
*/

const CourseShape = PropTypes.shape ({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired
});

export default CourseShape;
