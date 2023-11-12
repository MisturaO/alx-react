/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {screen, render} from '@testing-library/react';
import React from 'react';
import CourseList from './CourseList';



describe('CourseList', () => {
    it('renders CourseList component without crashing', () => {
        render(<CourseList />);
    });
    it('Checks that it renders the 5 different rows', () => {
        render(<CourseList />);
        expect(screen.getByText("Available courses")).toBeInTheDocument();
        expect(screen.getByText("Course name", "Credit")).toBeInTheDocument();
        expect(screen.getByText("ES6", "60")).toBeInTheDocument();
        expect(screen.getByText("Webpack", "20")).toBeInTheDocument();
        expect(screen.getByText("React", "40")).toBeInTheDocument();
    });
});
