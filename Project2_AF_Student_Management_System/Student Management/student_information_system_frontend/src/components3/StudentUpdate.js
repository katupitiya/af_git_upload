import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import axios from 'axios';

export default class StudentUpdate extends Component {

    constructor(props) {
        super(props);

        this.onChangeStudentIT = this.onChangeStudentIT.bind(this);
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentAddress = this.onChangeStudentAddress.bind(this);
        this.onChangeStudentGender = this.onChangeStudentGender.bind(this);
        this.onChangeStudentState = this.onChangeStudentState.bind(this);
        this.onChangeStudentBday = this.onChangeStudentBday .bind(this);
        this.onChangeStudentCourse = this.onChangeStudentCourse.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail .bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            student_iT: '',
            student_name: '',
            student_address: '',
            student_state:'',
            student_gender:'',
            student_bday:'',
            student_course:'',
            student_email:'',

            // todo_completed: false
        }
    };


    componentDidMount() {
        axios.get('http://localhost:5000/user/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    student_iT: response.data.student_iT,
                    student_name: response.data.student_name,
                    student_address: response.data. student_address,
                    student_state: response.data.student_state,
                    student_gender: response.data.student_gender,
                    student_bday: response.data.student_bday,
                    student_course: response.data.student_course,
                    student_email: response.data.student_email,


                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeStudentIT(e) {
        this.setState({
            student_iT: e.target.value
        });
    }

    onChangeStudentName(e) {
        this.setState({
            student_name: e.target.value
        });
    }

    onChangeStudentAddress(e) {
        this.setState({
            student_address: e.target.value
        });
    }

    onChangeStudentGender(e) {
        this.setState({
            student_gender: e.target.value
        });
    }

    onChangeStudentState(e) {
        this.setState({
            student_state: e.target.value
        });
    }
    onChangeStudentBday(e) {
        this.setState({
            student_bday: e.target.value
        });
    }
    onChangeStudentCourse(e) {
        this.setState({
            student_course: e.target.value
        });
    }
    onChangeStudentEmail(e) {
        this.setState({
            student_email: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            student_iT: this.state.student_iT,
            student_name: this.state.student_name,
            student_address: this.state.student_address,
            student_gender: this.state.student_gender,
            student_state: this.state.student_state,
            student_bday: this.state.student_bday,
            student_course: this.state.student_course,
            student_email: this.state.student_email

        };
        console.log(obj);
        axios.post('http://localhost:3000/todos/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/view');
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
                <Link to="/view"> View Student</Link>&nbsp; &nbsp;
                <Link to="/">Student Home</Link>


                <div>
                    <h3 align="center">Update Student Details</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>IT Number: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.student_iT}
                                    onChange={this.onChangeStudentIT}
                            />
                        </div>
                        <div className="form-group">
                            <label>Name: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.student_name}
                                onChange={this.onChangeStudentName}
                            />
                        </div>

                        <div className="form-group">
                            <label>Address: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.student_address}
                                onChange={this.onChangeStudentAddress}
                            />
                        </div>

                        <div className="form-group">
                            <label>State: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.student_state}
                                onChange={this.onChangeStudentState}
                            />
                        </div>

                        <div className="form-group">
                            <label>Birth Day: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.student_bday}
                                onChange={this.onChangeStudentBday}
                            />
                        </div>
                        <div className="form-group">
                            <label>Course: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.student_course}
                                onChange={this.onChangeStudentCourse}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.student_email}
                                onChange={this.onChangeStudentEmail}
                            />
                        </div>


                        <br />

                        <div className="form-group">
                            <input type="submit" value="Update Todo" className="btn btn-primary" />
                        </div>
                    </form>

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
            </div>
        )
    }
}