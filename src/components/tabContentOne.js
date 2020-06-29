import React from 'react'
import styled from 'styled-components';
import {Button} from './Button';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
  } from '@react-google-maps/api';
import mapStyles from './mapStyles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import Geocode from "react-geocode";


    // Apollo Client to make the queries to
    const client = new ApolloClient({
        uri: 'https://chipmovies.herokuapp.com/',
    });

    let flag = true;

    const libraries = ["places"];
    
    //Styles for the Map Container
    const mapContainerStyle = {
        width:'40vw',
        height: '40vh',
    };

    // Initial coordinates that the Map renders
    const center = {
        lat: 37.7790262,
        lng: -122.4199061
    };
  
    // Options passed to the GoogleMap Component
    const options = {
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true
    }

    // Override Material UI's default theme
    const theme = createMuiTheme({
    palette: {
      primary: red
    }
  });
  


    export default function TabContentOne() {
        const {isLoaded, loadError} = useLoadScript({googleMapsApiKey: 'AIzaSyDVZX5uMn2r-7VV18ldAZ4nKj8Pp6YeHfw',
            libraries,});
        const [markers, setMarkers] =  React.useState([]);
        const [dataList, setDataList] = React.useState([]);
        const [value, setValue] = React.useState("");
        const [selected, setSelected] = React.useState(null);


        Geocode.setApiKey("AIzaSyDVZX5uMn2r-7VV18ldAZ4nKj8Pp6YeHfw");
        const mapRef = React.useRef();

        // Function that checks that the map is rendered
        const onMapLoad = React.useCallback((map) => {
            mapRef.current = map;
            flag = true;
        }, []);

        if (loadError) return "Error loading Maps";
        if (!isLoaded) return "Loading";

        /* Fetching the data from my custom GraphQL */
        function request () {
            if (flag) {
                client
                .query({
                    query: gql`
                    {
                        allMovies {
                        title
                        locations
                        }
                    }
                    `
                })// Transforming locations attribute from text into a list of addresses for each movie
                .then(function (result) {
                    var movies = result.data.allMovies;
                    var titles = [];
                    for (let i = 0; i < movies.length; i++) {
                        const movie = movies[i];
                        if (!titles.includes(movie.title)) {
                            titles.push(movie.title)
                        }
                    }
                    const finalList = []
                    for (let j = 0; j < titles.length; j++) {
                        const title = titles[j];
                        var addresses = movies.filter((data) => {
                            return data.title === title
                            })
                        const locationList = addresses.map(data => {
                            return data.locations
                        })
                        const uniques = [...new Set(locationList)]
                        finalList.push({title: title, locations: uniques})
                    }
                    setDataList(finalList);
                });
            } flag = false;
        }
        request();

        // Function to transform addresses into coordinates and set the markers on the map
        function getLocations () {
            if (value.length === 0) {
                setValue(dataList)
            } else {
                let object = dataList.filter((mydata) => {
                    return mydata.title === value
                })
                object[0].locations.map(async coordinates => {
                    // Get latidude & longitude from address.
                    Geocode.fromAddress(coordinates).then(
                        response => {
                        const { lat, lng } = response.results[0].geometry.location;
                        setMarkers(current => [...current, {
                            lat: lat,
                            lng: lng,
                            address: coordinates
                        }])
                        },
                        error => {
                        console.error(error);
                        }
                    );
                })
            }
        }

        // Function Handler which sets the value of the input searchbar and initialize the markers in empty
        const onChangeHandler = (event, value) => {
            if (value) {
                setValue(value);
            } else {
                setMarkers([]);
            }
          }; 

        console.log(value)

        return (
            <TabContentContainer>
            <div className="container">
                <div class="tab-content">
                    <div>
                        <span style={{marginBottom: '2rem'}}>Find the best Movies in SF, Just type and Search!!!</span>
                        <br />
                        <Autocomplete
                            onChange={onChangeHandler}
                            id="free-solo-2-demo"
                            disableClearable
                            options={dataList.map((option) => option.title)}
                            renderInput={(params) => (
                                <ThemeProvider theme={theme}>
                                <TextField
                                    {...params}
                                    label="Search your Movie"
                                    margin="normal"
                                    variant="outlined"
                                    style= {{ background: 'rgba(255, 255, 255, 0.95)', borderRadius: 5}}
                                    InputProps={{ ...params.InputProps, type: 'search' }}
                                />
                            </ThemeProvider>
                            )}
                        />
                        <Button style={{marginTop: '2rem'}} id="search" onClick={getLocations}>Search</Button>
                    </div>
                    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center} options={options}
                    onLoad={onMapLoad}>
                        {markers.map(marker => <Marker 
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
                                <h2>Watch it at:</h2>
                                <p>{selected.address}</p>
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

    h2 {
        color: #000
    }

    p {
        color: #000
    }
`;