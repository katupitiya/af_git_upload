import {BrowserRouter,Route} from "react-router-dom";

import React from "react";

import Home from "./InstructorRegistration/InstructorRegistration";
import kio from  "./kio";
import main from "./main";
import AdminLogin from "./AdminLogin/AdminLogin";

import studentlogin from "./studentLogin/studentLogin";
import InstuctorLogin from"./InstructorLogin/InstructorLogin"
import InstrucorRegistration from  "./InstructorRegistration/InstructorRegistration"
import AdminRegistration from "./AdminRegistration/AdminRegistration"
import studentRegistration from "./StudentRegistration/StudentRegistration"
import AdminManagment from "./AdminManagment/AdminManagment"
import HandlingInstructor from "./AdminManagment/HandlingInstructor"
import HandlingCourse from "./AdminManagment/HandlingCourse"
import   Addcourse from "./AdminManagment/Addcourse"

export default ()=>(
    <BrowserRouter>
        <switch>

            <Route path="/mk"   component={kio}/>
            <Route exact path="/"   component={main}/>
            <Route  path="/Home"   component={Home}/>
            <Route  path="/Admin"   component={AdminLogin}/>
            <Route  path="/InstuctorLogin"   component={InstuctorLogin}/>
            <Route  path="/studentLogin"   component={studentlogin}/>
            <Route  path="/studentRegistration"   component={studentRegistration}/>
            <Route  path="/InstrucorRegistration"   component={InstrucorRegistration}/>
            <Route  path="/AdminRegistration"   component={AdminRegistration}/>
            <Route  path="/AdminManagment"   component={AdminManagment}/>
            <Route  path="/AdminLogin"   component={AdminLogin}/>
            <Route  path="/HandlingInstructor"   component={HandlingInstructor}/>
            <Route  path="/HandlingCourse"   component={HandlingCourse}/>

            <Route  path="/Addcourse"   component={Addcourse}/>

        </switch>

    </BrowserRouter>);
