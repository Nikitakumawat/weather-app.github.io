import React, {useState} from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from "../Graphql/Queries";
import './Home.css';
import Loading from './Loading';

function Home() {
  const [input, setInput] = useState('');
  const [getTemp, {loading, error, data}] = useLazyQuery(GET_WEATHER_QUERY,{
    variables : { name: input}
  });
  
  if (error) return <h1>Error found</h1>
  if (loading) return <Loading/>

  const getWeather = () => {
    getTemp();
  }
  return (
    <div className='home'>
        <h1>Search for weather</h1>
      <input 
        type="text"
        placeholder='Enter city name'
        value={input}
        onChange={(e) => setInput(e.target.value)}
       />
       <button onClick={() => getWeather()}>Search</button>
       <div className="weather">
        {data && 
          <div className='container'>
            <div className="card">
              <div className="content">
                <h3>City Name : {data.getCityByName.name}</h3>
                <h3>Temperature : {data.getCityByName.weather.temperature.actual}</h3>
                <h3>Description: {data.getCityByName.weather.summary.description}</h3>
                <h3>Wind: {data.getCityByName.weather.wind.speed}</h3>
                <h3>Clouds: {data.getCityByName.weather.clouds.visibility}</h3>
                <h3>Humidity: {data.getCityByName.weather.clouds.humidity}</h3>
              </div>
            </div>
          </div>
        }
       </div>
    </div>
  )
}

export default Home;
