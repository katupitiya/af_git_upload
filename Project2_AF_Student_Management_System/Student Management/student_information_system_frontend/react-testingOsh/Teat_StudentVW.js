import React from 'react';
import {create} from 'react-test-renderer';
import StudentView from '../react-testingOsh';

describe("StudentView component",()=>{

    it("shows Details of a student",async ()=>{

        const component=create (<StudentView/>);
        const instance =component.getInstance();
        await instance.componentDidMount();
        console.log(instance.state)
    });

});