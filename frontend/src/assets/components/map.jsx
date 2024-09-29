import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import api from '../../api';

const Map = () => {
    const [deals, setDeals] = useState([]);
    const [currentLocation, setCurrentLocation] = useState([0,0]);

    useEffect(() => {
        api.get('/deals')
        .then (res => {
            setDeals(res.data);
        })
        .catch(err => {
            console.log(err);
        }); 
    }, []);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrentLocation([position.coords.latitude, position.coords.longitude]);
        });
    }, []);

    return (
        <MapContainer center={currentLocation} zoom={13} style={{height: "100vh"}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {deals.map((deal) => (
                <Marker 
                    position={[deal.location.lat, deal.location.lng]} 
                    key = {idx}
                    icon = {L.icon({ 
                        iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
                         iconSize: [25, 41], 
                         iconAnchor: [12, 41], 
                         popupAnchor: [1, -34], 
                         shadowSize: [41, 41] })}>
                    <Popup>
                        <strong>{deal.name}</strong>
                        <br />
                        {deal.address}
                        <br />
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}