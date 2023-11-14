import React from 'react';
import CourseListRow from './CourseListRow';
import "./CourseList.css";
import PropType from 'prop-types'//import prop-types to use the shape here
import CourseShape from './CourseShape';//the shape createdd


function CourseList({listCourses = []}) {//Parent component where shape(data type declaration) will be given to the child component's props values(to make sure we are setting the expected data types to the props e.g textafairstCell is expecting a string) and sets condition for how it will be rendered in the Ui
    return <table id='CourseList'>
        <thead>
            {listCourses.length > 0 ? (//Passing expected data types(prop-types)values to child component's props to make sure the props get the right data type values they are defined for(e.g. textFirstCell is expecting a string and it's values should be a string which has been defined by shape in the CourseShape file) through this parent's prop(listCourses)
                listCourses.map(({id, name, credit}) => {<CourseListRow key={id} textFirstCell={name} textSecondCell={credit}/> })
            )
            : (<CourseListRow textFirstCell='No course available yet' />)}
            <CourseListRow isHeader={true} textFirstCell="Available courses"/>{/*JS expression or primitive values are passed in curly braces to indicate to JSX that it's a dynamic content and shouldn't be rendered as is  */}
            <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
        <tbody>
            <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
            <CourseListRow isHeader={false} textFirstCell="Webpack" textSecondCell="20"/>
            <CourseListRow isHeader={false} textFirstCell="React" textSecondCell="40"/>
        </tbody>
    </table>
}
CourseList.PropType = {//This parent receives the shape created through it's own prop
    listCourses: PropType.arrayOf(CourseShape)
}
export default CourseList;
