import React, { Component } from 'react'
import { Chart } from 'react-google-charts';
import './SalaryDonut.css'

class SalaryDonut extends Component {
    render(){

        var salaries = [];
        salaries.push(["Position", "Salary"]);
        Object.keys(this.props.positions).map(position =>
            salaries.push([position, this.props.positions[position]])
        )
        return(
            <Chart
                chartType="PieChart"
                data={salaries}
                options={{
                    title: "Average Salary per Position",
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
                graph_id={"AvgSalary"+this.props.team}
                width="100%"
                height="400px"
                legend_toggle
            />
        )
    }
}

export default SalaryDonut;
