import React from "react";

export function MaterialChart() {
    const chartReference = React.createRef();
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'center',
            },
            title: {
                display: true,
                font:{
                    size: 20,
                    style: "bold"
                },
                padding:{
                    bottom: 35
                },
                text: 'График среднего расхода материала',
            },
            layout: {
                padding: 20
            }
        },
    };
    return [chartReference, options]
}