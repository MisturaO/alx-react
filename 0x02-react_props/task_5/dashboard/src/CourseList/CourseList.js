import React from 'react';
import CourseListRow from './CourseListRow';
import "./CourseList.css";
import CourseShape from './CourseShape';


function CourseList({listCourses = []}) {
    return <table id='CourseList'>
        <thead>
            {listCourses.length > 0 ? (
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
export default CourseList;
