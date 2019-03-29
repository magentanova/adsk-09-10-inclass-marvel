import React from 'react';
import { shallow } from 'enzyme';

import { BareCharacter } from './character';

const testProps = {
    name: "test-name", 
    thumbnail: {
        path: "https://placehold.it/300",
        extension: "jpg"
    },
    description: "test-description"
}

it(`Should render the value of the name prop 
    inside of a div with class "character-label"`, () => {
    
    // Arrange 
    const wrapper = shallow(<BareCharacter 
        {...testProps}
        />)

    // Act

    // Assert
    expect(wrapper.find("div.character-label").first().text()).toContain(testProps.name);
})

it(`Should start off with the "hidden" class on its character-expansion card`, () => {
    
    // Arrange 
    const wrapper = shallow(<BareCharacter 
        {...testProps}
        />)

    // Act

    // Assert
    expect(wrapper.find("div.character-expansion").first().hasClass("hidden")).toBeTruthy();
})

it(`Should not have the "hidden" class on its character-expansion card after being clicked`, () => {
    
    // Arrange 
    const wrapper = shallow(<BareCharacter 
        {...testProps}
        />)

    // Act
    wrapper.find(".character-label button").simulate('click');

    // Assert
    expect(wrapper.find("div.character-expansion").first().hasClass("hidden")).toBeFalsy();
})