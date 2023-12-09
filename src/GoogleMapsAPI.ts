import axios from 'axios';

export type MapCoordinates = { lat: number; lng: number };

type GoogleGeocodingResponse = {
    results: { geometry: { location: MapCoordinates } }[];
    status: 'OK' | 'ZERO_RESULTS';
};

export function loadGoogleMapsScript(apiKey: string): void {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

export function getCoordinatesForAddress(address: string, apiKey: string): Promise<MapCoordinates> {
    return axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${apiKey}`)
        .then(response => {
            if (response.data.status !== 'OK') {
                throw new Error('Could not fetch location...');
            }
            return response.data.results[0].geometry.location;
        });
}
