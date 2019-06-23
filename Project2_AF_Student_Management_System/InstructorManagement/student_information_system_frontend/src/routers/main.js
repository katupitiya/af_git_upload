import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";





import Home from "./InstructorRegistration/InstructorRegistration"
import main1 from "./main/main.css"

export default class main extends Component
{




    render() {
        return (

            <div>



                <header class="header_area">
                    <div class="header-top">
                        <div class="logo">
                            <div className="logohandling">
                            <a href="#" className="text-uppercase"><Link to="/studentLogin">LOGIN</Link></a>
                                <a href="#" className="text-uppercase" className="register"><Link to="/studentRegistration">REGISTER</Link></a>
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
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent" className="st">
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    <li className="nav-item active"><a className="nav-link" href="index.html">Home</a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="about-us.html"><Link to="/mk">ABOUTUS</Link></a></li>



                                    <li className="nav-item"><a className="nav-link" href="contact.html"></a>
                                    </li>




                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>

                <section class="home_banner_area">
                    <div class="banner_inner">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="banner_content">

                                        <p><b>
                                            In the history of modern astronomy, there is probably no one greater leap forward than the building and launch
                                            of
                                            the space telescope known as the Hubble.
                                        </b></p>
                                        <div class="search_course_wrap">
                                            <form action="" class="form_box d-flex justify-content-between w-100">
                                                <input type="text" placeholder="Search Courses" class="form-control" name="username" onfocus="this.placeholder = ''"
                                                       onblur="this.placeholder = 'Search Courses'"/>
                                                    <button type="submit" class="btn search_course_btn">Search</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="feature_area">
                    <div class="container">
                        <div class="row justify-content-end">
                            <div class="col-lg-4">
                                <div class="single_feature d-flex flex-row pb-30">
                                    <div class="icon">
                                        <span class="lnr lnr-book"></span>
                                    </div>
                                    <div class="desc">
                                        <h4>New Classes</h4>
                                        <p>
                                            In the history of modern astronomy, there is probably no one greater leap forward building and launch.
                                        </p>
                                    </div>
                                </div>
                                <div class="single_feature d-flex flex-row pb-30">
                                    <div class="icon">
                                        <span class="fa fa-trophy"></span>
                                    </div>
                                    <div class="desc">
                                        <h4>Top Courses</h4>
                                        <p>
                                            In the history of modern astronomy, there is probably no one greater leap forward building and launch.
                                        </p>
                                    </div>
                                </div>
                                <div class="single_feature d-flex flex-row">
                                    <div class="icon">
                                        <span class="lnr lnr-screen"></span>
                                    </div>
                                    <div class="desc">
                                        <h4>Full E-Books</h4>
                                        <p>
                                            In the history of modern astronomy, there is probably no one greater leap forward building and launch.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>








                <div class="popular_courses lite_bg">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="main_title">
                                    <h2>Popular Courses</h2>
                                    <p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s
                                        exciting to think about setting up your own viewing station.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-lg-3 col-md-6">
                                <div class="single_course">
                                    <div class="course_head overlay">

                                            <div class="authr_meta">

                                                    <span>Mart Taylor</span>
                                            </div>
                                    </div>
                                    <div class="course_content">
                                        <h4>
                                            <a href="course-details.html">Learn React js beginners</a>
                                        </h4>
                                        <p>When television was young, there was a huge popular show based on the still popular fictional character of
                                            Superman.</p>
                                        <div class="course_meta d-flex justify-content-between">
                                            <div>
									<span class="meta_info">
										<a href="#"><i class="lnr lnr-user"></i>355</a>
									</span>
                                                <span class="meta_info">
										<a href="#">
											<i class="lnr lnr-bubble"></i>35
										</a>
									</span>
                                            </div>
                                            <div>
                                                <span class="price">$150</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="single_course">
                                    <div class="course_head overlay">

                                            <div class="authr_meta">

                                                    <span>Mart Taylor</span>
                                            </div>
                                    </div>
                                    <div class="course_content">
                                        <h4>
                                            <a href="course-details.html">Learn React js beginners</a>
                                        </h4>
                                        <p>When television was young, there was a huge popular show based on the still popular fictional character of
                                            Superman.</p>
                                        <div class="course_meta d-flex justify-content-between">
                                            <div>
									<span class="meta_info">
										<a href="#">
											<i class="lnr lnr-user"></i>355
										</a>
									</span>
                                                <span class="meta_info"><a href="#">
											<i class="lnr lnr-bubble"></i>35
										</a></span>
                                            </div>
                                            <div>
                                                <span class="price df_color1">$150</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="single_course">
                                    <div class="course_head overlay">

                                            <div class="authr_meta">

                                                    <span>Mart Taylor</span>
                                            </div>
                                    </div>
                                    <div class="course_content">
                                        <h4>
                                            <a href="course-details.html">Learn React js beginners</a>
                                        </h4>
                                        <p>When television was young, there was a huge popular show based on the still popular fictional character of
                                            Superman.</p>
                                        <div class="course_meta d-flex justify-content-between">
                                            <div>
									<span class="meta_info">
										<a href="#">
											<i class="lnr lnr-user"></i>355
										</a>
									</span>
                                                <span class="meta_info"><a href="#">
											<i class="lnr lnr-bubble"></i>35
										</a></span>
                                            </div>
                                            <div>
                                                <span class="price">$150</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="single_course">
                                    <div class="course_head overlay">

                                            <div class="authr_meta">

                                                    <span>Mart Taylor</span>
                                            </div>
                                    </div>
                                    <div class="course_content">
                                        <h4>
                                            <a href="course-details.html">Learn React js beginners</a>
                                        </h4>
                                        <p>When television was young, there was a huge popular show based on the still popular fictional character of
                                            Superman.</p>
                                        <div class="course_meta d-flex justify-content-between">
                                            <div>
									<span class="meta_info">
										<a href="#">
											<i class="lnr lnr-user"></i>355
										</a>
									</span>
                                                <span class="meta_info"><a href="#">
											<i class="lnr lnr-bubble"></i>35
										</a></span>
                                            </div>
                                            <div>
                                                <span class="price df_color2">$150</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fact_area overlay">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="main_title">
                                    <h2><b>Facts that Make us Unique</b></h2>
                                    <p><b>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s
                                        exciting to think about setting up your own viewing station.</b></p>
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-lg-4 col-md-6">
                                <div class="single_fact">
                                    <div class="f_icon">

                                    </div>
                                    <h4><b>Expert Mentors</b></h4>
                                    <p><b>Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore dolor sit
                                        amet consec tetur adipisicing elit, sed do eiusmod tempor sed do eiusmod tempor incididunt labore dolor sit amet
                                        consec tetur adipisicing elit, seddo eiusmod tempor.</b></p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single_fact">
                                    <div class="f_icon">

                                    </div>
                                    <h4><b>25000+ Courses</b></h4>
                                    <p><b>Lorem ipsum dolor sit amet consec tetur adipis icing elit, sed do eiusmod tempor incididunt labore dolor sit
                                        amet consec.</b></p>
                                </div>
                            </div>


                            <div class="col-lg-4 col-md-6">
                                <div class="single_fact">
                                    <div class="f_icon">

                                    </div>
                                    <h4><b>Student Membership</b></h4>
                                    <p><b>Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore dolor sit
                                        amet consec tetur adipisicing elit, sed do eiusmod tempor sed do eiusmod tempor incididunt labore dolor sit amet
                                        consec tetur adipisicing elit, seddo eiusmod tempor.</b></p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single_fact">
                                    <div class="f_icon">

                                    </div>
                                    <h4><b>Lifetime Access</b></h4>
                                    <p><b>Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore dolor sit
                                        amet consec tetur adipisicing elit sed do eiusmod.</b></p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single_fact">
                                    <div class="f_icon">

                                    </div>
                                    <h4><b>Source File Included</b></h4>
                                    <p><b>Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore dolor sit
                                        amet consec tetur adipisicing elit sed do eiusmod.</b></p>
                                </div>
                            </div>


                            <div class="col-lg-4 col-md-6">
                                <div class="single_fact">
                                    <div class="f_icon">

                                    </div>
                                    <h4><b>Live Support</b></h4>
                                    <p><b>Lorem ipsum dolor sit amet consec tetur adipis icing elit, sed do eiusmod tempor incididunt labore dolor sit
                                        amet consec.</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <footer class="com">
                    <div class="cont">
                        <div class="footerdiv"></div>

                        <div class="row footer-bottom d-flex justify-content-between">
                            <p class="col-lg-8 col-sm-12 footer-text m-0 text-white">Copyright © 2018 All rights reserved <i class="fa fa-heart-o" aria-hidden="true"></i> <a href="#"></a></p>
                            <div className="col-lg-4 col-sm-12 footer-social">

                                <p className="mail1">jananisaradha@gmail.com</p>              <p className="mail1">   072-4050478</p>
                            </div>
                        </div>
                    </div>
                </footer>



            </div>

        )
    }


}
