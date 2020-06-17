import React from 'react';
//import Cards from './components/Cards/Cards';
//import Chart from './components/Chart/Chart';
//import chart from './components/CountryPicker/CountryPicker';

import  { Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import nspaicovid from './images/Nspaicovid19.png'

class App extends React.Component{
    state = {
        data:{},
        country:'',

    }

    // this where we are going to fetch the Data
    /**
     * @author Gauthier Ninespace 
     * But in order for this function to work, we have to mount 
     * to make an async function async we palce the async keyword in front of the braces 
     * but with the function componentDidmount it comes before the component.
     */
    async componentDidMount(){
        const fetchedData = await fetchData(); // here we are awaiting the function which fetches the Data
        
        this.setState({data : fetchedData}) // this can be used in our components 
        //console.log(data);
    }

    // to control the state of the country we need to create amethod responsible for that too by paasin the method as a property

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        //console.log(fetchedData);
        this.setState({data : fetchedData,country : country }) // this can be used in our components 
        //console.log(country);
        //fetch the data 
        //Set the state 

    }

    render(){
            const {data, country } =this.state;
// to add an image you can simply add a simple path given at import 
        return(
            <div className={styles.container}>
                <img  className={styles.image} src={nspaicovid} alt="SARS-COVID19"/>
            <Cards data = {data}/>
            <CountryPicker handleCountryChange ={this.handleCountryChange}/>
            <Chart data = {data} country= {country} />
        </div>
        ) 
    }
}

export default App;