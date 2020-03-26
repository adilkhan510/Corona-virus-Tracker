import React, { useState } from 'react'
import { Bar, Line, Pie, Bubble, Doughnut } from 'react-chartjs-2';

const Chart = (props)=> {
        const data = {
            labels: [
                "Deaths", "Cases"
            ],
            datasets: [{
                label: "Covid-19 stats", 
                data: [
                    props.data && props.data[0].deaths ? props.data[0].deaths : 1, 
                    props.data && props.data[0].cases ? props.data[0].cases : 1, 
                ],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                "red",
                "teal",
                "green"
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };
        return (
            <div className="charts">
                <Doughnut data={data} options={{}} />
            </div>
        )
}

export default Chart
