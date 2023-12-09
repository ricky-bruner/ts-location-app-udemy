import { loadGoogleMapsScript, getCoordinatesForAddress } from './GoogleMapsAPI';
import { googleMapsApiKey } from './apiKeys';

loadGoogleMapsScript(googleMapsApiKey);

const form = document.querySelector('form')! as HTMLFormElement;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    getCoordinatesForAddress(enteredAddress, googleMapsApiKey)
        .then(coordinates => {
            const map = new google.maps.Map(document.getElementById("map")! as HTMLDivElement, {
                center: coordinates,
                zoom: 16
            });

            new google.maps.Marker({ position: coordinates, map: map });
        })
        .catch(err => console.log(err));
}

form.addEventListener('submit', searchAddressHandler);
