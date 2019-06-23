import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import {BrowserRouter as Router, Link, Switch} from "react-router-dom";

class AddAssignmentDetails extends Component{
    constructor (props){
        super(props);
        this.state = {
            AssignmentName: '',
            SubjectName: '',
            date: ''
        }

        this.onChangeAssignmentName = this.onChangeAssignmentName.bind(this);
        this.onChangeSubjectName = this.onChangeSubjectName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeAssignmentName(e) {
        this.setState({
            AssignmentName: e.target.value
        })
    }
    onChangeSubjectName(e) {
        this.setState({
            SubjectName: e.target.value
        })
    }
    onChangeDate(e) {
        this.setState({
            date: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const obj = {
            AssignmentName: this.state.AssignmentName,
            SubjectName: this.state.SubjectName,
            date: this.state.date,

        }

        axios.post('/assignment/add',obj).then(
            data => {
                alert('Successfull' + JSON.stringify(data.data));
            }
        )

    }
   render() {
       return (
           <div>
               <div className="assignment_form" style={{marginTop: "-140px"}}>
                   <form onSubmit={this.onSubmit}>
                       <div className="main-form">
                           <label>Subject Name:</label>
                           <select id="name" className="form-input" name="SubjectName" onChange={this.onChangeSubjectName}
                                   value={this.state.SubjectName}>
                               <option value="select Subject">Select Subject</option>
                               <option value="Application Framework">Application Framework</option>
                               <option value="Distributed System">Distributed System</option>
                           </select>
                       </div>
                       <div className="main-form">
                           <label>Assignment Name:</label>
                           <input
                               type='text'
                               name='AssignmentName'
                               className="form-input"
                               onChange={this.onChangeAssignmentName}
                               value={this.state.AssignmentName}
                           />
                       </div>
                       <div className="main-form">
                           <label>Due Date:</label>
                           <input
                               type='date'
                               name='date'
                               className="form-input"
                               onChange={this.onChangeDate}
                               value={this.state.date}
                           />
                       </div>
                       {/*<div className="main-form">*/}
                       {/*<label>Choose file:</label>*/}
                       {/*<input type="file" name="file" onChange={(e)=> this.onChange(e)} className="form-input"/>*/}
                       {/*</div>*/}
                       <div className="main-form">
                           <button className="form-btn">Submit Assignment</button>
                       </div>

                   </form>

               </div>
           </div>
       );
   }
}


export default AddAssignmentDetails
