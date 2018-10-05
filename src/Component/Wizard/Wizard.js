import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value })
    }
    handleAddressChange(event) {
        this.setState({ address: event.target.value })
    }
    handleCityChange(event) {
        this.setState({ city: event.target.value })
    }
    handleStateChange(event) {
        this.setState({ state: event.target.value })
    }
    handleZipChange(event) {
        this.setState({ zip: event.target.value })
    }

    render() {
        return (
            <div>
                Wizard
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
                <div className='wizardForm'>
                    <div>
                        <h3>Property Name</h3>
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </div>
                    <div>
                    <h3>Address</h3>
                        <input type="text" value={this.state.address} onChange={this.handleAddressChange} />
                    </div>
                    <div>
                    <h3>City</h3>
                        <input type="text" value={this.state.city} onChange={this.handleCityChange} />
                    </div>
                    <div>
                    <h3>State</h3>
                        <input type="text" value={this.state.state} onChange={this.handleStateChange} />
                    </div>
                    <div>
                    <h3>Zip</h3>
                        <input type="text" value={this.state.zip} onChange={this.handleZipChange} />
                    </div>
                </div>
            </div>
        )
    }
}