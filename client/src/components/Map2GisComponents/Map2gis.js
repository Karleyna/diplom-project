import React, { Component }  from 'react';
import { load } from '@2gis/mapgl';
import {useEffect} from "react";
import MapWrapper from './MapWrapper.js'
const doubleGisApiKey = process.env.REACT_APP_API_KEY;

export const Map = () => {
    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [83.048302,54.849405],
                zoom: 17,
                key: doubleGisApiKey,
            });
            const marker = new mapglAPI.Marker(map, {
                coordinates: [83.048302,54.849405],
            });
        });


        // Удаляем карту при размонтировании компонента
        return () => map && map.destroy();
    }, []);

    return <>
        <div style={{ width: '100%', height: '100%'}}>
            <MapWrapper />
        </div>
    </>
};


// import { load } from '@2gis/mapgl';
// // or const { load } = require('@2gis/mapgl');
//
// async function start() {
//     const mapglAPI = await load();
//
//     // container — id of the div element in your html
//     const map = new mapglAPI.Map('container', {
//         center: [54.8495, 83.0483],
//         zoom: 13,
//         key: '',
//     });
//
//     const marker = new mapglAPI.Marker(map, {
//         coordinates: [54.849539, 83.048346],
//     });
// }
// start();