import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import {BrowserRouter as Router, Link, Switch} from "react-router-dom";

class AddAssignmentDetails extends Component{
    constructor (props){
        super(props);
        this.state = {
            Question1: '',
            Question2: '',
            Question3: ''
        }

        this.onChangeQuestion1 = this.onChangeQuestion1.bind(this);
        this.onChangeQuestion2 = this.onChangeQuestion2.bind(this);
        this.onChangeQuestion3 = this.onChangeQuestion3.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeQuestion1(e) {
        this.setState({
            Question1: e.target.value
        })
    }
    onChangeQuestion2(e) {
        this.setState({
            Question2: e.target.value
        })
    }
    onChangeQuestion3(e) {
        this.setState({
            Question3: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const obj = {
            Question1: this.state.Question1,
            Question2: this.state.Question2,
            Question3: this.state.Question3,

        }

        axios.post('/exam/add',obj).then(
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
                        <h4>True/False Question Form</h4>
                        <div className="main-form">
                            <label>Question 01:</label>
                            <input
                                type="text"
                                name='Question1'
                                className="form-input"
                                onChange={this.onChangeQuestion1}
                                value={this.state.Question1}
                            />
                        </div>
                        <div className="main-form">
                            <label>Question 02:</label>
                            <input
                                type="text"
                                name='Question2'
                                className="form-input"
                                onChange={this.onChangeQuestion2}
                                value={this.state.Question2}
                            />
                        </div>
                        <div className="main-form">
                            <label>Question 03:</label>
                            <input
                                type="text"
                                name='Question3'
                                className="form-input"
                                onChange={this.onChangeQuestion3}
                                value={this.state.Question3}
                            />
                        </div>
                        {/*<div className="main-form">*/}
                        {/*<label>Choose file:</label>*/}
                        {/*<input type="file" name="file" onChange={(e)=> this.onChange(e)} className="form-input"/>*/}
                        {/*</div>*/}
                        <div className="main-form">
                            <button className="form-btn">Submit Exam</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default AddAssignmentDetails
