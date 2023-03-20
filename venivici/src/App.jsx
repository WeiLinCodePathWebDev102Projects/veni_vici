import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import AstroPics from './components/astroAPI';
const ACCESSKEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {

  const URL = `https://api.nasa.gov/planetary/apod?api_key=${ACCESSKEY}&count=1&thumbs=true`;

  const [astroPic, setAstroPic] = useState(null);
  //banned attributes


  const fetchData = async () => {
    const response = await axios.get(URL);
    setAstroPic(response.data[0]);
    console.log(response.data[0]);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const submitBannedYears = () => {
    let defaultValues={

    }
  }

  //banned container

  return (
    <div className="App">
      <div className='itemsToBan'>
        Ban 
      </div>
      <div>
        <button className='nextButton'> Next </button>
      </div>
        {astroPic && <AstroPics picData={astroPic}/>}
    </div>
  )
}

export default App
