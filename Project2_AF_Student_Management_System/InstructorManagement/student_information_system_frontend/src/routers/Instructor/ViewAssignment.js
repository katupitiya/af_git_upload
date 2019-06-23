import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import {BrowserRouter as Router, Link, Switch} from "react-router-dom";

class ViewAssignment extends Component{
    constructor(){
        super()
        this.state = {
            assignments : []
        }
    }

    componentDidMount(){
        axios.get('/assignment')
            .then(data=>{
                this.setState({
                    assignments : data.data
                })
            })
    }


    // onSubmit(e){
    //     e.preventDefault();
    //     const obj = {
    //         AssignmentName: this.state.AssignmentName,
    //         SubjectName: this.state.SubjectName,
    //         date: this.state.date,
    //
    //     }
    //
    //     //console.log(JSON.stringify(obj))
    //     axios.post('/assignment',obj).then(
    //         data => {
    //             alert('Successfull' + JSON.stringify(data.data));
    //         }
    //     )
    //     // axios.post('/assignment',book).then(response=>{
    //     //     console.log(response);
    //     //     this.props.history.push('/');
    //     // }).catch(err => {
    //     //     console.log(err);
    //     // });
    // }

    // viewSubjects(sub){
    //     axios.get('http://localhost:5000/subject/find/'+sub).then(
    //         data => {
    //             alert('Name Of Subject is :' + data.data['name'] + ' And Amount Rs : ' + data.data['amount']);
    //         }
    //     )
    // }
    onDelete(id, e){
        const assignmentData = {
            _id : id
        }
        axios.post('/assignment/delete/id', assignmentData)
            .then(data => {
                console.log('deleted')
                this.componentDidMount()
            })
    }
    onUpdate(id, e){
        const assignmentData = {
            _id : id
        }
        axios.post('/assignment/update/id', assignmentData)
            .then(data => {
                console.log('updated')
                this.componentDidMount()
            })
    }
    render() {
        return (
            <div>
                <div style={{marginTop:30}} className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead className="thead-light">
                        <tr>
                            <th className="w-10">Subject</th>
                            <th className="w-10">Assignment Name</th>
                            <th className="w-10">Due Date</th>
                            <th className="w-10">Update</th>
                            <th className="w-10">Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.assignments.map(assignment=>{
                                return(
                                    <tr>
                                        <td>{assignment.SubjectName}</td>
                                        <td>{assignment.AssignmentName}</td>
                                        <td>{assignment.date}</td>
                                        <td><button className="view-btn" onClick={(e)=>this.onUpdate(assignment._id,e)}>Update</button></td>
                                        <td><button className="view-btn-delete" onClick={(e) => this.onDelete(assignment._id, e)} >Delete</button></td>
                                    </tr>
                                );
                            })
                        }

                        </tbody>
                    </table>
            </div>
            </div>
        );
    }
}


export default ViewAssignment;
