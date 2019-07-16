import React from 'react';
import renderer from 'react-test-renderer';

import Speaker from './Speaker';
import {render, fireEvent} from '@testing-library/react';

import '@testing-library/react/cleanup-after-each';

describe(`<Speaker /> handles some props for testing !!`, () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Speaker/>);
    
        expect(tree.toJSON()).toMatchSnapshot();
    })

    it('matches snapshot with props', () => {
        const tree = renderer.create(<Speaker message = {'hello Prop'}/>);
    
        expect(tree.toJSON()).toMatchSnapshot();
    })

    it('matches snapshot with different props', () => {
        const tree = renderer.create(<Speaker message = {'hello AGAIN Prop'}/>);
    
        expect(tree.toJSON()).toMatchSnapshot();
    })

    it(`should call speak on button click, is onClick set up correctly`, () => {
        // our mock function,  !!
        // does not do anything BUT shows that a function was called
        const speak = jest.fn();
        
        const {getByText} = render(<Speaker speak = {speak}/>);

        const button = getByText(/Speak/);

        fireEvent.click(button);

        expect(speak).toHaveBeenCalled();
        expect(speak).toHaveBeenCalledTimes(1);
    })

    it('should display  message', () => {
        const {getByText} = render(<Speaker message = "something"/>);
        getByText(/something/);
        getByText("something");

    });
} )