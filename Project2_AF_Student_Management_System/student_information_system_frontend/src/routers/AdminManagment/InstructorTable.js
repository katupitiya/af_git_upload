// TableRow.js

import React, { Component } from 'react';

import axios from 'axios';
import {Link} from "react-router-dom";
import './course.css'

class InstructorTable extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:5000/Instructor/delete/'+this.props.obj._id)
            .then(res=>{
                if(res.body=="ft") {

                    this.props.history.push('/ViewInstructor');
                }
                else
                    this.props.history.push('/ViewInstructor');
            })

            .catch(err => console.log(err))





    }

    render() {
        return (
            <tr>





                <td>
                    {this.props.obj.staffid}
                </td>
                <td>
                    {this.props.obj.instructorname}
                </td>

                <td>
                    {this.props.obj. instructormobileno}
                </td>

                <td>
                    {this.props.obj. instrucoraddress}
                </td>
                <td>
                    {this.props.obj. instructordob}
                </td>
                <td>
                    {this.props.obj. instuctorage}
                </td>
                <td>
                    {this.props.obj. instructorgender}

                </td>
                <td>

                    {this.props.obj. instructorstate}
                </td>
                <td>
                    {this.props.obj. email}
                </td>

                <td>
                    <Link to={"/UpdateInstructor/"+this.props.obj._id} ><p className="p1">EDIT</p></Link>
                </td>
                <td>
                    <button onClick={this.delete} className="delete"><p className="p1">DELETE</p></button>
                </td>
            </tr>
        );
    }
}

export default  InstructorTable;