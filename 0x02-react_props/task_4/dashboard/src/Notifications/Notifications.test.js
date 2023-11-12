/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
// import { shallow } from 'enzyme';
import Notifications from './Notifications'; //imports the React 'Notifications' component to test.


describe('Notifications', () => {
    it('checks that the menu item is being displayed when displayDrawer is false', () => {
        render(<Notifications displayDrawer={false} />);
        // console.log(screen);
        expect(screen.ByText('Here is the list of notifications')).toBeInTheDocument();
    });
    it('checks that the div.Notifications is not being displayed when displayDrawer is false', () => {
        render(<Notifications displayDrawer={false}/>);
        expect(screen.getByText("Close button has been clicked")).not.toBeInTheDocument();
      });
    it('checks that the menu item is being displayed when displayDrawer is "true"', () => {
        render(<Notifications displayDrawer={true}/>);
        expect(screen.getByText('Your notifications')).toBeInTheDocument();
    });
    it('checks that the div.Notifications is being displayed when displayDrawer is true', () => {
        render(<Notifications displayDrawer={true}/>);
        expect(screen.getByText('Close button has been clicked')).toBeInTheDocument();
    });
});















/* 
Below are tests created with enzyme and React. 
*/
// describe('Notifications', () => { // Used to define a test suite.
//     it('tests that Notifications renders without crashing', () => { // Used to organize/define a test case.
//         const wrapper = shallow(<Notifications />); // enzyme 'shallow' function makes it easy to store a rendered copy of the component(here it's stored in the var 'wrapper.')
//         expect(wrapper.exists()).toBe(true); // expect is a jest function used for making assertions in test cases about the behavior and output of the code.
//     });

//     it('verifies that Notifications renders three list items', () => {
//         const wrapper = shallow(<Notifications />);
//         const listItems = wrapper.find('li');
//         expect(listItems.length).toBe(3);
//     });

//     it('verifies that Notifications renders the text: "Here is the list of notifications"', () => {
//         const wrapper = shallow(<Notifications />);
//         expect(wrapper.text()).toContain('Here is the list of notifications');
//     })
// });
