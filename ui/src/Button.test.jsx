import React from 'react';
import renderer from 'react-test-renderer';
import {Button} from "./Button";

jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('Button', () => {
  test('Snapshot and onClick', () => {
    const component = renderer.create(
        <Button name="Press Me" />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onClick();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
