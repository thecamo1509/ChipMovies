import React, { Component } from 'react'
import Img from '../images/tab-1-pic.png';
import styled from 'styled-components';
import {Button} from './Button';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
  } from '@react-google-maps/api';
import mapStyles from './mapStyles';


  const libraries = ["places"];
  const mapContainerStyle = {
      width:'40vw',
      height: '40vh',
  };

  const center = {
    lat: 37.7790262,
    lng: -122.4199061
  };
  
  const options = {
      styles: mapStyles,
      disableDefaultUI: true,
      zoomControl: true
  }
    export default function TabContentOne() {
        const {isLoaded, loadError} = useLoadScript({googleMapsApiKey: 'AIzaSyDVZX5uMn2r-7VV18ldAZ4nKj8Pp6YeHfw',
            libraries,});
        const [markers, setMarkers] =  React.useState([]);
        const [selected, setSelected] = React.useState(null);
        const onMapClick = React.useCallback((event) => {
            setMarkers(current => [...current, {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date(),
            }])
        }, []);

        const mapRef = React.useRef();
        const onMapLoad = React.useCallback((map) => {
            mapRef.current = map;
        }, []);

        if (loadError) return "Error loading Maps";
        if (!isLoaded) return "Loading";

        return (
            <TabContentContainer>
            <div className="container">
                <div class="tab-content">
                    <div>
                        <span style={{marginBottom: '2rem'}}>Find the best Movies in SF. Just type and Search!!!</span>
                        <br />
                        <Button style={{marginTop: '2rem'}} id="search">try it now</Button>
                    </div>
                    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center} options={options} onClick={onMapClick}
                    onLoad={onMapLoad}>
                        {markers.map(marker => <Marker 
                        key={marker.time.toISOString} 
                        position={{ lat: marker.lat, lng: marker.lng }}
                        icon={{
                            url: '/marker.svg',
                            scaledSize: new window.google.maps.Size(30,30),
                            origin: new window.google.maps.Point(0,0),
                            anchor: new window.google.maps.Point(15,15),
                        }}
                        onClick={() => {
                            setSelected(marker);
                        }}
                         />)}

                         {selected ? (<InfoWindow position={{lat: selected.lat, lng: selected.lng}}>
                             <div>
                                 <h2>Testing</h2>
                         <p>Spotted at test hour</p>
                             </div>
                         </InfoWindow>) : null}
                    </GoogleMap>
                </div>
            </div>
            </TabContentContainer>
        )
    }



/* Main Content Container */
const TabContentContainer = styled.div`
    background: var(--main-deep-dark);

    .container {
        margin: 0 10%;
    }

    img {
        width: 31.875rem
    }

    .tab-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        align-items: center;
        font-size: 2rem;
        padding:  2.5rem;
    }
`;