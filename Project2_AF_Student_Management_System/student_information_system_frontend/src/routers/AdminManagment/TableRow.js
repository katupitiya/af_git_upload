// TableRow.js

import React, { Component } from 'react';

import axios from 'axios';
import {Link} from "react-router-dom";
import './course.css'

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:5000/course/delete/'+this.props.obj._id)
            .then(res=>{
                if(res.body=="ft") {

                    this.props.history.push('/ViewCourse');
                }
                else
                    this.props.history.push('/ViewCourse');
            })

            .catch(err => console.log(err))





    }

    render() {
        return (
            <tr>

                <td>
                    {this.props.obj.coursename}
                </td>
                <td>
                    {this.props.obj.modulename}
                </td>
                <td>
                    {this.props.obj. moduleid}
                </td>

                <td>
                    {this.props.obj. instructorid}
                </td>

                <td>
                    {this.props.obj. fee}
                </td>
                <td>
                    <Link to={"/UpdateCourse/"+this.props.obj._id} ><p className="p1">EDIT</p></Link>
                </td>
                <td>
                    <button onClick={this.delete} className="delete"><p className="p1">DELETE</p></button>
                </td>
            </tr>
        );
    }
}

export default   TableRow;