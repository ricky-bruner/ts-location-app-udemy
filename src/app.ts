import axios from 'axios';
import {googleMapsApiKey} from './apiKeys';

function loadGoogleMapsScript(): void {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

// Call the function to load the script
loadGoogleMapsScript();

const form = document.querySelector('form')! as HTMLFormElement;
const addressInput = document.getElementById('address')! as HTMLInputElement;

type MapCoordinates = { lat: number; lng: number };

type GoogleGeocodingResponse = {
    results: {geometry: { location: MapCoordinates}}[];
    status: 'OK' | 'ZERO_RESULTS';
}

function searchAddressHandler(event: Event){
    event.preventDefault();
    const enteredAddress = addressInput.value;

    //send to google api
    axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${googleMapsApiKey}`)
    .then(response => {
        if(response.data.status !== 'OK'){
            throw new Error('Could not fetch location...');
        }

        const coordinates: MapCoordinates = response.data.results[0].geometry.location;

        const map = new google.maps.Map(document.getElementById("map")! as HTMLDivElement, {
            center: coordinates,
            zoom: 16
        });

        new google.maps.Marker({position: coordinates, map: map});
    })
    .catch(err => {console.log(err);});
}

form.addEventListener('submit', searchAddressHandler)