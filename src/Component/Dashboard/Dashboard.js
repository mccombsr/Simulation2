import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        axios.get('/api/houses')
            .then(res => {
                const houses = res.data;
                this.setState({ houses });
                console.log(this.state)
            })
    }

    render() {
        let houses = this.state.houses.map((house, i) => {
            return (
                <House key={i} 
                name={house.property_name}
                address={house.address}
                city={house.city}
                state={house.state}
                zip={house.zip}
                />
                    
            )
        })
        return (
            <div>
                Dashboard
                <Link to='/wizard'>
                    <button>Add New Property</button>
                </Link>
                <h2>Houses</h2>
                {houses}
            </div>
        )
    }
}