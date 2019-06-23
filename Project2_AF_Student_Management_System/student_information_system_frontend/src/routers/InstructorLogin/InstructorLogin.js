import React,{Component} from 'react';
import "./InstuctorLogin.css"
import {Link} from "react-router-dom";

import axios from 'axios';
class InstuctorLogin extends Component {

    constructor(props)
    {

        super(props);
        this.updateinstructormail=this.updateinstructormail.bind(this);
        this.updateinstructorpassword=this.updateinstructorpassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={

            email:'',
            password:''


        }


    }

    updateinstructormail(e)
    {
        this.setState({ email:e.target.value});

    }
    updateinstructorpassword(e)
    {
        this.setState({ password:e.target.value});

    }
    onSubmit(e){
        e.preventDefault()

        const User={
            email:this.state.email,
            password:this.state.password
        }

        axios.post('http://localhost:5000/instructor/login', User)
            .then(res => {
                console.log("login")
                localStorage.setItem('usertoken', res.data)
                console.log( res.data)

                if(res.data=="correct")
                {

                    this.props.history.push('/');

                }
                else
                {

                    alert("Incorrect username and Password");


                }

            }).catch(err => {
            console.log(err)
        })

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
                            <form className="login100-form6 validate-form" onSubmit={this.onSubmit}>
					<span className="login100-form-title p-b-34">
						Account Login
					</span>

                                <div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20"
                                     data-validate="Type user name">
                                    <input id="first-name" className="input100" type="text" name="username"
                                           placeholder="User name"


                                           value={this.state.email}
                                           onChange={this.updateinstructormail}




                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20"
                                     data-validate="Type password">
                                    <input className="input100" type="password" name="pass" placeholder="Password"

                                           value={this.state.password}
                                           onChange={this.updateinstructorpassword}






                                    />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        Sign in
                                    </button>
                                </div>


                                <div className="div7">jjjj
                                </div>


                                <div className="w-full text-center p-t-27 p-b-239">
						<span className="txt1">
							Forgot
						</span>

                                    <a href="#" className="txt2">
                                        User name / password?
                                    </a>
                                    <br/><br/>

                                </div>

                            </form>

                            <div className="login100-more3" ></div>
                        </div>
                    </div>
                </div>
                <footer className="com">
                    <div className="cont">

                        <div className="footerdiv"></div>

                        <div className="row footer-bottom d-flex justify-content-between">
                            <p className="col-lg-8 col-sm-12 footer-text m-0 text-white">kkCopyright © 2018 All rights
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
export default InstuctorLogin
