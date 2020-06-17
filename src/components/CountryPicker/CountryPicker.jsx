// Now we are going to create some react component
import React,{useState ,useEffect} from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css';
import { fecthCountriesData } from '../../api';
/** the countries set here are not going to be set not only to a variable but  to the state
 * this is one of the reason fetched countries  and setter of the same is set.
 */
 


// this creates a constant CountryPicker which is going to be a functional component
const CountryPicker=( { handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]); 

    useEffect(() => {
        const  fetchAPI = async() =>{
            setFetchedCountries(await fecthCountriesData()); // make fecthCountries as method et voila
        }
        fetchAPI();
    }, [setFetchedCountries]);

    //console.log(fetchedCountries);

    return(
        //<h1> CountryPicker </h1> this is just tofirst check your component
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue = "" onChange={(e) => handleCountryChange(e.target.value)} > 
                <option value="">Global</option>
    {fetchedCountries.map((country , index) => <option key={index} value = {country} >{country}</option>)}
                
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;