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
        axios.get('http://localhost:4000/user/')
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


                    <Link to="/updateStudent"> Update Student</Link>&nbsp; &nbsp;
                <Link to="/"> Student Home</Link>


                <div> <h3>Student Profile</h3>
                    <table className="table table-striped" style={{ marginTop: 20 }} >
                        <thead>
                        <tr>
                            <th>IT number</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>State</th>
                            <th>Gender</th>
                            <th>Birth Day</th>
                            <th>Course</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.StudentList() }
                        </tbody>
                    </table> </div>
            </div>

        )
    }
}