// index.component.js

import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import InstructorTable from "./InstructorTable";

// TableRow.js


export default class ViewInstructor extends Component {

    constructor(props) {
        super(props);
        this.state = {business: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/instructor/')
            .then(response => {
                this.setState({ business: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        return this.state.business.map(function(object, i){
            return <InstructorTable obj={object} key={i} />;
        });
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

                <h3 align="center">Instructor Details</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Mobile no</th>
                        <th>Address</th>
                        <th>DOB</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>State</th>
                        <th>Email</th>

                    </tr>
                    </thead>
                    <tbody>
                    { this.tabRow() }
                    </tbody>
                </table>
                <div className="ff"></div>
                <footer className="com">
                    <div className="footerdiv1"></div>
                    <div className="cont">
                        <div className="footerdiv1"></div>
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
        );
    }
}