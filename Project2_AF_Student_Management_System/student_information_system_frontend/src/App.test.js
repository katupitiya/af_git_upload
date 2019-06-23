import React from 'react';
import II from './routers/InstructorRegistration/InstructorRegistration';
import addcourse from './routers/AdminManagment/Addcourse'
import { create } from 'react-test-renderer'

describe('My first snapshot test2',()=>{
  test('testing app button', () => {
    let tree = create(<II />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})
