import React, { Component } from "react";
import Course from "./Course";

class Coursesales extends Component{
    sumPrice(price){
        this.setState({total: this.state.total + price})
    }
    
    constructor(props){
        super(props);

        this.state = {
            total: 0
        };
        this.sumPrice = this.sumPrice.bind(this);
    }


    render(){
        let movies = this.props.items.map((item, i) => {
            return <Course name={item.name} price={item.price}
            key={i} sumPrice={this.sumPrice} active={item.active} />
        });
        return(
            <div>
                <h1>You can buy movies :</h1>
                <div id='courses'>
                    {movies}
                    <p id='total'> Total <b>{this.state.total}</b></p>
                </div>
            </div>
        )
    }
}

export default Coursesales
