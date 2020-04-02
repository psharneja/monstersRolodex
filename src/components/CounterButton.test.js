import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

it("expect render ", () => {
  const mockColoe = "red";
  expect(shallow(<CounterButton color={mockColoe} />)).toMatchSnapshot();
});

it("expect render ", () => {
  const mockColoe = "red";
  const wrapper = shallow(<CounterButton color={mockColoe} />);
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 2 });
  expect(wrapper.props().color).toEqual('red');
});
