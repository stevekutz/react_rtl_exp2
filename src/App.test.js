import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';

import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';

afterEach(rtl.cleanup);
// import { getByLabelText} from '@testing-library/react';
import {render, getByLabelText} from '@testing-library/react';  // import single export >> render
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
     console.log(simulatedDOM.debug());
  })

  it('2) it renders using single import {render} from @testing-library/react', () => {
    const tDOM = render(<App/>);
    console.log('tDOM is ', tDOM);

  })

  it('3) renders using ALL exports * from TL from @tesing-library/react', () => {
    const tDOM = TL.render(<App />);
  })

  it('4) verfies Lorem text exists using getByText', () => {
    const testDOM = rtl.render(<App/>);
    const latinLorem = testDOM.getByText(/orem/i)
    expect(latinLorem).toBeInTheDocument();
  })
/*
  // THIS DOES NOT WORK to find when element NOT part of DOM
  it('verfies Lorem text exists using getByText', () => {
    const testDOM = rtl.render(<App/>);
    const latinLorem = testDOM.getByText(/nope/i)   // ( / orem/i) also fails !!!
    expect(latinLorem).not.toBeInTheDocument();
  })
*/
  // THIS WORKS to find when an element is NOT part of DOM
  it('5) verfies Lorem text exists using getByText', () => {
    const testDOM = rtl.render(<App/>);
    const latinLorem = testDOM.queryByText(/nope/i)
    expect(latinLorem).not.toBeInTheDocument();
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
    const latinLorem = testDOM.getByText(/orem/i)
    expect(latinLorem).toBeInTheDocument();
  })

})

it('9) verifies Lorem exists using getByLabelText', () => {
  //const {getByLabelText} = renderIntoDocument(<label />)
  
  const testDOM = rtl.render(<App/>);
  
  const labelText  = getByLabelText(testDOM.container, 'Username');

})  

/*  Autogenerated
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/