import { shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render card', () => {
    const mockRobots = [{
        id:1,
        name:'John Snow',
        username:'johnjohn',
        email:'john@email.com'
    }]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot()
})