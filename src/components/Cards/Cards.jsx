/**
 * Now we are going to create some react component
 * we are going to use the material UI here for the components 
 * containing our Data
 */

import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import classnine from 'classnames'; // this is an internal class, used to apply multiple styles in a components

// this creates a constant cards which is going to be a functional component
const Cards=({data :{confirmed, recovered, deaths, lastUpdate}}) => {
    //console.log(props)
    //we have to return the value if there's data coming in our API
    if(!confirmed){
        return 'Loading data in Progress ...'
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className ={classnine(styles.card, styles.infected)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Infected</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0}end={confirmed.value}duration={3.5}separator=','/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active Cases of COVID-19  </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className ={classnine(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Recovered</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0}end={recovered.value}duration={3.5}separator=','/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Recovered Cases from COVID-19  </Typography>
                    </CardContent>
                </Grid><Grid item component={Card} xs={12} md={3} className ={classnine(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Deaths</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0}end={deaths.value}duration={3.5}separator=','/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths caused COVID-19  </Typography>
                    </CardContent>
                </Grid>


            </Grid>

        </div>
    )
}

export default Cards;