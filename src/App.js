import React, { Component } from 'react';
import logo from './MLSlogo.svg';
import birthmap from './birthmap.png';
import { Chart } from 'react-google-charts';
import data from './DataMLS';
import TeamCard from './TeamCard';
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
console.log(teams);

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">MLS Salaries - Analysis</h1>
                    <p>By David</p>
                </header>

                <h2>Average Salary per Year</h2>
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

                <h2>Maximum Salary per Year</h2>
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

                <h2>Now in 2017</h2>

                <p className="intro">MLS has shown continuous growth in the last decade. According to MLS, <strong>more than 3.5 million viewers</strong> in the US and Canada tuned in last year to watch the MLS cup match between Seattle Sounders and Toronto FC, a 117% increase from the previous year's final. MLS today is <strong>the most diverse professional sports league in North America.</strong></p>

                <div className="container">
                    {Object.keys(teams).map(team =>
                        <div style={{marginTop:'3%', width:'40%'}}>
                            {/* <div className="team-card">
                            <h3>{team}</h3>
                            <h4> Approximate budget for players: {teams[team]["budget"]}</h4>
                            <h4> Highest paid player</h4>
                            <h5> {teams[team]["salary_max_player"]} </h5>
                            <h5> Position: {teams[team]["salary_max_position"]}</h5>
                            <h5> Base salary: {teams[team]["salary_max"]}</h5>
                        </div> */}

                        <TeamCard
                            team={team}
                            budget={teams[team]["budget"]}
                            player={teams[team]["salary_max_player"]}
                            position={teams[team]["salary_max_position"]}
                            salary={teams[team]["salary_max"]}/>
                        </div>
                    )}
                </div>

                {/* <img src={birthmap} alt="birth-map" className="map"/> */}
                <footer>
                    <div class="container">
                        <p class="copyright">
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
