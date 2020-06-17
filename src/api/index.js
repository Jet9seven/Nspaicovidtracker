import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// we are going to fetch data in here in asynchronous wait using the arrow function
// which works well as in get and post method while dealing with the API's 
export const fetchData = async (country) => {
    let changeableUrl = url;
    if (country){
        changeableUrl = `${url}/countries/${country}`
    }

    try{
        //here we are destructuring the data fetched into 2 levels 
        const { data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);

        return {confirmed, recovered, deaths, lastUpdate};

    }catch (error){
        console.log(error)
    }
    
}

// this is the second function in charge of the chart

export const fetchDailyData = async () => {
    try{
        // this will be the non disconstructed form which gives you just the main response to be commented
        const{ data } = await axios.get(`${url}/daily`) // this ${url}/daily makes it just a template URL
       // console.log(data); // to see this we have to call it in the component chart
       const modifiedData = data.map((dailyData) => ({
           confirmed: dailyData.confirmed.total,
           deaths: dailyData.deaths.total,
           date: dailyData.reportDate
       })) //for each data here we will be returning an instant object by using parenthesis and braces after an arrow function 
       

       return modifiedData;
    }catch(error){

    }
}

// for Each and every component here we are fetching their various Data
export const fecthCountriesData = async () =>{
    try{
        //const response = await axios.get(`${url}/countries`);
        //console.log(response); 
        const { data :{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name)             

    }catch(error){
        console.log(error);
    }
}