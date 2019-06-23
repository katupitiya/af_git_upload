import React from 'react';
import Add from './routers/Instructor/AddAssignmentDetails';
import { create } from 'react-test-renderer'

describe('My first snapshot test',()=>{
  test('testing app button', () => {
    let tree = create(<Add />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})