// index.component.js

import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

// TableRow.js


export default class ViewCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {business: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/course/')
            .then(response => {
                this.setState({ business: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        return this.state.business.map(function(object, i){
            return <TableRow obj={object} key={i} />;
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

                <h3 align="center">Course Details</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Module Name</th>
                        <th>Module Id</th>
                        <th>Instructor Id</th>
                        <th>Course Fee</th>

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