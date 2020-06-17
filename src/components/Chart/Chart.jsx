// Now we are going to create some react component
import React,{useState , useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line , Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

// this creates a constant Chart which is going to be a functional component
const Chart=({data : {confirmed,deaths,recovered} , country}) => {
    const [dailyData, setDailyData] = useState([]) // here once the data is fetched we are going to set to the state using hooks
    
    useEffect(() =>{
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }
            //console.log(dailyData);

        fetchApi(); // we can fully make a call right here

    }, []);
    const lineChart=(
        dailyData.length
        ?(
        <Line 
        data = {{
            labels: dailyData.map(({date }) => date),
            datasets:[{
                data: dailyData.map(({confirmed}) => confirmed),
                label : 'Infected',
                borderColor : '#3333ff',
                fill:true,
            },{

                data: dailyData.map(({deaths}) => deaths),
                label : 'Deaths',
                borderColor:'rgba(255,0,0,0.5)',
                fill:true,
            }]
        }}
        />) : null
        );

        const barChart = (
            confirmed
            ? (
                <Bar 
                data={{
                    labels: ['Infected' , 'Recovered' , 'Deaths'],
                    datasets: [{
                        label : 'people',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                        ],
                        data : [confirmed.value, recovered.value, deaths.value ]
                    }]

                }}
                options = {{
                    legend: {display : false},
                    title: {display : true , text : `Current state in ${country}`},

                }}
                />
            ) : null // if it doesn't exit we return null.
        )

    return(
        // here we can make this condition ternary if there a country show the line chart otherwise show the bar charh
        <div className={styles.container}>
            {country ? barChart : lineChart}

        </div>
        
    )
}

export default Chart;