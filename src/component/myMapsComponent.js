import React,{useState} from "react";
import { Map, TileLayer,ZoomControl,Marker,Popup,withLeaflet } from "react-leaflet";

import {MapsFunction,AddressControl} from '../function/mapFunction'

import Detail from './detailMaps'


const positionDefault = [-6.200000, 106.816666];
const iconCustom = new MapsFunction()

export default function MyMapsComponent() {
  const [marker,setMarker] = useState(positionDefault)
  const [zoomLevel,setZoomLevel] = useState(10)

  const viewportChange = (e)=>{
    const position = e.center
    const setPosition = [position[0],position[1]]
    const zoomCurrent = e.zoom
    console.log(setPosition)
    setZoomLevel(zoomCurrent)
    setMarker(setPosition)
  }

  const AddresComponent = withLeaflet(AddressControl)
  return (
    <div className="map-container">
        <Map
        id="MyMaps"
        center={marker}
        zoom={zoomLevel}
        zoomControl={false}
        style={{ height: '30vw', width: "70%", margin:'3vw 15vw'}}
        onViewportChange={viewportChange}
        >
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topright" />
        <Marker position={marker} icon={iconCustom.iconMarker(25,40)} draggable={true} >
          <Popup>Set Alamat</Popup>
        </Marker>
          <AddresComponent />
        </Map>
        
        <Detail data={marker} />
    </div>
  );
}