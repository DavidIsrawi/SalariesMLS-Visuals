import React, { Component } from 'react';
import './TeamCard.css';


class TeamCard extends Component {
    render() {
        var budget = "$" + this.props.budget.toLocaleString();
        var salary = "$" + this.props.salary.toLocaleString();

        return (
            <div className="team">
                <h3>{this.props.team}</h3>
                <p>Appr. Player Budget: {budget}</p>
                <p>Highest paid player:</p>
                <p className="player">{this.props.player} </p>
                <p>Position: {this.props.position}</p>
                <p>Base salary: {salary}</p>
            </div>
        );
    }
}

export default TeamCard;
