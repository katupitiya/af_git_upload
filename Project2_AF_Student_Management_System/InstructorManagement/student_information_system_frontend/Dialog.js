import React,{Component} from 'react';

class Dialog extends Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}
export default Dialog;