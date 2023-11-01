/* Using enzyme and jest to test react component:
        They are used together because Enzyme complements Jest when 
        it comes to testing React components.
        Enzyme's 'shallow' function is used to shallow render React components, 
        making it easier to isolate and test individual components without 
        deeply rendering child components.

My project was created with 'create-react-app' (which authomatically 
comes with important devdependencies/dependencies precofigured 
for creatig a project), which comes with jest preconfigured. I only
installed enzyme (because it did doesn't come with enzyme) as a 
devDependency(--save-dev) and imported it into the test file.
 */

import React from "react";
import { shallow } from 'enzyme';
import Notifications from './Notifications'; //imports the React 'Notifications' component to test.


/* 
Below are React tests to test a component using jest library's 'describe' function to 
group the tests, and enzyme (testing utility) shallow function (rendering API) to shallow render the component.

Component being tested is the Notifications component:
    TESTS: Creates 3 tests from the Notifications component.

    NOTE:
        'describe', 'it', and 'expect' are functions provided by Jest.
        'shallow' and 'find' are functions provided by Enzyme.

        'describe' and 'it' are used for organizing and defining test suites and test cases. 
*/


describe('Notifications', () => { // Used to define a test suite.
    it('tests that Notifications renders without crashing', () => { // Used to organize/define a test case.
        const wrapper = shallow(<Notifications />); // enzyme 'shallow' function makes it easy to store a shallow copy of the component(here it's stored in the var 'wrapper.')
        expect(wrapper.exists()).toBe(true); // expect is a jest function used for making assertions in test cases about the behavior and output of the code.
    });

    it('verifies that Notifications renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        const listItems = wrapper.find('li');
        expect(listItems.length).toBe(3);
    });

    it('verifies that Notifications renders the text: "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.text()).toContain('Here is the list of notifications');
    })
});
