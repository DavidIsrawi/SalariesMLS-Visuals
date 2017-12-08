import React, { Component } from 'react';

import { Chart } from 'react-google-charts';
import data from './DataMLS';

import TeamCard from './TeamCard';
import SalaryDonut from './SalaryDonut';

import logo from './MLSlogo.svg';
import './App.css';

const overall = data[0].overall;
const teams = data[0].teams["2017"];

var avgSalaryYearData = [];
avgSalaryYearData.push(['Year', 'Goalkeeper', 'Defense', "Midfielder", "Forward"]);

var maxSalaryYearData = [];
maxSalaryYearData.push(['Year', 'Goalkeeper', 'Defense', "Midfielder", "Forward"]);

Object.keys(overall).map(year => {
    avgSalaryYearData.push([year,
        overall[year]["salary_avg"]["GK"],
        overall[year]["salary_avg"]["D"],
        overall[year]["salary_avg"]["M"],
        overall[year]["salary_avg"]["F"]
    ]);

    maxSalaryYearData.push([year,
        overall[year]["salary_max"]["GK"],
        overall[year]["salary_max"]["D"],
        overall[year]["salary_max"]["M"],
        overall[year]["salary_max"]["F"]
    ]);
})

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            team:'ORL'
        };
    }

    selectTeam(e) {
        var team = e.target.innerHTML
        this.setState({team:team});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">MLS Salaries - Analysis</h1>
                    <p>By David</p>
                </header>

                <h1 className="section">A Decade of Growth</h1>
                <h2>Average Salary</h2>
                <p className="intro"> Since 2007, MLS has increased its popularity -- bringing more revenue to the organization and an opportunity to increase the budget for each team. According to Forbes, MLS is the <strong>fastest growing U.S. pro league on social media.</strong> Across its social platforms, MLS has grown by a 95% from 2015 to 2016 while almost 690% since 2013.</p>

                <div className={'chart-container'}>
                    <Chart
                        chartType="BarChart"
                        data={avgSalaryYearData}
                        options={{
                            title: 'Average Salary in MLS',
                            chartArea: {width: '50%'},
                            isStacked: true,
                            hAxis: {
                                title: 'Budget per row of positions',
                                minValue: 0,
                            },
                            vAxis: {
                                title: 'Year'
                            }
                        }}
                        graph_id="AvgYear"
                        width="100%"
                        height="400px"
                        legend_toggle
                    />
                </div>

                <h2>Maximum Salary</h2>
                <p className="intro">In the last decade, MLS has been continuously boasting athletes from all over the world. According to the MLS official website, <strong>nearly half of the players in MLS were born outside the US and Canada,</strong> with the most influence coming from Argentina and England. By 2015, a total of <strong>315 players</strong> were originated from US and Canada, compared to <strong>236 players</strong> hailing from South America, Europe, Africa, and more.</p>

                <div className='chart-container'>
                    <Chart
                        chartType="BarChart"
                        data={maxSalaryYearData}
                        options={{
                            title: 'Maximum Salary in MLS',
                            bars: 'horizontal' // Required for Material Bar Charts.
                        }}
                        graph_id="MaxYear"
                        width="100%"
                        height="1200px"
                        legend_toggle
                    />
                </div>

                <h1 className="section">Now in 2017</h1>
                <h2>Average Salary</h2>

                <p className="intro">MLS has shown continuous growth in the last decade. According to MLS, <strong>more than 3.5 million viewers</strong> in the US and Canada tuned in last year to watch the MLS cup match between Seattle Sounders and Toronto FC, a 117% increase from the previous year's final. MLS today is <strong>the most diverse professional sports league in North America.</strong></p>


                <div className="dropdown">
                    <button className="dropbtn">{this.state.team} &#9660;</button>
                    <div className="dropdown-content">
                        {Object.keys(teams).map(team =>
                            <a key={team+"Opt"} onClick={this.selectTeam.bind(this)}>{team}</a>
                        )}
                    </div>
                </div>
                <div className="container">
                    <SalaryDonut
                        positions={teams[this.state.team]["salary_avg"]}
                        team={this.state.team}
                    />
                </div>

                <h2>Highest Salaries</h2>

                <p>As part of MLS campaign to gather their fan base, the organization has been recruiting many international world-reknown players. Many of the highest salaries per team this year go to these players - this is a strong investment from each team, usually returned in the increase in popularity of the team.</p>

                <div className="container">
                    {Object.keys(teams).map(team =>
                        <div key={team+"max"} style={{marginTop:'3%', width:'28%'}}>

                        <TeamCard
                            team={team}
                            budget={teams[team]["budget"]}
                            player={teams[team]["salary_max_player"]}
                            position={teams[team]["salary_max_position"]}
                            salary={teams[team]["salary_max"]}/>
                        </div>
                    )}
                </div>

                <footer>
                    <div className="container">
                        <p className="copyright">
                            &copy; 2017 | David Israwi Yordi. All Rights Reserved.
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}

// Sources:
//     Forbes: https://www.forbes.com/sites/markjburns/2016/10/26/mls-records-banner-year-in-2016-cements-position-among-top-u-s-pro-sports-leagues/#61bbf4b878a2
//     MLS: https://www.mlssoccer.com/post/2015/04/25/mls-maintains-status-most-diverse-professional-sports-league-north-america
//     MLS: https://www.mlssoccer.com/post/2016/12/13/mls-cup-2016-sets-record-most-watched-title-game-league-history

export default App;
