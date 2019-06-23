import React ,{Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import FileUpload from './tt1';


export  default class Uploading extends Component{


    render() {
        return(
            <div>
                <h1>Submit</h1>
                <table>
                    <thead>
                    <tr><h2>
                        <td>Submit your file </td>
                        <td> Select</td>
                    </h2> </tr>
                    </thead>
                </table>

                <FileUpload/>
            </div>



        );
    }

}
