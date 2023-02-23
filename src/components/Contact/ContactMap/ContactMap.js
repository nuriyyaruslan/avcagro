import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './ContactMap.css';

export default function ContactMap(){

    const { isLoaded } = useLoadScript({googleMapsApiKey: "AIzaSyAaLimNOkO6A_X8Vmlf0-JYFDFBpEmlLaw"});

    if(!isLoaded) return <div>Loading ...</div>;
    
    return <Map/>
}

function Map() {
    const center = useMemo(() => ({ lat:40.394210, lng:49.867234 }),[])
    return (
        <div className="contact-cover">
            <div class="map-cover">
                <GoogleMap zoom={16} center={center} mapContainerClassName="map-container">
                    <Marker position={{ lat:40.394210, lng:49.867234 }} />
                </GoogleMap>
            </div>
        </div>
    )
} 