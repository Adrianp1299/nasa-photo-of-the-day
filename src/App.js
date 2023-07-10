import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import NasaPhoto from './Components/nasaPhoto'

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setData(res.data)
    })
    .catch(err => console.error(err))

  }, [])
  return (
    <div className="App">
      { data && <NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;

/**
 * data : 
date : "2023-07-09"

explanation : 
"Carinae may be about to explode.  But no one knows when - it may be next year, it may be one million years from now. Eta Carinae's mass - about 100 times greater than our Sun - makes it an excellent candidate for a full blown supernova. Historical records do show that about 170 years ago Eta Carinae underwent an unusual outburst that made it one of the brightest stars in the southern sky.  Eta Carinae, in the Keyhole Nebula, is the only star currently thought to emit natural LASER light. This featured image brings out details in the unusual nebula that surrounds this rogue star.  Diffraction spikes, caused by the telescope, are visible as bright multi-colored streaks emanating from Eta Carinae's center.  Two distinct lobes of the Homunculus Nebula encompass the hot central region, while some strange radial streaks are visible in red extending toward the image right. The lobes are filled with lanes of gas and dust which absorb the blue and ultraviolet light emitted near the center.  The streaks, however, remain unexplained."

hdurl : "https://apod.nasa.gov/apod/image/2307/EtaCarinae_HubbleSchmidt_1764.jpg"


title : "Doomed Star Eta Carinae"

 */