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
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        axios.get('/api/houses')
            .then(res => {
                const houses = res.data;
                this.setState({ houses });
                console.log(this.state)
            })
    }

    handleDelete(prop){
        axios.delete(`/api/delete/${prop}`)
        .then(res=>{
            console.log(res);
            this.setState({houses: res.data});
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
                id={house.id}
                handleDelete ={this.handleDelete}
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