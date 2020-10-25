/*
    call some method from leaflet.js cause in react-leaflet i cant found it
*/

import L from 'leaflet'
import  { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch'
import { MapControl } from "react-leaflet";


class MapsFunction {
    /* 
        render custom icon marker
        image source from react-leaflet its self
    */
    iconMarker = (width,height) =>{
        return L.icon({
            iconUrl: require('leaflet/dist/images/marker-icon-2x.png'),
            iconSize:[width,height]
        })
    }
}

/*
    this class for search engine from leaflet-geosearch
    i use OSM provider, but u can another provider :
    -bing
    -google
    -esri
    ...
    and many orthers, and u can make ur own provider.
    u can see in documentation https://smeijer.github.io/leaflet-geosearch/

*/
class AddressControl extends MapControl {
    constructor(props, context) {
        super(props);
    }
    createLeafletElement() {
        const provider = new OpenStreetMapProvider();
        return GeoSearchControl({ 
            provider: provider,
            style:'bar',
            searchLabel: 'Masukan Alamat Pencarian',
            showMarker:false,
            retainZoomLevel: false,
            animateZoom: true,
        });
    }

    /* 
    use did mount after createLeafletElement, 
    cause i got issue the address cant show up when address typing
    maybe the withLeaflet or GeoSearchControl must call first
    then I swicth position
    */
    componentDidMount() {
        const { map } = this.props.leaflet;
        map.addControl(this.leafletElement);

        const containerDiv = this.leafletElement.getContainer();
        L.DomEvent.disableClickPropagation(containerDiv);
    }

}

export  {
    MapsFunction,
    AddressControl
}