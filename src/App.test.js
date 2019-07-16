import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';


import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(rtl.cleanup);
// import { getByLabelText} from '@testing-library/react';
import {render, getByLabelText, fireEvent} from '@testing-library/react';  // import single export >> render
import *  as TL from '@testing-library/react'; //  use namespace  TL to import ALL exports

// Started with testing render
describe('1) it renders App to allow testing components', () => {
  it('it mounts a simulated DOM', () => {
    const simulatedDOM = rtl.render(<App/>);
    const container = document.body;

  //  console.log('simulatedDOM is ', simulatedDOM);
  //  console.log('container is ', container);  
  //   console.log('getLabelByText is', getByLabelText);
    //console.log('simulatedDOM with debug is ', simulatedDOM.debug());
     // console.log(simulatedDOM.debug());
  })

  it('2) it renders using single import {render} from @testing-library/react', () => {
    const tDOM = render(<App/>);
    // console.log('tDOM is ', tDOM);

  })

  it('3) renders using ALL exports * from TL from @tesing-library/react', () => {
    const tDOM = TL.render(<App />);
  })

  it('4) verfies Lorem text exists using getByText', () => {
    const testDOM = rtl.render(<App/>);
    const reactText = testDOM.getByText(/React/i)
    expect(reactText).toBeInTheDocument();
  })
/*
  // THIS DOES NOT WORK to find when element NOT part of DOM
  it('verfies Lorem text exists using getByText', () => {
    const testDOM = rtl.render(<App/>);
    const reactText = testDOM.getByText(/nope/i)   // ( / eact/i) also fails !!!
    expect(reactText).not.toBeInTheDocument();
  })
*/
  // THIS WORKS to find when an element is NOT part of DOM
  it('5) verfies Lorem text exists using getByText', () => {
    const testDOM = rtl.render(<App/>);
    const notPresentText = testDOM.queryByText(/nope/i)
    expect(notPresentText).not.toBeInTheDocument();
  })

  it('6) verifies Kitt text exists', () => {
    const wrapper = rtl.render(<App/>);
    const hasKittensText = wrapper.queryByText(/Kitt/i);
    expect(hasKittensText).toBeInTheDocument();
  })

  it('7) verifies entire Kitten string is in the Document', () => {
    const testDOM = rtl.render(<App/>);
    const testString = 'All about Kittens';
    const hasEntireKittenString = testDOM.queryByText(testString);
    expect(hasEntireKittenString).toBeInTheDocument();
  //  console.log(' will be null when fails', hasEntireKittenString);
  })

  it('8) verfies Lorem text exists using getByText', () => {
    const testDOM = rtl.render(<App/>);
    const reactText = testDOM.getByText(/eact/i)
    expect(reactText).toBeInTheDocument();
  })

})

it('9) verifies label Username exists using getByLabelText', () => {
  //const {getByLabelText} = renderIntoDocument(<label />)
  
  const testDOM = rtl.render(<App/>);
  // <label htmlFor="username">Username</label>   NOT for = 
  const labelText  = getByLabelText(testDOM.container, 'Username');
  //console.log('labelTest is >>>>>>>', labelText);
  expect(labelText).toBeTruthy(); // jest matcher
  expect(labelText).toBeInTheDocument(); // jest-dom matcher
  expect(labelText).toBeVisible(); // jest-dom matcher
})  
/*
it('10) it expects label NOPE to NOT exist using getByLabelText & BREAK TEST', () => {
  const testDOM = TL.render(<App/>);
  const labelText = getByLabelText(testDOM.container, 'NOPE');
  //console.log('labelText is ######  ', labelText);
  expect(labelText).not.toBeTruthy();
  expect(labelText).not.toBeInTheDocument();
  expect(labelText).not.toBeVisible();
}) 
*/
it('11) it expects  alt text userInfo to exist in input tag using getByAltText', () => {
  const testDOM = TL.render(<App/>);
  const altText = TL.getByAltText(testDOM.container, 'userInfo');
  // console.log('altText is ######  ', altText);
  expect(altText).toBeTruthy();
  expect(altText).toBeInTheDocument();
  expect(altText).toBeVisible();
}) 

it('12) expects label fullName to exist in form uing getByLabelText', () => {
 // const {getByLabelText} = TL.render(<App/>);
 // WATCH FOR SPACES IN search text
  const testDOM = TL.render(<App/>);
  const fullName_Label = getByLabelText(TL.render(<App/>).container, 'Enter your name:');

  expect(fullName_Label).toBeTruthy();

})

it('13 it expects to find email text', () => {
  const testDOM = TL.render(<App/>);
  expect(testDOM.getByText(/email/));

})


it('14 should demonstrate snapshot of <App /> with renderer passing', () => {
  const tree = renderer.create(<App/>).toJSON();
  console.log('tree is JSON ized as ', tree);
  console.log('tree.props.prop is ', tree.props.prop);
  console.log('tree.children[0].type', tree.children[0].type);

  expect(tree).toMatchSnapshot();

})

it(`14a) it should snapshot the form`, () => {
  const formTree = renderer.create(<form/>).toJSON();
  console.log('formTree is ', formTree);

  expect(formTree).toMatchSnapshot();
})

it(`15) should mock an empty function`, () => {
  const mockFunc = jest.fn();
  console.log('mockFunc is ', mockFunc);
  expect(mockFunc()).toBeUndefined();
  expect(mockFunc).toHaveBeenCalled();
  expect(mockFunc).toHaveBeenCalledTimes(1);
  //expect(mockFunc).toHaveBeenCalledTimes(2); // FAILS 
  expect(mockFunc).not.toHaveBeenCalledTimes(2);

})
it('16) mock receives param and returns string', () => {
  const mock  = jest.fn(() => 'hello' );
  const result = mock('something');
  expect(result).toBe('hello');
  expect(mock).toHaveBeenCalledWith('something');
  
 expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
//   expect(mock()).toHaveBeenCalledTimes(2);  // FAILS
  mock();
  expect(mock).toHaveBeenCalledTimes(2);
  expect(mock).not.toHaveBeenCalledWith(1000);
})

it('should update the message dynamically', () => {
  const {getByText, queryByText} = render(<App />);

  // we expect to see this string
  getByText(/nothing to say yet/);

  // we DO NOT expect to see this string
  expect(queryByText(/speak has been called !!!/)).toBeFalsy();
  // queryByText(/speak/).not.toBeTruthy(); // will FAIL
  expect(queryByText(/speak has been called !!!/)).not.toBeTruthy();
  expect(queryByText(/speak has been called !!!/)).toBeNull();

  // we fire Speak button
  const button = getByText(/Speak/);
  fireEvent.click(button);
  expect(queryByText(/speak has been called !!!/)).toBeTruthy();



})

it('mock recieves param and returns string', () => {
  const mock  = jest.fn(() => 'hello' );
  const result = mock('something');
  expect(result).toBe('hello');
  expect(mock).toHaveBeenCalledWith('something');
  
 expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
//   expect(mock()).toHaveBeenCalledTimes(2);  // FAILS
  mock();
  expect(mock).toHaveBeenCalledTimes(2);
  expect(mock).not.toHaveBeenCalledWith(1000);
})

/*  Autogenerated
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/