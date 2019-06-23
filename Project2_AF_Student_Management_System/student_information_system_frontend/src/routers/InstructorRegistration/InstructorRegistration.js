import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import logincss from './InstructorRegistration.css'





import axios from 'axios';


export default class EditTodo extends Component
{

constructor(props)
{
super(props);

    this.updateStaffid=this.updateStaffid.bind(this);
    this.updateinstructorname=this.updateinstructorname.bind(this);
    this.updatemobileno=this.updatemobileno.bind(this);
    this.updateaddress=this.updateaddress.bind(this)
    this.updateadob=this.updateadob.bind(this);
    this.updatestate=this.updatestate.bind(this);

    this.updateinstructorage=this.updateinstructorage.bind(this);
    this.updateinstructorgender=this.updateinstructorgender.bind(this);
    this.updateinstructormail=this.updateinstructormail.bind(this);
    this.updateinstructorpassword=this.updateinstructorpassword.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={

        staffid:'',
        instructorname:'',
        mobileno:'',
        address:'',
        dob:'',
        state1:'',
        instructorage:'',
        instructorgender:'',
        email:'',
        password:'',
        formError:{
            password:''
        }


    }

}
updateStaffid(e)
{
        this.setState({ staffid:e.target.value});

}


updateinstructorname(e)
{
    this.setState({ instructorname:e.target.value});

}
updatemobileno(e)
{
        this.setState({mobileno:e.target.value});

}
updateaddress(e)
{
        this.setState({address:e.target.value});

}
updateadob(e)
{
        this.setState({dob:e.target.value});

}
updatestate(e)
{
        this.setState({state1:e.target.value});

}

updateinstructorage(e)
{
        this.setState({ instructorage:e.target.value});

}

updateinstructorgender(e)
{
        this.setState({ instructorgender:e.target.value});

}

updateinstructormail(e)
{
        this.setState({ email:e.target.value});

}
updateinstructorpassword(e)
{



    const{name,value}=e.target;
    let formError=this.state.formError;
    formError.password=value.length<5 && value.length>0?'too short':"";
    // this.setState({formError,[password]:value})
    this.setState({ password:e.target.value});




}



    onSubmit(e)
    {

        const meo={

            staffid:this.state.staffid,
            instructorname:this.state.instructorname,
            instructormobileno:this.state.mobileno,
            instrucoraddress:this.state.address,
            instructordob:this.state.dob,
            instructorstate:this.state.state1,
            instuctorage:this.state.instructorage,
            instructorgender:this.state.instructorgender,
           email:this.state.email,
            password:this.state.password


        }
        axios.post('http://localhost:5000/instructor/add',meo).then(res=>console.log(res.data));
        this.setState({

            staffid:'',
            instructorname:'',
            instructorage:'',
            email:''


        })
        this.props.history.push('/HandlingInstructor')

    }


    render() {
        const {formError}=this.state;
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
						Instructor Registartion
					</span>

                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Staff Id"

                                    value={this.state.staffid}
                                           onChange={this.updateStaffid}
                                           required
                                    />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Full Name"

                                    value={this.state.instructorname}
                                           onChange={this.updateinstructorname}
                                           required

                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>

                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Mobile Number"

                                    value={this.state.mobileno}
                                    onChange={this.updatemobileno}
                                           required
                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>

                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Address"

                                    value={this.state.address}
                                           onChange={this.updateaddress}
                                           required


                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="date"
                                           placeholder="Date Of Birth"

                                    value={this.state.dob}
                                           onChange={this.updateadob}

                                           required

                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Age"

                                    value={this.state.instructorage}
                                           onChange={this.updateinstructorage}


                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <select id="first-name" className="down"

                                    value={this.state.instructorgender}
                                            onChange={this.updateinstructorgender}
                                       required

                                    >
                                        <option value="select Gender" className="placeholder">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <select id="first-name" className="down"
                                    value={this.state.state1}
                                    onChange={this.updatestate}

                                    >
                                        <option value="select state">Select State</option>
                                        <option value="Married">Married</option>
                                        <option value="Single">Single</option>
                                    </select>

                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>


                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="email"
                                           placeholder="Email address"

                                    value={this.state.email}
                                           onChange={this.updateinstructormail}
                                           required
                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>

                                <div className="wrap-input100">
                                    <input className="input100" type="password" name="pass" placeholder="Password"


                                    value={this.state.password}
                                           onChange={this.updateinstructorpassword}
                                           required

                                    />
                                    {(<span className="span">{formError.password}</span>)}
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="div1">

                                </div>
                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        Register
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
                            <p className="col-lg-8 col-sm-12 footer-text m-0 text-white">mmmCopyright © 2018 All rights
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
