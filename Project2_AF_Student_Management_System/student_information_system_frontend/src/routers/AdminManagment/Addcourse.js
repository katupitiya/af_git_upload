import React,{Component} from 'react';

import axios from 'axios';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

class Addcourse extends Component {

    constructor(props)
    {
        super(props);

        this.updatecoursename=this.updatecoursename.bind(this);
        this.updatemodulename=this.updatemodulename.bind(this);
        this.updatemoduleid=this.updatemoduleid.bind(this);
        this.updateinstructorid=this.updateinstructorid.bind(this)
        this.updatefee=this.updatefee.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={

            coursename:'',
            modulename:'',
            moduleid:'',
            instructorid:'',
            fee:'',


        }}

    updatecoursename(e)
    {
        this.setState({ coursename:e.target.value});

    }


    updatemodulename(e)
    {
        this.setState({ modulename:e.target.value});

    }
    updatemoduleid(e)
    {
        this.setState({ moduleid:e.target.value});

    }
    updateinstructorid(e)
    {
        this.setState({instructorid:e.target.value});

    }
    updatefee(e)
    {
        this.setState({fee:e.target.value});

    }


    onSubmit(e)
    {

        const meo={
            coursename:this.state.coursename,
            modulename:this.state.modulename,
            moduleid:this.state.moduleid,
            instructorid:this.state.instructorid,
            fee:this.state.fee,

        }
        axios.post('http://localhost:5000/course/addcourse',meo).then(res=>console.log(res.data));
        this.setState({

            coursename:'',
            modulename:'',
            moduleid:'',
            instructorid:'',
            fee:'',


        })
        this.props.history.push('/HandlingCourse')

    }
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
                            <form className="login100-form validate-form" onSubmit={this.onSubmit}>
					<span className="login100-form-title p-b-34">
						Add Modules
					</span>

                                <div className="wrap-input100 ">
                                    <select id="first-name" className="down" placeholder="Course Name"
                                            value={this.state.coursename}
                                            onChange={this.updatecoursename}>
                                        <option value="Course name">Select Course</option>
                                        <option value="Information Technology"> Information Technology</option>
                                        <option value=" Computer Systems & Network">Computer Systems & Network</option>
                                        <option value="Software Engineering">Software Engineering</option>
                                        <option value=" Information Systems Engineering">Information Systems Engineering</option>
                                        <option value=" Cyber Security"> Cyber Security</option>
                                        <option value="Interactive Media">Interactive Media</option>
                                        <option value="Data Science">Data Science</option>
                                    </select>

                                    <span className="focus-input100"></span>
                                </div>

                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Module Name" value={this.state.modulename}
                                           onChange={this.updatemodulename}
                                            required


                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>

                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Module Id"

                                           value={this.state.moduleid}
                                           onChange={this.updatemoduleid}

                                           required

                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>

                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Instructor Id"

                                           value={this.state.instructorid}
                                           onChange={this.updateinstructorid}
                                           required



                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Module Fee"

                                           value={this.state.fee}
                                           onChange={this.updatefee}
                                           required

                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        Add Module
                                    </button>
                                </div>



                            </form>

                            <div className="login100-more1" ></div>
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
        )
    }
}
export default Addcourse
