import axios from "axios";

export function getMaterialUsage(props) {
    axios.post(`http://localhost:8081/`,props.data)
        .then(res => {
            console.log(res.data)
            console.log(props.data.listOfMaterials)
            // setListOfMaterials([])
            props.set_checked([])
            props.set_chart_data(
                {
                    labels: Array.from(Array(100).keys()),
                    datasets: [
                        {
                            label: 'Dataset 1',
                            data: res.data.points,
                            borderColor: '#a855f7',
                            backgroundColor: '#581c87',
                        },
                    ],
                }
            )
            props.set_days_left(
                res.data.days
            )
        })
}