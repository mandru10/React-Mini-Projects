import React, {Component} from "react";

class Course extends Component{

    constructor(props){
        super(props);

        this.state = {
            active : false
        }

        this.click = this.clock.bind(this)

    }

    click(){
        let active = !this.state.active
        this.setState({active : active});
        this.props.calculate(active ? this.props.price : -this.props.price);
    }

    render(){
        return(
            <div>
                <p onClick={this.click}>{this.props.title} <b>{this.props.price}</b></p>
            </div>
        )
    }
}

export default Course;