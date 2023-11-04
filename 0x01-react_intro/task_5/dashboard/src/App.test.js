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

import React from 'react';
import { shallow } from 'enzyme';
import App from './App'; //imports the React 'App' component to test


/* 
Below are React tests to test a component using jest library's 'describe' function to 
group the tests, and enzyme (testing utility) shallow function (rendering API) to shallow render the component.

Component being tested is the App componenet:
    TESTS: Creates 4 tests from the App component.

    NOTE:
        'describe', 'it', and 'expect' are functions provided by Jest.
        'shallow' is a function provided by Enzyme.
*/
describe('App', () => { // Used to define a test suite.
    it('test that App renders without crashing', () => { // Defines a test case.
        const wrapper = shallow(<App />); // enzyme 'shallow' function makes it easy to store a shallow copy of the component(here it's stored in the var 'wrapper.')
        expect(wrapper.exists()).toBe(true); // 'expect' is a jest utility function used for making assertions in test cases about the behavior and output of the code.
    });

    it('verifies that "App" renders a div with the class "App-header"', () => {
        const wrapper = shallow(<App />);
        const appHeader = wrapper.find('.App-body');
        expect(appHeader.exists()).toBe(true);
    });

    it('verifies that "App" renders a div with the class "App-body"', () => {
        const wrapper = shallow(<App />);
        const appDiv = wrapper.find(".App-body");
        expect(appDiv.exists()).toBe(true);
    });

    it('verifies that "App" renders a div with the class "App-footer"', () => {
        const wrapper = shallow(<App />);
        const appFooter = wrapper.find(".App-footer");
        expect(appFooter.exists()).toBe(true);
    });
});
