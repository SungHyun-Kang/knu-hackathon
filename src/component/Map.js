import React, { useState, Wrapper, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import database from '../db/data.json'
import mapper from './mapper.css'

const MyMarker = ({ onClick, $hover, place }) => { 

    const [icon, setIcon] = useState('img/Map-icon.png');
    const [iconWidth, setIconWidth] = useState("50px");
    const changeIcon = () => {
        setIconWidth("30px");
    }
    if ($hover) { 
        return (
            <div>
                <div>
                {< InfoWindow className="Wrapper"
                    style={{ position: 'relative', transform: 'translate(-50%,-50%)' }}
                        place={place} />}
                </div>
                <div>
                <img className={$hover ? "icon_hover_on" : "icon_hover_off"}
                    style={{ position: 'relative', transform: 'translate(-50%,-250%)' }}
                    onClick={changeIcon}
                    src={icon}
                    />
                    </div>


            </div>

        );
    }
    else { 
        return (
            <div>
                <img className={$hover ? "icon_hover_on" : "icon_hover_off"}
                    style={{ 'position': 'relative', 'transform': 'translate(-50%,-50%)' }}
                    onClick={changeIcon}
                    src={icon}
                />

            </div>

        );
    }
};


// InfoWindow component
const InfoWindow = (props) => { 
    const { place } = props;
    const infoWindowStyle = { 
        position : "relative",
        bottom: 200,
        left: "-125px",
        width: 260,
        backgroundColor: "white",
        boxShadow: "0 2px 7px 1px rgba(0, 0, 0, 0.3)",
        padding: 10,
        zIndex: 100

    };

    return (
        <div style={infoWindowStyle}>
            <div style={{ fontSize: 12 }}>{place.name}</div>
            <div style={{ fontSize: 12 }}>{"------------------------------------------------------------------"}</div>
            <div style={{ fontSize: 10 }}>{place.content }</div>
        </div>
    );
};


export default function SimpleMap({test}) {

    const [N,setN] = useState([35.798,128.55]);

    useEffect(() => {
        if (test)
            setN([database.hospitals[test-1].lat, database.hospitals[test-1].lng]);
        else {
            test = 1;
            setN([35.798, 128.55])
        }

    },[test])


//    console.log(database.hospitals[test].lat)


    const defaultProps = {
        center: {
            lat: 35.79835602,
            lng: 128.5502627
        },
        zoom: 11
    };

    const defaultMapOptions = {
        fullscreenControl: true,
        zoomControl : true
    }

    return (
            <div style={{ height: '120%', width: '120%',overflow:"hidden" ,transform:"translate(-10%,-10%)"}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    center={N} 
                    zoom={13}
                    fullscreenControl={false}
                    options={defaultMapOptions}
                >
                    {database.hospitals.map((data, key) => {
                        return (
                            <MyMarker key={key} lat={data.lat} lng={data.lng} place={data} tooltip='hello' /> 
                        );
                    })}
                </GoogleMapReact>
            </div>
        );
    
}
