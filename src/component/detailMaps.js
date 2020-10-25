import React from 'react'

/* 
    component for render LONG LAT from data maps
*/

function Detail({data}) {
    return (
        <div className="detail-info">
            <p>Longitude : {data[0]}</p>
            <p>Latitude : {data[1]} </p>
        </div>
    )
}

export default Detail
