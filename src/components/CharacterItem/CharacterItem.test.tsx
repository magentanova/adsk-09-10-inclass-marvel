import { shallow } from 'enzyme';
import * as React from 'react';

import CharacterItem from './CharacterItem';

const makeProps = () => {
    return {
        dispatch: () => null,
        id: 456,
        name: "Hero Man",
        selectedCharacterId: 123,
        thumbnail: {
            extension: "png",
            path: "https://picture.com/of/a/dog"
        }
    }
}
  
describe("The CharacterItem component", () => {
    test("should render the props.name in an h2 tag.", () => {
        // Arrange 
        const props = makeProps();

        // Act
        const wrapper = shallow(<CharacterItem {...props} />)

        // Assert 
        expect(wrapper.find('h2').first().text()).toEqual("name: " + props.name);
    })

    test("should render an img tag iff props.id is equal to props.selectedCharacterId", () => {
        // Arrange
        const props = makeProps();
        props.id = props.selectedCharacterId

        // Act
        const wrapper = shallow(<CharacterItem {...props} />)

        // Assert
        // find the image, then read the value of its src attribute
        expect(wrapper.find('img')).toHaveLength(1);
    })

    test("should NOT render an img tag if props.id is NOT equal to props.selectedCharacterId", () => {
        // Arrange
        const props = makeProps();

        // Act
        const wrapper = shallow(<CharacterItem {...props} />)

        // Assert
        // find the image, then read the value of its src attribute
        expect(wrapper.find('img')).toHaveLength(0);
    })

    test("should combine the path and extension to create the src attribuet of an img tag", () => {
        // Arrange
        const props = makeProps();
        props.id = props.selectedCharacterId;

        // Act
        const wrapper = shallow(<CharacterItem {...props} />)

        // Assert
        // find the image, then read the value of its src attribute
        expect(wrapper.find('img').prop("src")).toEqual(props.thumbnail.path + '.' + props.thumbnail.extension)
    })
})  