import {BrowserRouter,Route} from "react-router-dom";

import React from "react";

import Home from "./InstructorRegistration/InstructorRegistration";
import main2 from  "./main2";
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
import ViewCourse from "./AdminManagment/ViewCourse"
import UpdateCourse from "./AdminManagment/UpdateCourse"
import  UpdateInstructor from "./AdminManagment/UpdateInstructor"
import ViewInstructor from "./AdminManagment/ViewInstructor"
import StudentHome from "./StudentHome"

import SoftwereEng1 from "./StudentManagment/Engineering1"

export default ()=>(
    <BrowserRouter>
        <switch>

            <Route exact path="/main2"   component={main2}/>
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
            <Route  path="/UpdateInstructor/:id"   component={UpdateInstructor}/>
            <Route  path="/UpdateCourse/:id"   component={UpdateCourse}/>
            <Route  path="/StudentHome"  component={StudentHome}/>
            <Route  path="/ViewInstructor"   component={ViewInstructor}/>
            <Route  path="/Addcourse"   component={Addcourse}/>
            <Route  path="/ViewCourse"   component={ViewCourse}/>
            <Route  path="/UpdateCourse/:id"   component={UpdateCourse}/>
            <Route  path="/en1"   component={SoftwereEng1}/>

        </switch>

    </BrowserRouter>);
