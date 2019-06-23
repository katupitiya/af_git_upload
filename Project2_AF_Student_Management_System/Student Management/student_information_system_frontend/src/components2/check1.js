import React ,{Component} from 'react' ;
import "bootstrap/dist/css/bootstrap.min.css";


export default class Check1 extends Component{

            constructor(props){
                super(props);

                this.fileInput=React.createRef();
                this.IT_no=React.createRef();
                this.date=React.createRef();
                this.state={
                    file:'',
                    IT_no:'',
                    date:'today.getFullYear()+\'-\'+(today.getMonth()+1)+\'-\'+today.getDate();'
                }



            };


    handleSubmit(e){

        e.preventDefault();

        this.setState({file:this.fileInput.current.value,
                             IT_no:this.IT_no.current.valid,
                               date:this.date.current.Date });

    }

    render(){

        return(

            <div className="container">

                <h3>File:{this.state.file}</h3>
                <h3>IT:{this.state.IT_no}</h3>
                <h3>Date:{this.state.Date}</h3>
                <form onSubmit={this.handleSubmit}>
                <input className="form-control"  ref={(ref) => { this.uploadInput = ref; }} type="file" />
                <input className="form-control" ref={this.fileInput}/>
                    <input className="form-control" ref={this.IT_no}/>
                    <input className="form-control" ref={this.date}/>
                    <button>Submit all</button>

                </form>
                </div>
        );
    }

}
