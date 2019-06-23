import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";


import { Button} from 'reactstrap';


import Home from "./InstructorRegistration/InstructorRegistration"
import main1 from "./main/main2.css"


export default class main2 extends Component
{




    render() {
        return (

            <div>



                <header class="header_area">
                    <div class="header-top">
                        <div class="logo">
                            <div className="logohandling">


                            </div>


                        </div>
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-sm-6 col-4 header-top-left">

                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="main_menu">


                        <nav class="navbar navbar-expand-lg navbar-light">
                            <div class="container">

                                <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""/></a>



                            </div>

                        </nav>
                    </div>
                </header>
                <div className="row1"></div>
                <div className="row">

                    <div className="column" >

                        <Button className="btn"></Button>
                        <p><Link to="/Admin" className="link1" ><b className="login">Admin Login</b></Link></p>

                    </div>
                    <div className="column">

                        <Button className="btn1"></Button>
                        <Link to="/InstuctorLogin" className="link1" ><b className="login">Instructor Login</b></Link>

                    </div>
                    <div className="column">

                        <Button className="btn2"></Button>
                        <Link to="/studentLogin" className="link1" ><b className="login">Student Login</b></Link>

                    </div>
                </div>






                <div className="ff"></div>


            <div className="com1">
                <div className="footerdiv1"></div>
            <div className="cont">
                <div className="footerdiv2"></div>
                <div className="row footer-bottom d-flex justify-content-between">
                    <p className="col-lg-8 col-sm-12 footer-text m-0 text-white" >Copyright © 2018 All
                        rights reserved <i className="fa fa-heart-o" aria-hidden="true"></i> <a
                            href="#"></a></p>

                    <div className="col-lg-4 col-sm-12 footer-social">

                        <p className="mail1">jananisaradha@gmail.com</p>              <p
                        className="mail1"> 072-4050478</p>
                    </div>
                </div>
            </div>
            </div>


            </div>

        )
    }


}
