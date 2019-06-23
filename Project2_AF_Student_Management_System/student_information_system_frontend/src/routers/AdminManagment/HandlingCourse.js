import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";





import Home from "../InstructorRegistration/InstructorRegistration"

import img1 from "../../images/bg-01.jpg"

import AdminRegistration from "../AdminRegistration/AdminRegistration";
import studentLogin from "../studentLogin/studentLogin";
import Admin from "./AdminManagment.css";
export default class HandlingCourse extends Component
{



    render() {
        return (

            <div>
                <div className="header-top">
                    <div className="logo">
                        <div className="logohandling">

                        </div>


                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-6 col-4 header-top-left">

                            </div>

                        </div>
                    </div>
                </div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <form className="login100-form8 validate-form">
					<span className="login100-form-title p-b-34">
						Handling Course
					</span>


                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        <Link to="/Addcourse">Create Course</Link>
                                    </button>
                                </div>

                                <div className="container-login100-form-btn" className="dd">
                                    <button className="login100-form-btn">
                                        <Link to="/ViewCourse"> Manage Course</Link>
                                    </button>
                                </div>


                                <div className="w-full text-center p-t-27 p-b-239">
						<span className="txt1">

						</span>


                                    <br/><br/>
                                    <div className="w-full text-center">


                                    </div>
                                </div>


                            </form>

                            <div className="login100-more4"></div>
                        </div>
                    </div>
                </div>

                <footer className="com">
                    <div className="cont">

                        <div className="footerdiv"></div>

                        <div className="row footer-bottom d-flex justify-content-between">
                            <p className="col-lg-8 col-sm-12 footer-text m-0 text-white">Copyright © 2018 All rights
                                reserved <i className="fa fa-heart-o" aria-hidden="true"></i> <a href="#"></a></p>
                            <div className="col-lg-4 col-sm-12 footer-social">

                                <p className="mail1">jananisaradha@gmail.com</p>              <p
                                className="mail1"> 072-4050478</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>


        );
    }


}
