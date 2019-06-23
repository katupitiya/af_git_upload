import React ,{Component} from 'react';
import './studentHome.css';
import "bootstrap/dist/css/bootstrap.min.css";
import bk1 from '../images/bk1.jpg';
import FileUpload from '../components2/tt1';
import lec1 from '../images/lec1.jpg';
import lec2 from '../images/lec2.jpg';
import asil from  '../images/asi1.png';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';


export default class StudentHome extends Component{



    render() {



        return(

            <div >

                <ul className="navigation">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>

                </ul>
                {/*<div className="backgroundIMG">*/}
                <div class="container"  >
                    <div class="panel panel-default">
                        <div class="panel-heading">


                            <h1 class="panel-title">Dash Board  </h1>
                            <h3  text color="#123a7a"> Software Enginnering</h3>

                            <div class="panel-body">
                                <Router>
                                    <table class="table table-stripe"   >
                                        <thead ><h1  color="blue">
                                            <tr ><td  >April 1st week</td>
                                                {/*<td  > Semester</td>*/}
                                            </tr></h1>
                                        </thead>
                                        <tbody ><tr ><td ><img src={lec1} alt="lec1" width="40px" height="40px"/><Link to={`/assignmentUp`}> Assignment 1</Link></td></tr>
                                        {/*<tr ><td >    corse</td><td>month</td></tr>*/}
                                        </tbody>
                                        <thead  ><h1>
                                            <tr><td color="#4286f4">April 2nd week</td>
                                                {/*<td  > Semester</td>*/}
                                            </tr></h1>
                                        </thead>
                                        <tbody ><tr ><td  ><img src={asil} alt="asil"  width="40px" height="40px" /><Link to="/assignmentUp"> Assignment 2</Link></td></tr>
                                        {/*<tr ><td >corse</td><td>month</td></tr>*/}
                                        </tbody>
                                        <thead ><h1  color="blue">
                                            <tr ><td  >April 3rd week</td>

                                            </tr></h1>
                                        </thead>
                                        <tbody ><tr ><td ><img src={lec1} alt="lec1"  width="40px" height="40px" /><Link to="/assignmentUp"> Assignment 3</Link></td></tr>

                                        </tbody>

                                        <thead ><h1  color="blue">
                                            <tr ><td  >April 4th week</td>

                                            </tr></h1>
                                        </thead>
                                        <tbody ><tr ><td ><img src={lec2} alt="lec2" width="40px" height="40px" /><Link to="/assignmentUp"> Assignment 4</Link></td></tr>

                                        </tbody>



                                    </table>
                                </Router>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            // </div>


        );
    }

}