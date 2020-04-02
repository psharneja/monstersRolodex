import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots:[],
    searchField:'',
    isPending:false
  }
  wrapper = shallow(<MainPage { ...mockProps} />)
})

it('filter robots', () => {
  expect(wrapper.instance().filterRobots()).toEqual([]);
})

it('filter robots 2a', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots:[{
      id: 3,
      name:'john',
      email:'john@email.com'
    }],
    searchField:'j',
    isPending:false
  }
  const wrapper2 = shallow(<MainPage { ...mockProps2} />)
  
  // expect(wrapper2.instance().filterRobots()).toEqual([]);
  expect(wrapper2.instance().filterRobots()).toEqual([{
    id: 3,
    name:'john',
    email:'john@email.com'
  }]);
})
it('filter robots 2', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots:[{
      id: 3,
      name:'john',
      email:'john@email.com'
    }],
    searchField:'a',
    isPending:false
  }
  const wrapper2 = shallow(<MainPage { ...mockProps2} />)
  
  expect(wrapper2.instance().filterRobots()).toEqual([]);
  // expect(wrapper2.instance().filterRobots()).toEqual([{
  //   id: 3,
  //   name:'john',
  //   email:'john@email.com'
  // }]);
})
