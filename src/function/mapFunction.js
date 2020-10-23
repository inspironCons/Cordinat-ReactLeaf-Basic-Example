import L from 'leaflet'
import  { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch'
import { MapControl } from "react-leaflet";


class MapsFunction {
    iconMarker = (width,height) =>{
        return L.icon({
            iconUrl: require('leaflet/dist/images/marker-icon-2x.png'),
            iconSize:[width,height]
        })
    }
}

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