import React, { Component } from 'react';
import './TeamCard.css';


class TeamCard extends Component {
    render() {
        var budget = "$"+this.props.budget.toLocaleString();
        var salary = "$"+this.props.salary.toLocaleString();

        return(
            <div className="team">
                <h3>{this.props.team}</h3>
                <p> <b>Appr. Player Budget:</b> {budget}</p>
                <p> <b>Highest paid player: </b></p>
                <p> {this.props.player} </p>
                <p> <b>Position:</b> {this.props.position}</p>
                <p> <b>Base salary:</b> {salary}</p>
            </div>
        );
    }
}

export default TeamCard;
