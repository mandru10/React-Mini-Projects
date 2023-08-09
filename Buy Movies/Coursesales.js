import React, { Componenet } from "react";
import Course from './Course';

class Coursesales extends Componenet{
    
    constructor(props){
        super(props)

        this.state = {
            total : 0
        }

        this.calculate = this.calculate.bind(this)

    }

     calculate(price){
            this.setState({ total: this.state.total + price })
        }
    
    render(){
        let movies = this.props.movies.map((index, i) => {
            return <Course title={index.title} price={index.price} key={i} calculate={this.calculate} active={index.active}/>
        });
        return(
            <div id='courses'>
                {movies}
                <p id='total'>Total {this.state.total}</p>
            </div>
        )
    }
}

export default Coursesales;