import { shallow } from "enzyme";
import Header from './Header';
import React from 'react';

describe('Header', () => {
    it('Shallow render the Header component to verify it renders without crashing', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.exists()).toBe(true);
    });

    it('Verify that the components render img and h1 tags', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.exists("img")).toEqual(true);
        expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
    })
});