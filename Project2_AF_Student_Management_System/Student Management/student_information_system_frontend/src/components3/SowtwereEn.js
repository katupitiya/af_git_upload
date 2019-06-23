import React ,{Component} from 'react';
// import './studentHome.css';
import "bootstrap/dist/css/bootstrap.min.css";
import bk1 from '../images/bk1.jpg';
import FileUpload from '../components2/tt1';
import lec1 from '../images/lec1.jpg';
import lec2 from '../images/lec2.jpg';
import asil from  '../images/asi1.png';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';


export default class SoftwareEng1 extends Component{



    render() {



        return(

            <div >
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

                {/*<div className="backgroundIMG">*/}
                <div class="container"  >
                    <div class="panel panel-default">
                        <div class="panel-heading">


                            <h1 class="panel-title">Dash Board  </h1>&nbsp; &nbsp;
                            <Link to="/"> Student Home</Link>
                            <h3  text color="#123a7a"> Software Engineering</h3>

                            <div class="panel-body">
                                <Router>
                                    <table class="table table-stripe"   >
                                        <thead ><h1  color="blue">
                                            <tr ><td  >April 1st week -Lecture 1</td>
                                                {/*<td  > Semester</td>*/}
                                            </tr></h1>
                                        </thead>
                                        <tbody ><tr ><td ><img src={lec1} alt="lec1" width="40px" height="40px"/><Link to={`/uploadAssignment`}> Assignment 1</Link></td></tr>
                                        {/*<tr ><td >    corse</td><td>month</td></tr>*/}
                                        </tbody>
                                        <thead  ><h1>
                                            <tr><td color="#4286f4">April 2nd week -Lecture 2</td>
                                                {/*<td  > Semester</td>*/}
                                            </tr></h1>
                                        </thead>
                                        <tbody ><tr ><td  ><img src={asil} alt="asil"  width="40px" height="40px" /><Link to={`/uploadAssignment`}> Assignment 2</Link></td></tr>
                                        {/*<tr ><td >corse</td><td>month</td></tr>*/}
                                        </tbody>
                                        <thead ><h1  color="blue">
                                            <tr ><td  >April 3rd week -Lecture 3</td>

                                            </tr></h1>
                                        </thead>
                                        <tbody ><tr ><td ><img src={lec1} alt="lec1"  width="40px" height="40px" /><Link to={`/uploadAssignment`}> Assignment 3</Link></td></tr>

                                        </tbody>

                                        <thead ><h1  color="blue">
                                            <tr ><td  >April 4th week -Lecture 4</td>

                                            </tr></h1>
                                        </thead>
                                        <tbody ><tr ><td ><img src={lec2} alt="lec2" width="40px" height="40px" /><Link to={`/uploadAssignment`}> Assignment 4</Link></td></tr>

                                        </tbody>



                                    </table>
                                </Router>
                            </div>
                        </div>
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
            // </div>


        );
    }

}