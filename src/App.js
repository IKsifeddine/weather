import UilReact from '@iconscout/react-unicons/icons/uil-react'
import './App.css';
import FortCast from './components/FortCast';
import Inputs from './components/Inputs';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './services/WeatherService';

function App() {
  const fetchWeather=async()=>{
    const data= await getFormattedWeatherData({q:'london'});
    console.log(data)
  };
  fetchWeather();
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>

        
      <TopButtons/>
      <Inputs/>

      
      <TimeAndLocation/>
      
      <TemperatureAndDetails/>
      <FortCast title="horly fortcast"/>
      <FortCast title="dayl forcast "/>

    </div>
  );
}

export default App;

