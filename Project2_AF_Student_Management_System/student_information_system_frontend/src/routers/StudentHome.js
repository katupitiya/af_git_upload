import React,{Component} from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";


export default  class StudentHome extends Component{

    render() {
        return (
            <div><h1>Courses</h1>

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

                <div  ><div > </div>



                </div>
            </div>
        );
    }

}
