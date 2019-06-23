import React,{Component} from 'react';
import '../App.css';
import axios from 'axios';

 export default class App2 extends Component{

     state={
         file:null
     }

    hanleFile(e){

        // console.log(e.target.files,"$$$");
        // console.log(e.target.files[0],"$$$");
        var file;

        this.setState({file:file})
    }

    handleUpload(e){

         console.log(this.state,"The State ---$$");
         let file =this.state.file

        let formdata =new FormData();

         formdata.append('image',file)
        formdata.append('name',"AA")

         axios({url:'/some/api',
             method:"POST",
             headers:{
             authorization:'your token'
             },data:formdata

         }).then((res)=>{


         })
    }



    render() {
        return(

            <div className="App">
                <h1>The Form</h1>

                <form>
                    <div className="">
                        <label>Select File</label>
                        <input type="file" name="file" onChange={(e)=>this.handleFile(e)}/>

                    </div>
                    <br/>

                    <button>Upload</button>

                </form>
            </div>

        );
    }

}