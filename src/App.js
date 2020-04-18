import React from 'react';
import GoogleMapReact from 'google-map-react';
import Circle from './Circle'

export default function App() {

  const [center, setCenter] = React.useState([39.7741143, -86.1761807]);
  const [value, setValues] = React.useState({
    x: "",
    y: ""
  });

  const handleChange = prop => event => {
    setValues({ ...value, [prop]: event.target.value });
  };

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <button onClick={() => setCenter([42.652354, -73.755955])} >Albany, NY</button>
      <button onClick={() => setCenter([47.605884, -122.334562])} >Seattle, WA</button>
      <button onClick={() => setCenter([42.281116, -83.743426])} >Ann Arbor, MI</button><br />
      <button onClick={() => setCenter([39.7741143, -86.1761807])} >Reset</button>
      <div style={{ height: '600px', width: '600px', margin: 'auto' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDr-7s3eGcpdT_keRKxHfJmQnJCj0Ia6jw" }}
          center={center}
          defaultZoom={15}
        >
          <Circle lat={center[0]} lng={center[1]} />
        </GoogleMapReact>
      </div>
      <input onChange={handleChange("x")} placeholder={"Latitude"} />
      <input onChange={handleChange("y")} placeholder={"Longitude"} /><br />
      <button onClick={() => setCenter([Number(value.x), Number(value.y)])} >Warp to Location</button>
    </div>
  );
}