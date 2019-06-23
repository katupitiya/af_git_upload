import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import './main.css';


export default  class HomeS extends Component{

    render() {
        return (
            <div>
                <header className="header_area">
                    <div className="header-top">
                        <div className="logo">
                            <div className="logohandling">
                                <a href="#" className="text-uppercase"><Link to="/studentLogin">LOGIN</Link></a>
                                <a href="#" className="text-uppercase" className="register"><Link
                                    to="/studentRegistration">REGISTER</Link></a>
                            </div>


                        </div>
                        <div >
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-4 header-top-left">

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="main_menu">


                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container">

                                <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png"
                                                                                          alt=""/></a>


                            </div>
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent" className="st">
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    <li className="nav-item active"><a className="nav-link" href="index.html">Home</a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="about-us.html"><Link
                                        to="/mk">ABOUTUS</Link></a></li>



                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>

                <div>
                <h1>Courses</h1>
                <Link to="/updateStudent">Update Profile</Link>&nbsp; &nbsp;
                {/*<Link to="/" >Home</Link>*/}
                <h3 >Software Engineering</h3>
                <ul>
              <li>
                  <a> <Link to="se1">Year 1</Link></a></li>
                  <li> <a><Link to="se2">Year 2</Link></a></li>
                    <li>  <a><Link to="se3">Year 3</Link></a></li>
                    <li>  <a> <Link to="se4">Year 4</Link></a></li>

              </ul>

                <h3>Engineering</h3>
                <ul>
                    <li>
                        <a> <Link to="en1">Year 1</Link></a></li>
                    <li> <a><Link to="en2">Year 2</Link></a></li>
                    <li>  <a><Link to="en3">Year 3</Link></a></li>
                    <li>  <a> <Link to="en4">Year 4</Link></a></li>


                </ul>

                 <div  className="container"><div > </div>



                 </div>
            </div>
                <footer className="com">
                    <div className="cont">

                        <div className="row footer-bottom d-flex justify-content-between">
                            <p className="col-lg-8 col-sm-12 footer-text m-0 text-white">
                                <i className="fa fa-heart-o" aria-hidden="true"></i> <a
                                    href="#"></a></p>

                        </div>
                    </div>
                </footer>

            </div>
        );
    }

}
