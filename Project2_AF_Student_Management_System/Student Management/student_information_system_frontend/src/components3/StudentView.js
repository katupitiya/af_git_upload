import React, { Component } from 'react';
// import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td>{props.user.student_iT}</td>
        <td>{props.user.student_name}</td>
        <td>{props.user.student_address}</td>
        <td>{props.user.student_state}</td>
        <td>{props.user.student_gender}</td>
        <td>{props.user.student_bday}</td>
        <td>{props.user.student_course}</td>
        <td>{props.user.student_email}</td>


        <td>
            <Link to={"/edit/"+props.user._id}>Edit</Link>
        </td>
    </tr>
)

export default class StudentView extends Component {


    constructor(props) {
        super(props);
        this.state = {user: []};
    }
    componentDidMount() {
        axios.get('http://localhost:3000/user/')
            .then(response => {
                this.setState({ user: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

   StudentList() {
        return this.state.user.map(function(currentSt, i){
            return <Todo todo={currentSt} key={i} />;
        })
    }





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


                    <Link to="/updateStudent"> Update Student</Link>&nbsp; &nbsp;
                <Link to="/"> Student Home</Link>


                <div> <h3>Student Profile</h3>
                    <table className="table table-striped" style={{ marginTop: 20 }} >
                        <thead>
                        <tr>
                            <th>IT number
                                <td> IT17023567  </td>

                            </th>

                            <th>Name
                                <td> E.M.Ekanayake </td>
                            </th>

                            <th>Address
                                <td> Malabe  </td></th>
                            <th>State
                                <td> Single </td>
                            </th>
                            <th>Gender
                                <td> Female  </td>
                            </th>
                            <th>Birth Day
                                <td> 20/03/1994 </td>
                            </th>
                            <th>Course
                                <td> Software Engineering </td>
                            </th>
                            <th>Email
                                <td> IT17023567@sliit.lk </td>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.StudentList() }
                        </tbody>
                    </table> </div>
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

        )
    }
}