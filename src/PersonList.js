import React, { Component } from 'react';
import axios from 'axios';
import './PersonList.css';

class PersonList extends Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                const persons = res.data.results;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <div className="person-list">
                {this.state.persons.map(person => (
                    <div className="person-row" key={person.login.uuid}>
                        <img src={person.picture.medium} alt={`${person.name.first} ${person.name.last}`} className="person-image" />
                        <div className="person-info">
                            <div className="person-name">{person.name.first} {person.name.last}</div>
                            <div className="person-email">Email: {person.email}</div>
                            <div className="person-phone">Number: {person.phone}</div>
                            <div className="person-address">Location: {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}</div>
                            <div className="person-username">Username: {person.login.username}</div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonList;