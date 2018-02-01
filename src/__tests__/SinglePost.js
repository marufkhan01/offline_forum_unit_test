import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';


import SinglePost from '../components/SinglePost';




it('SinglePost component should render as expected',() =>{
    const component = shallow(<SinglePost />);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
});