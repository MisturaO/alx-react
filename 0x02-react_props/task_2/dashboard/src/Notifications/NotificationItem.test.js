import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import NotificationItem from "./NotificationItem";

describe("rendering components", () => {
  it("renders NotificationItem component without crashing", () => {
    const { container } = render(<NotificationItem />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders correct html from type="default" value="test" props', () => {
    const { container, rerender } = render(<NotificationItem />);

    rerender(<NotificationItem type="default" value="test" />);
    expect(container.firstChild).toHaveAttribute("data-notification-type", "default");
    expect(container.firstChild).toHaveTextContent("test");
  });

  it('renders correct html from html="<u>test</u>" props', () => {
    const { container, rerender } = render(<NotificationItem />);

    rerender(<NotificationItem html="<u>test</u>" />);
    expect(container.firstChild).toHaveAttribute("data-urgent", "true");
    expect(container.firstChild.innerHTML).toEqual("<u>test</u>");
  });
});



// import React from "react";
// import NotificationItem from "./NotificationItem";
// import { shallow } from "enzyme";

// describe("rendering components", () => {
//   it("renders NotificationItem component without crashing", () => {
//     const wrapper = shallow(<NotificationItem />);

//     expect(wrapper.exists()).toBe(true);
//   });

//   it('renders correct html from type="default" value="test" props', () => {
//     const wrapper = shallow(<NotificationItem />);

//     wrapper.setProps({ type: "default", value: "test" });
//     expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
//   });

//   it('renders correct html from  html="<u>test</u>" props', () => {
//     const wrapper = shallow(<NotificationItem />);

//     wrapper.setProps({ html: "<u>test</u>" });
//     expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
//   });
// });
